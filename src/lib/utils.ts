import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function initials(name: string) {
  return name
    ?.split(" ")
    ?.map((n) => n?.slice(0, 1)?.toUpperCase())
    ?.join("");
}

export const formattedDate = (date: Date) =>
  new Intl.DateTimeFormat("en-US", {
    weekday: "short", // Wed
    day: "2-digit", // 25
    year: "numeric", // 2025
    hour: "2-digit", // 1
    minute: "2-digit", // 00
    hour12: true, // 12-hour format
  }).format(date);
