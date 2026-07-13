import { MetadataRoute } from "next";
import { getPublishedBlogPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://www.allied247-restoration.com";

    // Static routes
    const staticRoutes = [
        "",
        "/about",
        "/contact-us",
        "/serving-areas",
        "/service",
        "/blog",

        // Damage Restoration
        "/service/damage-restoration",
        "/service/damage-restoration/service-areas/bigfork-mt",
        "/service/damage-restoration/service-areas/columbia-falls-mt",
        "/service/damage-restoration/service-areas/kalispell-mt",
        "/service/damage-restoration/service-areas/lakeside-mt",
        "/service/damage-restoration/service-areas/whitefish-mt",

        // Fire Restoration
        "/service/fire-restoration",
        "/service/fire-restoration/service-areas/bigfork-mt",
        "/service/fire-restoration/service-areas/columbia-falls-mt",
        "/service/fire-restoration/service-areas/kalispell-mt",
        "/service/fire-restoration/service-areas/lakeside-mt",
        "/service/fire-restoration/service-areas/whitefish-mt",

        // Mold Remediation
        "/service/mold-remediation",
        "/service/mold-remediation/service-areas/bigfork-mt",
        "/service/mold-remediation/service-areas/columbia-falls-mt",
        "/service/mold-remediation/service-areas/kalispell-mt",
        "/service/mold-remediation/service-areas/lakeside-mt",
        "/service/mold-remediation/service-areas/whitefish-mt",

        // Multi Surface Cleaning
        "/service/multi-surface-cleaning",
        "/service/multi-surface-cleaning/service-areas/bigfork-mt",
        "/service/multi-surface-cleaning/service-areas/columbia-falls-mt",
        "/service/multi-surface-cleaning/service-areas/Kalispell-mt",
        "/service/multi-surface-cleaning/service-areas/lakeside-mt",
        "/service/multi-surface-cleaning/service-areas/whitefish-mt",

        // Radon Mitigation
        "/service/radon-mitigation",
        "/service/radon-mitigation/service-areas",
        "/service/radon-mitigation/service-areas/bigfork-mt",
        "/service/radon-mitigation/service-areas/columbia-falls-mt",
        "/service/radon-mitigation/service-areas/kalispell-mt",
        "/service/radon-mitigation/service-areas/lakeside-mt",
        "/service/radon-mitigation/service-areas/whitefish-mt",

        // Reconstruction
        "/service/reconstruction",
        "/service/reconstruction/service-areas/bigfork-mt",
        "/service/reconstruction/service-areas/columbia-falls-mt",
        "/service/reconstruction/service-areas/kalispell-mt",
        "/service/reconstruction/service-areas/lakeside-mt",
        "/service/reconstruction/service-areas/whitefish-mt",

        // Water Restoration
        "/service/water-restoration",
        "/service/water-restoration/service-areas/bigfork-mt",
        "/service/water-restoration/service-areas/columbia-falls-mt",
        "/service/water-restoration/service-areas/kalispell-mt",
        "/service/water-restoration/service-areas/lakeside-mt",
        "/service/water-restoration/service-areas/whitefish-mt",
    ];

    // Get blog posts dynamically
    const blogPosts = await getPublishedBlogPosts();

    // Create sitemap entries for static routes
    const staticSitemapEntries = staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: route === "" ? 1 : 0.8,
    }));

    // Create sitemap entries for blog posts
    const blogSitemapEntries = blogPosts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.updated_at ? new Date(post.updated_at) : new Date(),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Combine all entries
    return [...staticSitemapEntries, ...blogSitemapEntries];
}
