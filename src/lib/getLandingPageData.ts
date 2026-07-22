import { notFound } from "next/navigation";
import { fetchLandingPageForSSG } from "@/lib/database";
import { LandingPageData } from "@/types/template";

/**
 * Shared landing-page loader for pages that require CMS/theme data.
 * Uses notFound() instead of throw so a missing page does not kill `next build`.
 */
export async function getRequiredLandingPageData(): Promise<LandingPageData> {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const id = process.env.NEXT_PUBLIC_ID;

  if (!templateId || !id) {
    console.error(
      "Missing required environment variables: NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_ID"
    );
    notFound();
  }

  const landingPageData = await fetchLandingPageForSSG(templateId, id);

  if (!landingPageData) {
    console.error(
      `Landing page not found: templateId=${templateId}, id=${id}`
    );
    notFound();
  }

  return landingPageData;
}
