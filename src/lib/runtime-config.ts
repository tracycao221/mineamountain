function readEnv(value: string | undefined): string | undefined {
  return value && value.trim().length > 0 ? value : undefined;
}

export const runtimeConfig = {
  analyticsId: readEnv(process.env.NEXT_PUBLIC_ANALYTICS_ID)
};
