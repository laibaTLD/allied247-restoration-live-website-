import { fetchLandingPageForSSG } from '@/lib/database'
import AdminLoginClient from './AdminLoginClient'

export default async function AdminLoginPage() {
    // Fetch theme data on server side
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID
    const id = process.env.NEXT_PUBLIC_ID
    const landingPageData = templateId && id ? await fetchLandingPageForSSG(templateId, id) : null

    return <AdminLoginClient landingPageData={landingPageData || { themeData: undefined }} />
}
