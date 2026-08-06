import type { EditorialSignal, FaqItem, GameCode, HeroMetric, LinkCard, SiteConfig, TierPreviewItem } from "@/types/site";
import { gameConfig } from "@/data/game.config";

export const siteConfig: SiteConfig = {
  name: `${gameConfig.name} Wiki`,
  domain: gameConfig.domain,
  gameName: gameConfig.name,
  description: `${gameConfig.name} wiki with checked code status, Trello and Discord status, an upgrade planner, guides, and evidence-based Roblox progression help.`,
  valueProposition: `Check ${gameConfig.name} codes, plan warmth, pickaxe, and backpack upgrades, and verify official links before you grind in Roblox.`,
  shortDisclosure: `${gameConfig.name} Wiki is an unofficial fan-made resource. Roblox and the game creators remain the source of record for official support and updates.`,
  lastUpdated: "2026-08-06",
  freshnessLabel: "codes, links, updates, and upgrade notes checked",
  keywords: [
    `${gameConfig.name}`,
    `${gameConfig.name} codes`,
    `${gameConfig.name} tier list`,
    `${gameConfig.name} trello`,
    `${gameConfig.name} discord`,
    `${gameConfig.name} wiki`,
    `${gameConfig.name} official wiki`,
    `${gameConfig.name} guide`,
    `${gameConfig.name} calculator`,
    "Roblox codes",
    "Roblox tier list"
  ],
  navGroups: [
    {
      label: "Home",
      href: "/",
      items: []
    },
    {
      label: "Codes",
      href: "/codes",
      items: [
        { label: "Code Status", href: "/codes", description: "Checked reward status and no-fake-code policy." },
        { label: "Sources", href: "/sources", description: "Where code and update claims should be checked." }
      ]
    },
    {
      label: "Tier List",
      href: "/tier-list",
      items: [
        { label: "Upgrade Priority", href: "/tier-list", description: "Conditional Warmth, Pickaxe, and Backpack priorities." },
        { label: "Route Planner", href: "/calculator", description: "Diagnose the bottleneck ending your current route." }
      ]
    },
    {
      label: "Wiki",
      href: "/wiki",
      items: [
        { label: "Wiki Hub", href: "/wiki", description: "Confirmed crystals, upgrades, cold, and mountain systems." },
        { label: "Crystals", href: "/wiki/crystals", description: "Confirmed crystal mechanics and missing value boundaries." },
        { label: "Upgrades", href: "/wiki/upgrades", description: "Warmth, Pickaxe, and Backpack decisions." }
      ]
    },
    {
      label: "Guides",
      href: "/guides",
      items: [
        { label: "Beginner Guide", href: "/guides/beginner", description: "A complete first-session route." },
        { label: "Route Planner", href: "/calculator", description: "Diagnose the limit ending the current run." }
      ]
    },
    {
      label: "Community",
      href: "/trello",
      items: [
        { label: "Trello/Discord", href: "/trello", description: "Official board, Discord, and wiki status." },
        { label: "Updates", href: "/updates", description: "Dated official and editorial changes." },
        { label: "Sources", href: "/sources", description: "Evidence hierarchy and check dates." }
      ]
    },
    {
      label: "About",
      href: "/about",
      items: [
        { label: "About Michell", href: "/about", description: "Author identity and editorial standards." },
        { label: "Disclosure", href: "/disclosure", description: "Fan-made status and source boundaries." },
        { label: "Contact", href: "/contact", description: "Corrections and editorial contact path." },
        { label: "Privacy", href: "/privacy", description: "Privacy and ad disclosure." },
        { label: "Terms", href: "/terms", description: "Terms for using this fan resource." }
      ]
    }
  ]
};

export const heroActions = [
  { href: "/codes", label: "Get codes" },
  { href: "/tier-list", label: "View tier list" },
  { href: "/trello", label: "Check sources" },
  { href: "/calculator", label: "Use calculator" }
] as const;

export const heroMetrics: HeroMetric[] = [
  { label: "Code status", value: "No active code", note: "Official listing checked August 6, 2026" },
  { label: "Official creator", value: "10K Steps", note: "Verified group on Roblox" },
  { label: "Mountain cadence", value: "Hourly", note: "Wording from the official description" },
  { label: "Evidence model", value: "3 levels", note: "Confirmed, inference, needs verification" }
];

export const activeCodes: GameCode[] = [];

export const tierPreview: TierPreviewItem[] = [
  {
    name: "Warmth",
    tier: "Role",
    role: "Climb higher",
    reason: "Warmth is the safest first priority when freezing stops your run before you reach better crystals.",
    confidence: "Verified mechanic, exact values pending",
    bestFor: ["climbing", "anti-freeze"],
    sourceNote: "Roblox description confirms warmth upgrades and cold pressure near the top.",
    teamNote: "Use the calculator when deciding whether warmth or mining speed solves your current problem."
  },
  {
    name: "Pickaxe",
    tier: "Role",
    role: "Mine faster",
    reason: "Pickaxe upgrades should matter most when crystals take too long to mine and your backpack is not the bottleneck.",
    confidence: "Verified mechanic, exact values pending",
    bestFor: ["mining", "cash speed"],
    sourceNote: "Roblox description confirms pickaxe upgrades and crystal mining.",
    teamNote: "Compare with backpack upgrades if you spend more time selling than mining."
  },
  {
    name: "Backpack",
    tier: "Role",
    role: "Carry more",
    reason: "Backpack upgrades help when your route is cut short by capacity and you lose time returning to sell.",
    confidence: "Verified mechanic, exact values pending",
    bestFor: ["longer routes", "cash loops"],
    sourceNote: "Roblox description confirms backpack upgrades and selling crystals for cash.",
    teamNote: "Use after warmth keeps you alive long enough for longer routes."
  }
];

export const toolCards: LinkCard[] = [
  {
    title: `${gameConfig.name} Calculator`,
    href: "/calculator",
    eyebrow: "Primary tool",
    description: "A practical planner for choosing warmth, pickaxe, or backpack when exact values are still being checked."
  },
  {
    title: `${gameConfig.name} Tier List`,
    href: "/tier-list",
    eyebrow: "Rankings",
    description: "Compares warmth, pickaxe, backpack, and crystal roles with visible confidence labels."
  },
  {
    title: `${gameConfig.name} Codes`,
    href: "/codes",
    eyebrow: "Codes",
    description: "Shows whether any active or expired Mine a Mountain codes are verified today."
  },
  {
    title: `${gameConfig.name} Trello & Discord`,
    href: "/trello",
    eyebrow: "Community status",
    description: "Clarifies official Trello, Discord, wiki, and Roblox source status for update-sensitive claims."
  }
];

export const guideClusters: LinkCard[] = [
  {
    title: "Beginner guide",
    href: "/guides/beginner",
    eyebrow: "Guide",
    description: "First-session path for climbing, mining crystals, selling for cash, and picking upgrades."
  },
  {
    title: "Upgrades guide",
    href: "/wiki/upgrades",
    eyebrow: "Guide",
    description: "Compare Warmth, Pickaxe, and Backpack by the first problem that ended the route."
  },
  {
    title: "Route bottleneck planner",
    href: "/calculator",
    eyebrow: "Tool",
    description: "Turn a route observation into a cautious next-upgrade test without fake ROI."
  }
];

export const wikiCards: LinkCard[] = [
  {
    title: "Crystals",
    href: "/wiki/crystals",
    eyebrow: "Wiki",
    description: "Track rare crystals, value gaps, and which details still need in-game confirmation."
  },
  {
    title: "Upgrades",
    href: "/wiki/upgrades",
    eyebrow: "Wiki",
    description: "Compare warmth, pickaxe, and backpack roles before exact costs are available."
  },
  {
    title: "Dated updates",
    href: "/updates",
    eyebrow: "Updates",
    description: "Track official Roblox timestamps, source checks, and editorial changes by date."
  }
];

export const officialLinks: LinkCard[] = [
  {
    title: "Official Roblox game page",
    href: gameConfig.dataSources.officialGameUrl,
    eyebrow: "Official",
    description: "Use this page as the source of record for game title, creator, and live Roblox availability."
  },
  {
    title: "Trello, Discord, and board status",
    href: gameConfig.dataSources.trello && gameConfig.dataSources.trello !== "#" ? gameConfig.dataSources.trello : (gameConfig.dataSources.discord && gameConfig.dataSources.discord !== "#" ? gameConfig.dataSources.discord : "/trello"),
    eyebrow: "Community",
    description: "Use this status route or verified creator links to separate official boards from community references."
  },
  {
    title: "Source checklist",
    href: "/sources",
    eyebrow: "Editorial",
    description: "Document which claims are official, community confirmed, or still uncertain."
  }
];

export const editorialSignals: EditorialSignal[] = [
  {
    title: "Freshness first",
    body: "Codes, updates, and tier lists should show a visible checked date and avoid pretending unverified claims are final."
  },
  {
    title: "Entity coverage",
    body: "Keep crystals, upgrades, and mountain status easy to find instead of burying them on the homepage."
  },
  {
    title: "Fan-site clarity",
    body: "This fan site clearly points players back to official Roblox and creator-owned support paths."
  }
];

export const faqs: Record<"home" | "codes" | "tierList" | "calculator", FaqItem[]> = {
  home: [
    {
      q: `What is ${gameConfig.name} Wiki?`,
      a: `${gameConfig.name} Wiki is a fan-made Roblox resource for code status, upgrade planning, Trello and Discord status, guides, and evidence-based progression help.`
    },
    {
      q: `Is this the official ${gameConfig.name} website?`,
      a: "No. This is an unofficial fan site. Use the official Roblox page and creator-owned channels for official support, purchases, moderation, and account issues."
    },
    {
      q: `How often should ${gameConfig.name} codes be checked?`,
      a: "Codes should be checked whenever the game updates, reaches milestones, or community sources report new rewards. Keep the checked date visible."
    },
    {
      q: `What pages should be expanded first?`,
      a: "Start with codes, tier list, Trello/Discord status, calculator, beginner guide, crystal notes, upgrade notes, and sources. Add deeper pages after research confirms exact values."
    }
  ],
  codes: [
    {
      q: `Where do ${gameConfig.name} codes and code drops come from?`,
      a: "Use the official Roblox game page first, then creator-owned channels if they are verified. Community reports should stay unlisted until the exact Mine a Mountain code and reward can be checked."
    },
    {
      q: "Why are there no active codes listed?",
      a: "No active Mine a Mountain codes were verified during the latest check. New codes should only be added after an official or trusted source confirms them."
    },
    {
      q: "Should I trust a Mine a Mountain Discord code screenshot?",
      a: "Only if the Discord or post can be tied back to the creator, Roblox page, or another reliable source. Random screenshots should not be treated as active codes."
    }
  ],
  tierList: [
    {
      q: "How should the tier list be updated?",
      a: "Rank upgrade roles by use case, explain confidence, and avoid exact S-tier claims until costs, effects, and crystal values are verified."
    }
  ],
  calculator: [
    {
      q: "Is the calculator exact?",
      a: "The calculator is an estimated upgrade planner. It helps choose a direction, but exact ROI waits for verified upgrade costs and crystal values."
    }
  ]
};
