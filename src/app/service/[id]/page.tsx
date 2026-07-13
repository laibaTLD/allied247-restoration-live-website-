import { notFound } from "next/navigation";

// The project no longer uses dynamic service detail pages. This stub ensures the
// old /services/[id] route compiles cleanly and always returns 404, so all
// traffic should go through the new static service pages under /services.
export default function ServiceDetailPage() {
  notFound();
}
