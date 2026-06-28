import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const dynamic = "force-static";
export const alt = `${siteConfig.gameName} Tier List`;
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(135deg, #10202b 0%, #164e63 48%, #111113 100%)",
          color: "white",
          padding: 72
        }}
      >
        <div style={{ fontSize: 34, color: "#38bdf8", fontWeight: 800 }}>Warmth, pickaxe, backpack</div>
        <div style={{ marginTop: 24, fontSize: 78, lineHeight: 1, fontWeight: 900 }}>
          {`${siteConfig.gameName} Tier List`}
        </div>
        <div style={{ marginTop: 28, maxWidth: 920, fontSize: 30, lineHeight: 1.35, color: "rgba(255,255,255,0.76)" }}>
          Role-first upgrade rankings for climbing higher and mining better crystals.
        </div>
      </div>
    ),
    size
  );
}
