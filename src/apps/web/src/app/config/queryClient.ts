import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 1 * 60 * 1000, // 1 minut
      gcTime: 2 * 60 * 1000, // 2 minut
    },
  },
});
