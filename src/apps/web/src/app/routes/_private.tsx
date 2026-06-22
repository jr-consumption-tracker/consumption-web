import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_private")({
  beforeLoad: async ({ context }) => {
    const { session } = context.authentication;

    if (!session) {
      throw redirect({ to: "/prihlaseni" });
    }
  },
});
