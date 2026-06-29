import { siteConfig } from "@/data/site";

export type ExpansionPage = {
  canonical: string;
  description: string;
  eyebrow: string;
  intro: string;
  related: Array<{ href: string; label: string }>;
  sections: Array<{ body: string; label: string; title: string }>;
  title: string;
};

export const expansionPages = {
  codesGuide: {
    canonical: "/codes/guide",
    description: "Mine a Mountain codes guide with checked code status, safe source checks, redeem steps, and code update tips.",
    eyebrow: "Codes guide",
    title: `${siteConfig.gameName} Codes Guide`,
    intro: "Use this codes guide to check what is verified, where code claims should come from, and how to avoid copied Roblox code lists that are not actually active.",
    sections: [
      {
        label: "Status",
        title: "Start with verified active codes",
        body: "Only use the active codes page when a code has a reliable source and a checked date. If a code is only repeated by low-quality lists, keep it off the active table until it works in-game."
      },
      {
        label: "Sources",
        title: "Check official and creator-owned surfaces first",
        body: "The Roblox game page, creator-owned announcements, and live in-game panels should outrank copied code trackers. Community reports are useful only when they are dated and repeatable."
      },
      {
        label: "Next step",
        title: "Watch update and milestone moments",
        body: "Codes often appear around updates, likes milestones, or group events. Check the update log and codes page together before publishing a new reward claim."
      }
    ],
    related: [
      { href: "/codes", label: "Active codes" },
      { href: "/updates/update-log", label: "Update log" },
      { href: "/faq", label: "FAQ" }
    ]
  },
  beginnerTips: {
    canonical: "/guides/beginner-tips",
    description: "Mine a Mountain beginner tips for the first climb, crystal selling, warmth, pickaxe, backpack, and safe Roblox progression.",
    eyebrow: "Beginner tips",
    title: `${siteConfig.gameName} Beginner Tips`,
    intro: "Beginner progress gets easier when each run answers one question: did cold, mining speed, or backpack capacity stop you from earning more cash?",
    sections: [
      {
        label: "First run",
        title: "Find the first bottleneck",
        body: "If you freeze before reaching better crystals, warmth matters. If crystals take too long to break, pickaxe speed matters. If you sell too often, backpack capacity matters."
      },
      {
        label: "Cash",
        title: "Sell reliably before chasing height",
        body: "A route only helps if you bring crystals back and sell them. Early players should prefer repeatable routes over risky climbs that end before payout."
      },
      {
        label: "Next page",
        title: "Move from tips into walkthrough",
        body: "After the first sessions feel stable, use the walkthrough and strategy pages to plan better routes and upgrade timing."
      }
    ],
    related: [
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/guides/walkthrough", label: "Walkthrough" },
      { href: "/guides/tips", label: "Tips" }
    ]
  },
  strategy: {
    canonical: "/guides/strategy",
    description: "Mine a Mountain strategy guide for upgrade order, climbing decisions, cash farming routes, and long-run planning.",
    eyebrow: "Strategy",
    title: `${siteConfig.gameName} Strategy`,
    intro: "Strategy in Mine a Mountain is about improving the loop one bottleneck at a time: survive longer, mine faster, carry more, and sell better crystals.",
    sections: [
      {
        label: "Upgrade order",
        title: "Buy the upgrade that changes the next run",
        body: "Avoid buying the same upgrade every time by habit. If your last run ended because of cold, warmth should matter. If mining was slow, pickaxe speed has a clearer purpose."
      },
      {
        label: "Route choice",
        title: "Judge routes by cash returned, not height alone",
        body: "A shorter route that sells reliably can beat a high route that freezes out or fills the backpack at the wrong time."
      },
      {
        label: "Data",
        title: "Use estimates until values are confirmed",
        body: "The calculator is intentionally conservative until exact upgrade costs and crystal values are verified. Use it for direction, not final math."
      }
    ],
    related: [
      { href: "/calculator", label: "Upgrade calculator" },
      { href: "/wiki/upgrade-order", label: "Upgrade order" },
      { href: "/guides/levels", label: "Levels guide" }
    ]
  },
  upgradeOrder: {
    canonical: "/wiki/upgrade-order",
    description: "Mine a Mountain upgrade order guide for warmth, pickaxe, backpack, cash farming, and beginner progression decisions.",
    eyebrow: "Upgrade order",
    title: `${siteConfig.gameName} Upgrade Order`,
    intro: "Upgrade order should follow the problem that limits your next run, not a universal ranking copied from another game.",
    sections: [
      {
        label: "Warmth",
        title: "Choose warmth when cold stops progress",
        body: "Warmth is strongest when it lets you stay alive long enough to reach better crystal spots and finish the sell loop."
      },
      {
        label: "Pickaxe",
        title: "Choose pickaxe when mining time is the drag",
        body: "If you reach crystals safely but spend too long breaking them, pickaxe speed can improve cash per minute."
      },
      {
        label: "Backpack",
        title: "Choose backpack when capacity cuts routes short",
        body: "Backpack upgrades help when you keep leaving profitable routes early just to sell."
      }
    ],
    related: [
      { href: "/wiki/upgrades", label: "Upgrade wiki" },
      { href: "/guides/strategy", label: "Strategy" },
      { href: "/calculator", label: "Calculator" }
    ]
  },
  levels: {
    canonical: "/guides/levels",
    description: "Mine a Mountain levels guide for mountain progression, climb difficulty, cold pressure, and route planning.",
    eyebrow: "Levels",
    title: `${siteConfig.gameName} Levels Guide`,
    intro: "Use the levels guide to think about mountain progress as a route problem: climb height, cold pressure, crystal payout, and return timing.",
    sections: [
      {
        label: "Progression",
        title: "Treat each higher section as a test",
        body: "A higher level or mountain section is worth pushing only when your warmth and route timing let you sell the crystals you find."
      },
      {
        label: "Cold",
        title: "Cold pressure changes the upgrade value",
        body: "When cold becomes the main reason a route fails, warmth upgrades can unlock more useful level progress than raw mining speed."
      },
      {
        label: "Route",
        title: "Return safely before optimizing",
        body: "First find a route that sells consistently. Then compare whether a higher section improves cash per run enough to justify the risk."
      }
    ],
    related: [
      { href: "/guides/walkthrough", label: "Walkthrough" },
      { href: "/guides/strategy", label: "Strategy" },
      { href: "/wiki/crystals", label: "Crystal wiki" }
    ]
  },
  tips: {
    canonical: "/guides/tips",
    description: "Mine a Mountain tips for climbing higher, avoiding freezing, mining crystals, selling for cash, and choosing upgrades.",
    eyebrow: "Tips",
    title: `${siteConfig.gameName} Tips`,
    intro: "These tips focus on the core climb, mine, sell, and upgrade loop instead of unverified shortcuts.",
    sections: [
      {
        label: "Climb",
        title: "Notice what ends your run",
        body: "A good tip is only useful if it solves your current bottleneck. If cold stops you, think warmth. If rocks take too long, think pickaxe. If you keep selling early, think backpack."
      },
      {
        label: "Cash",
        title: "Do not chase far crystals too early",
        body: "Higher routes are not automatically better if the trip takes too long or you freeze before selling. Compare route time with the cash you actually bring back."
      },
      {
        label: "Luck",
        title: "Claim the simple Digging Luck bonus",
        body: "The game description mentions +1 Digging Luck for liking the game and joining the group. Treat exact rare crystal math as pending until it is tested."
      }
    ],
    related: [
      { href: "/guides/beginner-tips", label: "Beginner tips" },
      { href: "/guides/strategy", label: "Strategy" },
      { href: "/wiki/upgrades", label: "Upgrade wiki" }
    ]
  },
  faq: {
    canonical: "/faq",
    description: "Mine a Mountain FAQ with quick answers for codes, upgrades, controls, Digging Luck, updates, wiki, and beginner strategy.",
    eyebrow: "FAQ",
    title: `${siteConfig.gameName} FAQ`,
    intro: "Quick answers for the highest-intent Mine a Mountain questions players search after seeing codes, guides, and update pages.",
    sections: [
      {
        label: "Codes",
        title: "Are there working Mine a Mountain codes?",
        body: "No active code should be treated as verified unless it appears on the codes page with a checked date and source note."
      },
      {
        label: "Upgrades",
        title: "What should I upgrade first?",
        body: "Upgrade the bottleneck that ended your last run: warmth for freezing, pickaxe for slow mining, or backpack for too many sell trips."
      },
      {
        label: "Updates",
        title: "How often should I check updates?",
        body: "The Roblox description mentions a new mountain every hour, while code and reward claims should be checked whenever the game page or creator sources change."
      }
    ],
    related: [
      { href: "/codes/guide", label: "Codes guide" },
      { href: "/guides/beginner-tips", label: "Beginner tips" },
      { href: "/updates/update-log", label: "Update log" }
    ]
  },
  updateLog: {
    canonical: "/updates/update-log",
    description: "Mine a Mountain update log for Roblox page changes, hourly mountain notes, codes checks, and wiki expansion tracking.",
    eyebrow: "Update log",
    title: `${siteConfig.gameName} Update Log`,
    intro: "Use this update log to separate confirmed Roblox page changes from community guesses and unverified rotation names.",
    sections: [
      {
        label: "Current",
        title: "Official hourly mountain wording",
        body: "The public Roblox description says there is a new mountain every hour. Exact mountain names should stay out of the log until verified."
      },
      {
        label: "Codes",
        title: "Code claims stay tied to source checks",
        body: "When a new code claim appears, check it against the codes page policy before treating it as active."
      },
      {
        label: "Expansion",
        title: "Next wiki updates should add tested values",
        body: "The best next improvements are verified crystal values, upgrade costs, and route timing notes gathered from live play."
      }
    ],
    related: [
      { href: "/updates", label: "Updates" },
      { href: "/codes/guide", label: "Codes guide" },
      { href: "/faq", label: "FAQ" }
    ]
  },
  walkthrough: {
    canonical: "/guides/walkthrough",
    description: "Mine a Mountain walkthrough for first runs, climbing, mining crystals, selling cash, and choosing next upgrades.",
    eyebrow: "Walkthrough",
    title: `${siteConfig.gameName} Walkthrough`,
    intro: "This walkthrough turns the early game into a simple sequence: climb, mine, sell, upgrade, then repeat with a clearer goal.",
    sections: [
      {
        label: "Start",
        title: "Make the first climb simple",
        body: "Do not worry about perfect routes immediately. Learn how far you can climb, which crystals are easy to mine, and how quickly cold becomes a problem."
      },
      {
        label: "Sell",
        title: "Bank cash before pushing farther",
        body: "A run only counts when the crystals are sold. Return earlier if you are learning a new route or testing a higher section."
      },
      {
        label: "Improve",
        title: "Use the last failed run as your upgrade clue",
        body: "Freezing points to warmth, slow mining points to pickaxe, and repeated sell trips point to backpack capacity."
      }
    ],
    related: [
      { href: "/guides/beginner", label: "Beginner guide" },
      { href: "/guides/levels", label: "Levels guide" },
      { href: "/wiki/upgrade-order", label: "Upgrade order" }
    ]
  },
  advancedGuide: {
    canonical: "/guides/advanced",
    description: "Advanced Mine a Mountain guide for route testing, upgrade planning, value checks, and post-beginner strategy.",
    eyebrow: "Advanced guide",
    title: `${siteConfig.gameName} Advanced Guide`,
    intro: "Once basic climbs are stable, advanced progress comes from measuring routes, testing upgrades, and replacing guesses with source-backed values.",
    sections: [
      {
        label: "Testing",
        title: "Compare routes with the same timer",
        body: "Run two routes for similar time windows and compare cash returned. This avoids overvaluing a route just because it reaches a taller point."
      },
      {
        label: "Values",
        title: "Turn crystal notes into calculator data",
        body: "When crystal values and upgrade costs are verified, move them into the calculator so decisions become more exact."
      },
      {
        label: "Updates",
        title: "Recheck strategy after visible changes",
        body: "If Roblox page text, creator posts, or live mechanics change, update the relevant guide and link back to the update log."
      }
    ],
    related: [
      { href: "/guides/strategy", label: "Strategy" },
      { href: "/wiki/crystals", label: "Crystal wiki" },
      { href: "/updates/update-log", label: "Update log" }
    ]
  }
} satisfies Record<string, ExpansionPage>;

export const expansionPageCards = Object.values(expansionPages).map((page) => ({
  title: page.title,
  href: page.canonical,
  eyebrow: page.eyebrow,
  description: page.description
}));
