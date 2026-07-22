import { Pool, PoolClient } from "pg";
import { cache } from "react";
import { unstable_cache } from "next/cache";
import { LandingPageData, Image } from "@/types/template";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 3,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
  keepAlive: true,
});

/** Serialize DB access during build so we don't overwhelm the remote DB. */
let queue: Promise<unknown> = Promise.resolve();
function enqueue<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.then(
    () => undefined,
    () => undefined
  );
  return run;
}

async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      const delay = 500 * Math.pow(2, i);
      await new Promise((r) => setTimeout(r, delay));
    }
  }
  throw lastError;
}

export async function query(text: string, params?: unknown[]) {
  return enqueue(() =>
    withRetry(async () => {
      let client: PoolClient | undefined;
      try {
        client = await pool.connect();
        const result = await client.query(text, params);
        return result.rows;
      } finally {
        client?.release();
      }
    })
  );
}

export async function fetchLandingPageData(templateId: string, id: string): Promise<LandingPageData | null> {
  try {
    const rows = await query(`
      SELECT * FROM "LandingPage" 
      WHERE "templateId" = $1 AND id = $2
    `, [templateId, id]);
    
    if (rows.length === 0) return null;
    
    return rows[0] as LandingPageData;
  } catch (error) {
    console.error('Error fetching landing page data:', error);
    return null;
  }
}

export async function fetchImages(landingPageId: string): Promise<Image[]> {
  const rows = await query(`
    SELECT * FROM "Image" 
    WHERE "landingPageId" = $1
    ORDER BY "createdAt" ASC
  `, [landingPageId]);
  
  return rows as Image[];
}

export async function fetchLandingPageWithImages(templateId: string, id: string): Promise<LandingPageData | null> {
  const landingPage = await fetchLandingPageData(templateId, id);
  if (!landingPage) return null;
  
  const images = await fetchImages(landingPage.id);
  return { ...landingPage, images };
}

async function fetchLandingPageForSSGUncached(templateId: string, id: string): Promise<LandingPageData | null> {
  try {
    const rows = await query(`
      SELECT 
        lp.*,
        COALESCE(
          json_agg(
            json_build_object(
              'id', img.id,
              'landingPageId', img."landingPageId",
              'title', img.title,
              'altText', img."altText",
              'imageUrl', img."imageUrl",
              'slotName', img."slotName",
              'category', img.category,
              'createdAt', img."createdAt"
            ) ORDER BY img."createdAt" ASC
          ) FILTER (WHERE img.id IS NOT NULL),
          '[]'::json
        ) as images
      FROM "LandingPage" lp
      LEFT JOIN "Image" img ON lp.id = img."landingPageId"
      WHERE lp."templateId" = $1 AND lp.id = $2
      GROUP BY lp.id
    `, [templateId, id]);
    
    if (rows.length === 0) return null;
    
    return rows[0] as LandingPageData & { images: Image[] };
  } catch (error) {
    console.error('Error fetching landing page data for SSG:', error);
    return null;
  }
}

/** Deduped per-request + cached across requests (60s). */
export const fetchLandingPageForSSG = cache(async (templateId: string, id: string): Promise<LandingPageData | null> => {
  return unstable_cache(
    () => fetchLandingPageForSSGUncached(templateId, id),
    ["landing-page", templateId, id],
    { revalidate: 300, tags: [`landing-${id}`] }
  )();
});

export async function getAllLandingPageIds(): Promise<Array<{ templateId: string; id: string }>> {
  try {
    const rows = await query(`
      SELECT "templateId", id 
      FROM "LandingPage" 
      WHERE status = 'published'
      ORDER BY "updatedAt" DESC
    `);
    
    return rows.map(row => ({
      templateId: row.templateId,
      id: row.id
    }));
  } catch (error) {
    console.error('Error fetching landing page IDs:', error);
    return [];
  }
}
