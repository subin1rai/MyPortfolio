import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility to combine Tailwind classes properly
export function cn(...inputs: (string | undefined | null)[]) {
  return twMerge(clsx(...inputs));
}
