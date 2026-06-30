import { siteConfig } from "@/data/site";

export type ExpansionPage = {
  canonical: string;
  description: string;
  eyebrow: string;
  faqs?: Array<{ q: string; a: string }>;
  intro: string;
  quickChecks?: string[];
  related: Array<{ href: string; label: string }>;
  sections: Array<{ body: string; label: string; title: string }>;
  title: string;
};

const loopChecks = [
  "Check what ended the last run before buying another upgrade.",
  "Compare the full climb, mine, sell loop instead of one exciting crystal spot.",
  "Keep exact values pending until they are verified in-game or by creator-owned sources."
];

export const expansionPages = {
  codesGuide: {
    canonical: "/codes/guide",
    description: "Mine a Mountain codes guide with checked code status, safe source checks, redeem steps, and code update tips.",
    eyebrow: "Codes guide",
    title: `${siteConfig.gameName} Codes Guide`,
    intro: "Use this codes guide to check what is verified, where code claims should come from, and how to avoid copied Roblox code lists that are not actually active.",
    sections: [
      { label: "Status", title: "Start with verified active codes", body: "Only use the active codes page when a code has a reliable source and a checked date. If a code is only repeated by low-quality lists, keep it off the active table until it works in-game." },
      { label: "Sources", title: "Check official and creator-owned surfaces first", body: "The Roblox game page, creator-owned announcements, and live in-game panels should outrank copied code trackers. Community reports are useful only when they are dated and repeatable." },
      { label: "Next step", title: "Watch update and milestone moments", body: "Codes often appear around updates, likes milestones, or group events. Check the update log and codes page together before publishing a new reward claim." }
    ],
    related: [{ href: "/codes", label: "Active codes" }, { href: "/updates/update-log", label: "Update log" }, { href: "/faq", label: "FAQ" }],
    quickChecks: ["Check the active codes page before trying any reward claim.", "Ignore code strings that do not have a visible checked date or reliable source.", "Recheck after Roblox page updates, creator posts, or milestone announcements."],
    faqs: [
      { q: "Should I list a Mine a Mountain code before testing it?", a: "No. Keep untested codes off the active list until a reliable source and in-game check support the claim." },
      { q: "Where should Mine a Mountain code claims be checked first?", a: "Start with the official Roblox page, creator-owned channels when available, and the live game UI before using community trackers." }
    ]
  },
  beginnerTips: {
    canonical: "/guides/beginner-tips",
    description: "Mine a Mountain beginner tips for the first climb, crystal selling, warmth, pickaxe, backpack, and safe Roblox progression.",
    eyebrow: "Beginner tips",
    title: `${siteConfig.gameName} Beginner Tips`,
    intro: "Beginner progress gets easier when each run answers one question: did cold, mining speed, or backpack capacity stop you from earning more cash?",
    sections: [
      { label: "First run", title: "Find the first bottleneck", body: "If you freeze before reaching better crystals, warmth matters. If crystals take too long to break, pickaxe speed matters. If you sell too often, backpack capacity matters." },
      { label: "Cash", title: "Sell reliably before chasing height", body: "A route only helps if you bring crystals back and sell them. Early players should prefer repeatable routes over risky climbs that end before payout." },
      { label: "Next page", title: "Move from tips into walkthrough", body: "After the first sessions feel stable, use the walkthrough and strategy pages to plan better routes and upgrade timing." }
    ],
    related: [{ href: "/guides/beginner", label: "Beginner guide" }, { href: "/guides/walkthrough", label: "Walkthrough" }, { href: "/guides/tips", label: "Tips" }],
    quickChecks: ["Write down whether cold, mining speed, or backpack space stopped progress.", "Sell crystals reliably before chasing a route that climbs much higher.", "Use the walkthrough when you need a simple first-session path."],
    faqs: [
      { q: "What should a beginner upgrade first in Mine a Mountain?", a: "Upgrade the bottleneck from the last run: warmth for freezing, pickaxe for slow mining, or backpack for too many sell trips." },
      { q: "Should beginners always climb as high as possible?", a: "No. A safer route that sells crystals consistently can be better than a high climb that ends before payout." }
    ]
  },
  strategy: {
    canonical: "/guides/strategy",
    description: "Mine a Mountain strategy guide for upgrade order, climbing decisions, cash farming routes, and long-run planning.",
    eyebrow: "Strategy",
    title: `${siteConfig.gameName} Strategy`,
    intro: "Strategy in Mine a Mountain is about improving the loop one bottleneck at a time: survive longer, mine faster, carry more, and sell better crystals.",
    sections: [
      { label: "Upgrade order", title: "Buy the upgrade that changes the next run", body: "Avoid buying the same upgrade every time by habit. If your last run ended because of cold, warmth should matter. If mining was slow, pickaxe speed has a clearer purpose." },
      { label: "Route choice", title: "Judge routes by cash returned, not height alone", body: "A shorter route that sells reliably can beat a high route that freezes out or fills the backpack at the wrong time." },
      { label: "Data", title: "Use estimates until values are confirmed", body: "The calculator is intentionally conservative until exact upgrade costs and crystal values are verified. Use it for direction, not final math." }
    ],
    related: [{ href: "/calculator", label: "Upgrade calculator" }, { href: "/wiki/upgrade-order", label: "Upgrade order" }, { href: "/guides/levels", label: "Levels guide" }],
    quickChecks: ["Compare cash returned, not only climb height.", "Use upgrade order notes when a run fails for the same reason twice.", "Treat exact ROI as estimated until crystal values and upgrade costs are verified."],
    faqs: [
      { q: "What is the safest Mine a Mountain strategy?", a: "Improve the loop one bottleneck at a time: survive longer, mine faster, carry more, and sell reliably." },
      { q: "Is the highest route always the best route?", a: "No. A route is only better if it improves the crystals you sell after accounting for climb time, mining time, and cold pressure." }
    ]
  },
  upgradeOrder: {
    canonical: "/wiki/upgrade-order",
    description: "Mine a Mountain upgrade order guide for warmth, pickaxe, backpack, cash farming, and beginner progression decisions.",
    eyebrow: "Upgrade order",
    title: `${siteConfig.gameName} Upgrade Order`,
    intro: "Upgrade order should follow the problem that limits your next run, not a universal ranking copied from another game.",
    sections: [
      { label: "Warmth", title: "Choose warmth when cold stops progress", body: "Warmth is strongest when it lets you stay alive long enough to reach better crystal spots and finish the sell loop." },
      { label: "Pickaxe", title: "Choose pickaxe when mining time is the drag", body: "If you reach crystals safely but spend too long breaking them, pickaxe speed can improve cash per minute." },
      { label: "Backpack", title: "Choose backpack when capacity cuts routes short", body: "Backpack upgrades help when you keep leaving profitable routes early just to sell." }
    ],
    related: [{ href: "/wiki/upgrades", label: "Upgrade wiki" }, { href: "/guides/pickaxe", label: "Pickaxe guide" }, { href: "/guides/backpack", label: "Backpack guide" }],
    quickChecks: ["Pick warmth when cold ends the route before better crystals.", "Pick pickaxe when crystals take too long to mine.", "Pick backpack when sell trips interrupt a good route."],
    faqs: [
      { q: "Is there one best Mine a Mountain upgrade order?", a: "No. The best order changes with the problem stopping your current run." },
      { q: "When should I stop buying warmth?", a: "If you survive long enough but mining or capacity slows the route, test pickaxe or backpack upgrades instead." }
    ]
  },
  levels: {
    canonical: "/guides/levels",
    description: "Mine a Mountain levels guide for mountain progression, climb difficulty, cold pressure, and route planning.",
    eyebrow: "Levels",
    title: `${siteConfig.gameName} Levels Guide`,
    intro: "Use the levels guide to think about mountain progress as a route problem: climb height, cold pressure, crystal payout, and return timing.",
    sections: [
      { label: "Progression", title: "Treat each higher section as a test", body: "A higher level or mountain section is worth pushing only when your warmth and route timing let you sell the crystals you find." },
      { label: "Cold", title: "Cold pressure changes the upgrade value", body: "When cold becomes the main reason a route fails, warmth upgrades can unlock more useful level progress than raw mining speed." },
      { label: "Route", title: "Return safely before optimizing", body: "First find a route that sells consistently. Then compare whether a higher section improves cash per run enough to justify the risk." }
    ],
    related: [{ href: "/guides/walkthrough", label: "Walkthrough" }, { href: "/guides/strategy", label: "Strategy" }, { href: "/wiki/crystals", label: "Crystal wiki" }],
    quickChecks: ["Treat each higher section as a separate route test.", "Return and sell before comparing whether the route improved.", "Use warmth notes when cold pressure starts deciding the run."],
    faqs: [
      { q: "What does levels mean for Mine a Mountain?", a: "This page uses levels to describe higher mountain sections and route progress, not a confirmed numbered level table." },
      { q: "Should I farm the highest section I can reach?", a: "Only if the full climb, mining, and sell loop returns better value than a safer route." }
    ]
  },
  tips: {
    canonical: "/guides/tips",
    description: "Mine a Mountain tips for climbing higher, avoiding freezing, mining crystals, selling for cash, and choosing upgrades.",
    eyebrow: "Tips",
    title: `${siteConfig.gameName} Tips`,
    intro: "These tips focus on the core climb, mine, sell, and upgrade loop instead of unverified shortcuts.",
    sections: [
      { label: "Climb", title: "Notice what ends your run", body: "A good tip is only useful if it solves your current bottleneck. If cold stops you, think warmth. If rocks take too long, think pickaxe. If you keep selling early, think backpack." },
      { label: "Cash", title: "Do not chase far crystals too early", body: "Higher routes are not automatically better if the trip takes too long or you freeze before selling. Compare route time with the cash you actually bring back." },
      { label: "Luck", title: "Claim the simple Digging Luck bonus", body: "The game description mentions +1 Digging Luck for liking the game and joining the group. Treat exact rare crystal math as pending until it is tested." }
    ],
    related: [{ href: "/guides/beginner-tips", label: "Beginner tips" }, { href: "/guides/pickaxe", label: "Pickaxe guide" }, { href: "/guides/backpack", label: "Backpack guide" }],
    quickChecks: ["Test one change at a time so the next upgrade decision is clearer.", "Do not publish exact crystal values until they are verified.", "Use Digging Luck notes as source-backed wording, not exact odds."],
    faqs: [
      { q: "What is the most useful Mine a Mountain tip?", a: "Watch what ends the run, then upgrade the system that fixes that specific problem." },
      { q: "Are rare crystals always best?", a: "Not necessarily. Route time, survival, and sell consistency matter until exact values are confirmed." }
    ]
  },
  faq: {
    canonical: "/faq",
    description: "Mine a Mountain FAQ with quick answers for codes, upgrades, controls, Digging Luck, updates, wiki, and beginner strategy.",
    eyebrow: "FAQ",
    title: `${siteConfig.gameName} FAQ`,
    intro: "Quick answers for the highest-intent Mine a Mountain questions players search after seeing codes, guides, and update pages.",
    sections: [
      { label: "Codes", title: "Are there working Mine a Mountain codes?", body: "No active code should be treated as verified unless it appears on the codes page with a checked date and source note." },
      { label: "Upgrades", title: "What should I upgrade first?", body: "Upgrade the bottleneck that ended your last run: warmth for freezing, pickaxe for slow mining, or backpack for too many sell trips." },
      { label: "Updates", title: "How often should I check updates?", body: "The Roblox description mentions a new mountain every hour, while code and reward claims should be checked whenever the game page or creator sources change." }
    ],
    related: [{ href: "/codes/guide", label: "Codes guide" }, { href: "/guides/beginner-tips", label: "Beginner tips" }, { href: "/updates/update-log", label: "Update log" }],
    quickChecks: ["Use the codes page for working-code status.", "Use the upgrade order page when choosing warmth, pickaxe, or backpack.", "Use the update log when checking whether a claim is official or pending."],
    faqs: [
      { q: "Is this the official Mine a Mountain site?", a: "No. This is an unofficial fan resource that points players back to Roblox and source-checked pages." },
      { q: "Does this site publish unverified codes?", a: "No. Unverified code claims should stay out of the active list until checked." },
      { q: "What should I read after the FAQ?", a: "Start with the beginner tips, codes guide, or upgrade order page depending on the question you need answered." }
    ]
  },
  updateLog: {
    canonical: "/updates/update-log",
    description: "Mine a Mountain update log for Roblox page changes, hourly mountain notes, codes checks, and wiki expansion tracking.",
    eyebrow: "Update log",
    title: `${siteConfig.gameName} Update Log`,
    intro: "Use this update log to separate confirmed Roblox page changes from community guesses and unverified rotation names.",
    sections: [
      { label: "Current", title: "Official hourly mountain wording", body: "The public Roblox description says there is a new mountain every hour. Exact mountain names should stay out of the log until verified." },
      { label: "Codes", title: "Code claims stay tied to source checks", body: "When a new code claim appears, check it against the codes page policy before treating it as active." },
      { label: "Expansion", title: "Next wiki updates should add tested values", body: "The best next improvements are verified crystal values, upgrade costs, and route timing notes gathered from live play." }
    ],
    related: [{ href: "/updates", label: "Updates" }, { href: "/codes/guide", label: "Codes guide" }, { href: "/faq", label: "FAQ" }],
    quickChecks: ["Keep official Roblox wording separate from community guesses.", "Record code claims only after source checks.", "Move tested values into wiki pages when they are confirmed."],
    faqs: [
      { q: "Does the update log list every mountain rotation?", a: "No. It only lists details that can be tied to official wording, creator-owned sources, or clearly verified checks." },
      { q: "When should update notes change?", a: "Update notes should change after visible Roblox page changes, creator posts, or repeatable in-game verification." }
    ]
  },
  walkthrough: {
    canonical: "/guides/walkthrough",
    description: "Mine a Mountain walkthrough for first runs, climbing, mining crystals, selling cash, and choosing next upgrades.",
    eyebrow: "Walkthrough",
    title: `${siteConfig.gameName} Walkthrough`,
    intro: "This walkthrough turns the early game into a simple sequence: climb, mine, sell, upgrade, then repeat with a clearer goal.",
    sections: [
      { label: "Start", title: "Make the first climb simple", body: "Do not worry about perfect routes immediately. Learn how far you can climb, which crystals are easy to mine, and how quickly cold becomes a problem." },
      { label: "Sell", title: "Bank cash before pushing farther", body: "A run only counts when the crystals are sold. Return earlier if you are learning a new route or testing a higher section." },
      { label: "Improve", title: "Use the last failed run as your upgrade clue", body: "Freezing points to warmth, slow mining points to pickaxe, and repeated sell trips point to backpack capacity." }
    ],
    related: [{ href: "/guides/beginner", label: "Beginner guide" }, { href: "/guides/levels", label: "Levels guide" }, { href: "/wiki/upgrade-order", label: "Upgrade order" }],
    quickChecks: ["Learn the first climb before optimizing route timing.", "Sell crystals before pushing farther.", "Use the failed run to choose the next upgrade."],
    faqs: [
      { q: "What is the first step in the walkthrough?", a: "Make a simple climb, mine easy crystals, sell them, and identify what stopped the route from earning more." },
      { q: "When should I use the strategy page instead?", a: "Use strategy after the basic loop is stable and you want to compare routes or upgrade timing." }
    ]
  },
  advancedGuide: {
    canonical: "/guides/advanced",
    description: "Advanced Mine a Mountain guide for route testing, upgrade planning, value checks, and post-beginner strategy.",
    eyebrow: "Advanced guide",
    title: `${siteConfig.gameName} Advanced Guide`,
    intro: "Once basic climbs are stable, advanced progress comes from measuring routes, testing upgrades, and replacing guesses with source-backed values.",
    sections: [
      { label: "Testing", title: "Compare routes with the same timer", body: "Run two routes for similar time windows and compare cash returned. This avoids overvaluing a route just because it reaches a taller point." },
      { label: "Values", title: "Turn crystal notes into calculator data", body: "When crystal values and upgrade costs are verified, move them into the calculator so decisions become more exact." },
      { label: "Updates", title: "Recheck strategy after visible changes", body: "If Roblox page text, creator posts, or live mechanics change, update the relevant guide and link back to the update log." }
    ],
    related: [{ href: "/guides/strategy", label: "Strategy" }, { href: "/wiki/crystals", label: "Crystal wiki" }, { href: "/updates/update-log", label: "Update log" }],
    quickChecks: ["Compare routes with similar time windows.", "Only move exact values into pages after verification.", "Recheck strategy after visible game changes."],
    faqs: [
      { q: "What makes a Mine a Mountain guide advanced?", a: "Advanced guidance focuses on comparing route results, testing upgrade value, and turning verified observations into better decisions." },
      { q: "Should advanced pages include exact formulas now?", a: "No. Exact formulas should wait for verified upgrade costs, crystal values, or creator-owned details." }
    ]
  },
  pickaxeGuide: {
    canonical: "/guides/pickaxe",
    description: "Mine a Mountain pickaxe guide for mining speed decisions, crystal route timing, upgrade priority, and beginner-to-midgame planning.",
    eyebrow: "Pickaxe guide",
    title: `${siteConfig.gameName} Pickaxe Guide`,
    intro: "Use the pickaxe guide when mining time, not cold or backpack capacity, is the reason a route feels slow.",
    sections: [
      { label: "Timing", title: "Buy pickaxe when crystals take too long", body: "If you reach the crystal area safely but spend most of the run breaking rocks, pickaxe upgrades are the clearest next test." },
      { label: "Route", title: "Pair mining speed with a sellable route", body: "Faster mining only helps when the backpack and return path still let you sell the crystals you collect." },
      { label: "Compare", title: "Check warmth and backpack first when needed", body: "If you freeze before reaching crystals or leave early because the bag is full, pickaxe speed may not solve the current bottleneck." }
    ],
    related: [{ href: "/wiki/upgrade-order", label: "Upgrade order" }, { href: "/guides/backpack", label: "Backpack guide" }, { href: "/guides/strategy", label: "Strategy" }],
    quickChecks: ["Pickaxe helps most when mining time is the slowest part of the loop.", "Do not compare pickaxe upgrades without counting return-to-sell time.", "Use the calculator as a direction tool until exact costs are verified."],
    faqs: [
      { q: "Is pickaxe the best first upgrade?", a: "Only when mining speed is the issue. If cold or capacity stops progress first, warmth or backpack may matter more." },
      { q: "Does this page list exact pickaxe costs?", a: "No. Exact costs should be added only after live verification." }
    ]
  },
  backpackGuide: {
    canonical: "/guides/backpack",
    description: "Mine a Mountain backpack guide for capacity decisions, sell-trip timing, cash farming routes, and upgrade priority.",
    eyebrow: "Backpack guide",
    title: `${siteConfig.gameName} Backpack Guide`,
    intro: "Use the backpack guide when capacity, not warmth or mining speed, is cutting your crystal route short.",
    sections: [
      { label: "Capacity", title: "Buy backpack when sell trips interrupt good routes", body: "If you leave a profitable crystal area only because the bag is full, backpack capacity can improve the whole route." },
      { label: "Cash", title: "Backpack upgrades need enough route time", body: "More capacity is useful when you survive and mine long enough to fill it with crystals worth selling." },
      { label: "Balance", title: "Do not ignore warmth or pickaxe", body: "If you freeze early or mine too slowly, a bigger backpack may sit empty instead of improving cash returned." }
    ],
    related: [{ href: "/wiki/upgrade-order", label: "Upgrade order" }, { href: "/guides/pickaxe", label: "Pickaxe guide" }, { href: "/wiki/crystals", label: "Crystal wiki" }],
    quickChecks: ["Backpack helps when capacity is the reason you leave a route.", "It is weaker when cold or mining speed stops progress first.", "Compare backpack value against the crystals you can actually sell."],
    faqs: [
      { q: "When is backpack better than pickaxe?", a: "Backpack is better when you mine fast enough but keep returning to sell because the bag fills early." },
      { q: "Should beginners buy backpack immediately?", a: "Only if capacity is the first clear bottleneck. Many beginners need warmth or pickaxe first depending on the route." }
    ]
  }
} satisfies Record<string, ExpansionPage>;

export const expansionPageCards = Object.values(expansionPages).map((page) => ({
  title: page.title,
  href: page.canonical,
  eyebrow: page.eyebrow,
  description: page.description
}));

export const expansionFaqs = Object.values(expansionPages).flatMap((page) => page.faqs ?? []);
