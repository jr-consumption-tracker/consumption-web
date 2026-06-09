import { useEffect, useState } from "react";

import type { Dispatch, SetStateAction } from "react";

const getLocalValue = (key: string, initValue: unknown) => {
  // SSR Next.js
  if (typeof window === "undefined") return initValue;

  // If a value is already stored
  const localValue = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : undefined;

  if (localValue) return localValue;

  // Return result of a function
  if (initValue instanceof Function) return initValue();

  return initValue;
};

export function useLocalStorage<T>(
  key: string,
  initValue: T,
): [value: T, setValue: Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => getLocalValue(key, initValue));

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
