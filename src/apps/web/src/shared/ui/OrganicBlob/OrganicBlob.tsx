import { cn } from "@repo/utils";

interface OrganicBlobProps {
  className?: string;
}

/**
 * OrganicBlob - Amber organic shape overlay, same silhouette as the Hero section blob.
 * Sized via viewBox so it scales proportionally to its container at any viewport.
 */
export const OrganicBlob = ({ className }: OrganicBlobProps) => {
  return (
    <svg
      className={cn("absolute", className)}
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        fill="var(--primary)"
        d="M162 34c22 20 30 54 22 84s-32 54-64 60-64-8-80-36S18 78 40 50 84 6 116 8s24 6 46 26z"
      />
    </svg>
  );
};

OrganicBlob.displayName = "OrganicBlob";
