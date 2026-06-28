import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mine a Mountain Calculator",
    short_name: "Mine a Mount",
    description: "Tool-first Roblox hub for Mine a Mountain with codes, calculators, and strategy pages.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d1108",
    theme_color: "#11160a",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      },
      {
        src: "/app-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      }
    ]
  };
}
