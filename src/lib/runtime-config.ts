import { adsterraDefaults } from "@/data/adsterra.config";

function readEnv(value: string | undefined): string | undefined {
  return value && value.trim().length > 0 ? value : undefined;
}

function readBoolean(value: string | undefined, fallback: boolean): boolean {
  const normalized = readEnv(value)?.toLowerCase();
  if (normalized === "true") return true;
  if (normalized === "false") return false;
  return fallback;
}

function readPositiveInteger(value: string | undefined, fallback: number): number {
  const parsed = Number.parseInt(value ?? "", 10);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export const runtimeConfig = {
  adsterraBanner160x300Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_KEY) ||
    adsterraDefaults.banner160x300Key,
  adsterraBanner160x300ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X300_SCRIPT_URL) ||
    adsterraDefaults.banner160x300ScriptUrl,
  adsterraBanner160x600Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_KEY) ||
    adsterraDefaults.banner160x600Key,
  adsterraBanner160x600ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_160X600_SCRIPT_URL) ||
    adsterraDefaults.banner160x600ScriptUrl,
  adsterraBanner300x250Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_KEY) ||
    adsterraDefaults.banner300x250Key,
  adsterraBanner300x250ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_300X250_SCRIPT_URL) ||
    adsterraDefaults.banner300x250ScriptUrl,
  adsterraBanner320x50Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_KEY) ||
    adsterraDefaults.banner320x50Key,
  adsterraBanner320x50ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_320X50_SCRIPT_URL) ||
    adsterraDefaults.banner320x50ScriptUrl,
  adsterraBanner468x60Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_KEY) ||
    adsterraDefaults.banner468x60Key,
  adsterraBanner468x60ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_468X60_SCRIPT_URL) ||
    adsterraDefaults.banner468x60ScriptUrl,
  adsterraBanner728x90Key:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_KEY) ||
    adsterraDefaults.banner728x90Key,
  adsterraBanner728x90ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_BANNER_728X90_SCRIPT_URL) ||
    adsterraDefaults.banner728x90ScriptUrl,
  adsterraEnablePopunder: readBoolean(
    process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_POPUNDER,
    adsterraDefaults.enablePopunder
  ),
  adsterraEnableSocialBar: readBoolean(
    process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_SOCIAL_BAR,
    adsterraDefaults.enableSocialBar
  ),
  adsterraEnableStickyRail: readBoolean(
    process.env.NEXT_PUBLIC_ADSTERRA_ENABLE_STICKY_RAIL,
    adsterraDefaults.enableStickyRail
  ),
  adsterraNative1Id:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_ID) || adsterraDefaults.native1Id,
  adsterraNative1ScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_NATIVE_1_SCRIPT_URL) ||
    adsterraDefaults.native1ScriptUrl,
  adsterraPopunderDelayMs: readPositiveInteger(
    process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_DELAY_MS,
    adsterraDefaults.popunderDelayMs
  ),
  adsterraPopunderMinPageviews: readPositiveInteger(
    process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_MIN_PAGEVIEWS,
    adsterraDefaults.popunderMinPageviews
  ),
  adsterraPopunderScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_POPUNDER_SCRIPT_URL) ||
    adsterraDefaults.popunderScriptUrl,
  adsterraSmartLinkUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SMARTLINK_URL) ||
    adsterraDefaults.smartLinkUrl,
  adsterraSocialBarScriptUrl:
    readEnv(process.env.NEXT_PUBLIC_ADSTERRA_SOCIAL_BAR_SCRIPT_URL) ||
    adsterraDefaults.socialBarScriptUrl,
  analyticsId: readEnv(process.env.NEXT_PUBLIC_ANALYTICS_ID)
};
