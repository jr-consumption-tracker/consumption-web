export const ApiTags = { "": "" } as const;

export type ApiTags = (typeof ApiTags)[keyof typeof ApiTags];
export type ApiTagsKey = keyof typeof ApiTags;
export const ApiTagsKeys = Object.keys(ApiTags) as ApiTagsKey[];
