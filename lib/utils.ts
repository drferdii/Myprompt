import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

// Classy Transformer Engine V2 — Utility helpers
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
