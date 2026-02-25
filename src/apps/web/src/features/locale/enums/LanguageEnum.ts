export const LanguageEnum = {
  EN: "en",
  CS: "cs",
} as const;

export type LanguageEnumValue =
  (typeof LanguageEnum)[keyof typeof LanguageEnum];
