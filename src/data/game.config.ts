import type { GameConfig } from "@/types/site";

export const gameConfig: GameConfig = {
  name: "Mine a Mountain",
  slug: "mine-a-mountain",
  domain: "https://mineamountain.com",
  theme: {
    primaryColor: "#38BDF8",
    accentColor: "#34D399",
    surfaceColor: "#10202B",
    style: "roblox-seo-hub"
  },
  currency: {
    name: "Coins",
    abbr: "COINS"
  },
  features: {
    hasCalculator: true,
    hasTierList: true,
    hasCodesPage: true,
    hasBrainrotIndex: false,
    hasHandbook: true
  },
  updateCadence: "Daily checks",
  dataSources: {
    officialGameUrl: "https://www.roblox.com/games/125927821145949/Mine-a-Mountain",
    discord: "#",
    trello: "#"
  },
  ads: {
    publisher: "Adsterra + Google AdSense",
    usesRuntimeConfig: true
  }
};
