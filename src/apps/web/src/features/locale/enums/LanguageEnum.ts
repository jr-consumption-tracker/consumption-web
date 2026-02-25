export const LanguageEnum = {
  EN: "en",
  CS: "cs",
} as const;

type LanguageEnum = (typeof LanguageEnum)[keyof typeof LanguageEnum];
