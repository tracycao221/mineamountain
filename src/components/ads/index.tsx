"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { runtimeConfig } from "@/lib/runtime-config";

type BannerSize = "160x300" | "160x600" | "300x250" | "320x50" | "468x60" | "728x90";

type BannerConfig = {
  height: number;
  key?: string;
  scriptUrl?: string;
  width: number;
};

const bannerConfigs: Record<BannerSize, BannerConfig> = {
  "160x300": {
    width: 160,
    height: 300,
    key: runtimeConfig.adsterraBanner160x300Key,
    scriptUrl: runtimeConfig.adsterraBanner160x300ScriptUrl
  },
  "160x600": {
    width: 160,
    height: 600,
    key: runtimeConfig.adsterraBanner160x600Key,
    scriptUrl: runtimeConfig.adsterraBanner160x600ScriptUrl
  },
  "300x250": {
    width: 300,
    height: 250,
    key: runtimeConfig.adsterraBanner300x250Key,
    scriptUrl: runtimeConfig.adsterraBanner300x250ScriptUrl
  },
  "320x50": {
    width: 320,
    height: 50,
    key: runtimeConfig.adsterraBanner320x50Key,
    scriptUrl: runtimeConfig.adsterraBanner320x50ScriptUrl
  },
  "468x60": {
    width: 468,
    height: 60,
    key: runtimeConfig.adsterraBanner468x60Key,
    scriptUrl: runtimeConfig.adsterraBanner468x60ScriptUrl
  },
  "728x90": {
    width: 728,
    height: 90,
    key: runtimeConfig.adsterraBanner728x90Key,
    scriptUrl: runtimeConfig.adsterraBanner728x90ScriptUrl
  }
};

declare global {
  interface Window {
    atOptions?: {
      key?: string;
      format: "iframe";
      height: number;
      width: number;
      params: Record<string, unknown>;
    };
  }
}

let bannerLoadQueue = Promise.resolve();

function normalizeScriptUrl(url?: string) {
  if (!url) return undefined;
  if (url.startsWith("//")) return `https:${url}`;
  return url;
}

function getBannerScriptUrl(config: BannerConfig) {
  if (config.scriptUrl) return normalizeScriptUrl(config.scriptUrl);
  if (!config.key) return undefined;
  return `https://www.highperformanceformat.com/${config.key}/invoke.js`;
}

function AdvertisementShell({
  children,
  className = "",
  label = "Advertisement",
  minHeight = 90
}: {
  children: React.ReactNode;
  className?: string;
  label?: string;
  minHeight?: number;
}) {
  return (
    <aside className={`ad-shell ${className}`} aria-label={label} style={{ minHeight }}>
      <span className="ad-label">{label}</span>
      {children}
    </aside>
  );
}

function AdsterraBannerUnit({
  className = "",
  size
}: {
  className?: string;
  size: BannerSize;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const config = bannerConfigs[size];
  const scriptUrl = getBannerScriptUrl(config);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !scriptUrl || !config.key) return;

    let cancelled = false;
    let releaseActiveLoad: (() => void) | undefined;

    bannerLoadQueue = bannerLoadQueue.catch(() => undefined).then(
      () =>
        new Promise<void>((resolve) => {
          if (cancelled) {
            resolve();
            return;
          }

          host.replaceChildren();
          window.atOptions = {
            key: config.key,
            format: "iframe",
            height: config.height,
            width: config.width,
            params: {}
          };

          let settled = false;
          const finish = () => {
            if (settled) return;
            settled = true;
            window.clearTimeout(fallbackTimer);
            resolve();
          };
          releaseActiveLoad = finish;

          const script = document.createElement("script");
          script.type = "text/javascript";
          script.src = scriptUrl;
          script.async = false;
          script.addEventListener("load", finish, { once: true });
          script.addEventListener("error", finish, { once: true });
          const fallbackTimer = window.setTimeout(finish, 15_000);
          host.appendChild(script);
        })
    );

    return () => {
      cancelled = true;
      releaseActiveLoad?.();
      host.replaceChildren();
    };
  }, [config.height, config.key, config.width, scriptUrl]);

  if (!scriptUrl || !config.key) return null;

  return (
    <AdvertisementShell className={className} minHeight={config.height + 30}>
      <div
        ref={hostRef}
        className="ad-host"
        style={{ minHeight: config.height, width: "100%", maxWidth: config.width }}
      />
    </AdvertisementShell>
  );
}

function usePreferredLeaderboardSize() {
  const [size, setSize] = useState<BannerSize | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const tabletQuery = window.matchMedia("(min-width: 500px)");
    const chooseSize = () => {
      const desktopConfig = bannerConfigs["728x90"];
      const tabletConfig = bannerConfigs["468x60"];
      const mobileConfig = bannerConfigs["320x50"];
      if (desktopQuery.matches && (desktopConfig.key || desktopConfig.scriptUrl)) {
        setSize("728x90");
        return;
      }
      if (tabletQuery.matches && (tabletConfig.key || tabletConfig.scriptUrl)) {
        setSize("468x60");
        return;
      }
      if (mobileConfig.key || mobileConfig.scriptUrl) {
        setSize("320x50");
        return;
      }
      if (desktopConfig.key || desktopConfig.scriptUrl) {
        setSize("728x90");
        return;
      }
      setSize(null);
    };

    chooseSize();
    desktopQuery.addEventListener("change", chooseSize);
    tabletQuery.addEventListener("change", chooseSize);
    return () => {
      desktopQuery.removeEventListener("change", chooseSize);
      tabletQuery.removeEventListener("change", chooseSize);
    };
  }, []);

  return size;
}

function AdsterraNativeUnit({
  className = "",
  containerId,
  scriptUrl
}: {
  className?: string;
  containerId?: string;
  scriptUrl?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const cleanContainerId = useMemo(() => containerId?.replace(/^#/, ""), [containerId]);
  const normalizedScriptUrl = normalizeScriptUrl(scriptUrl);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || !cleanContainerId || !normalizedScriptUrl) return;

    host.replaceChildren();

    const container = document.createElement("div");
    container.id = cleanContainerId;
    host.appendChild(container);

    const script = document.createElement("script");
    script.async = true;
    script.dataset.cfasync = "false";
    script.src = normalizedScriptUrl;
    host.appendChild(script);

    return () => {
      host.replaceChildren();
    };
  }, [cleanContainerId, normalizedScriptUrl]);

  if (!cleanContainerId || !normalizedScriptUrl) return null;

  return (
    <AdvertisementShell className={className}>
      <div ref={hostRef} className="ad-host ad-host-native" />
    </AdvertisementShell>
  );
}

export function AdsterraSmartLinkAnchor({
  children = "Sponsored link",
  className = ""
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  if (!runtimeConfig.adsterraSmartLinkUrl) return null;

  return (
    <a
      className={className}
      href={runtimeConfig.adsterraSmartLinkUrl}
      rel="nofollow sponsored noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
}

export function AdsterraBanner() {
  return <AdsterraBannerUnit size="300x250" />;
}

export function AdsterraLeaderboard() {
  const size = usePreferredLeaderboardSize();
  if (!size) return null;

  return (
    <div className="ad-leaderboard">
      <AdsterraBannerUnit size={size} />
    </div>
  );
}

export function AdsterraNative1() {
  return (
    <AdsterraNativeUnit
      containerId={runtimeConfig.adsterraNative1Id}
      scriptUrl={runtimeConfig.adsterraNative1ScriptUrl}
    />
  );
}

function usePreferredRailSize() {
  const [size, setSize] = useState<"160x300" | "160x600" | null>(null);

  useEffect(() => {
    const widthQuery = window.matchMedia("(min-width: 1680px)");
    const heightQuery = window.matchMedia("(min-height: 760px)");
    const chooseSize = () => {
      if (!runtimeConfig.adsterraEnableStickyRail || !widthQuery.matches) {
        setSize(null);
        return;
      }
      setSize(heightQuery.matches ? "160x600" : "160x300");
    };

    chooseSize();
    widthQuery.addEventListener("change", chooseSize);
    heightQuery.addEventListener("change", chooseSize);
    return () => {
      widthQuery.removeEventListener("change", chooseSize);
      heightQuery.removeEventListener("change", chooseSize);
    };
  }, []);

  return size;
}

function AdsterraRail() {
  const size = usePreferredRailSize();
  if (!size) return null;
  return (
    <div className="ad-sticky-rail">
      <AdsterraBannerUnit size={size} />
    </div>
  );
}

const cleanRoutePrefixes = ["/about", "/contact", "/disclosure", "/privacy", "/sources", "/terms"];

function isCleanRoute(pathname: string) {
  return cleanRoutePrefixes.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );
}

function appendExternalScript(id: string, src: string) {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

export function AdsterraGlobalScripts() {
  const pathname = usePathname();

  useEffect(() => {
    if (isCleanRoute(pathname)) return;

    if (runtimeConfig.adsterraEnableSocialBar && runtimeConfig.adsterraSocialBarScriptUrl) {
      appendExternalScript("adsterra-social-bar", runtimeConfig.adsterraSocialBarScriptUrl);
    }

    if (!runtimeConfig.adsterraEnablePopunder || !runtimeConfig.adsterraPopunderScriptUrl) return;

    const storageKey = "mineamountain:adsterra-pageviews";
    const currentPageviews = Number.parseInt(sessionStorage.getItem(storageKey) ?? "0", 10) || 0;
    const nextPageviews = currentPageviews + 1;
    sessionStorage.setItem(storageKey, String(nextPageviews));
    if (nextPageviews < runtimeConfig.adsterraPopunderMinPageviews) return;

    const timer = window.setTimeout(() => {
      appendExternalScript("adsterra-popunder", runtimeConfig.adsterraPopunderScriptUrl);
    }, runtimeConfig.adsterraPopunderDelayMs);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  return null;
}

export function AdsterraPageFrame({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (isCleanRoute(pathname)) return <>{children}</>;

  return (
    <>
      <div className="ad-global-top">
        <AdsterraLeaderboard />
      </div>
      <AdsterraRail />
      {children}
      <section className="ad-global-footer" aria-label="Sponsored content">
        <div className="ad-global-native">
          <AdsterraNative1 />
        </div>
        <div className="ad-global-rectangle">
          <AdsterraBanner />
          <AdsterraSmartLinkAnchor className="ad-sponsored-link">
            Sponsored game offer
          </AdsterraSmartLinkAnchor>
        </div>
      </section>
    </>
  );
}

export function AdDisclosure() {
  return (
    <p className="text-xs leading-5 text-white/42">
      This fan site may show third-party ads to support hosting and updates.
    </p>
  );
}
