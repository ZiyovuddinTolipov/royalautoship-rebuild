import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { serviceData, businessData } from "@/lib/services-data";
import { statesData } from "@/lib/states-data";
import { routesData } from "@/lib/routes-data";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const coreRoutes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/quote", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/services", priority: 0.85 },
    { path: "/blog", priority: 0.75 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/carriers", priority: 0.5 },
    { path: "/privacy-policy", priority: 0.2 },
    { path: "/terms-conditions", priority: 0.2 },
  ];

  const serviceRoutes = Object.keys(serviceData).map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.85,
  }));

  const businessRoutes = Object.keys(businessData).map((slug) => ({
    path: `/business/${slug}`,
    priority: 0.75,
  }));

  const stateRoutes = statesData.map((s) => ({
    path: `/car-shipping/${s.slug}`,
    priority: 0.8,
  }));

  const routePages = routesData.map((r) => ({
    path: `/ship-car-from/${r.slug}`,
    priority: 0.75,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
  }));

  const all = [
    ...coreRoutes,
    ...serviceRoutes,
    ...businessRoutes,
    ...stateRoutes,
    ...routePages,
    ...blogRoutes,
  ];

  return all.map((r) => ({
    url: `${site.url}${r.path === "/" ? "" : r.path}`,
    changeFrequency: "weekly" as const,
    priority: r.priority,
  }));
}
