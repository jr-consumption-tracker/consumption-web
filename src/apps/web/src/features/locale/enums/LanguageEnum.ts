export const LanguageEnum = {
  EN: "en",
  CS: "cs",
} as const;

export type LanguageEnumValue =
  (typeof LanguageEnum)[keyof typeof LanguageEnum];

export type LanguageEnumKey = keyof typeof LanguageEnum;

export const LanguageEnumKeys = Object.values(
  LanguageEnum,
) as LanguageEnumValue[];
