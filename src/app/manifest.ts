import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "عزل الرياض",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9ff",
    theme_color: "#001e40",
    lang: "ar",
    dir: "rtl",
    orientation: "portrait-primary",
    categories: ["business", "utilities"],
  };
}
