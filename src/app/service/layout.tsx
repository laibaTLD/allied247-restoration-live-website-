/**
 * Service routes fetch CMS/theme data from Postgres at request time.
 * Skipping static prerender avoids build failures when the DB times out
 * under dozens of parallel page generations.
 */
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function ServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
