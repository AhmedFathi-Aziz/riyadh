import registry from "../../../data/riyadh-neighborhoods.json";
import { toNeighborhoodPage } from "./build-content";
import type { NeighborhoodPage, NeighborhoodRecord } from "./types";

const records = registry as NeighborhoodRecord[];

let cached: NeighborhoodPage[] | null = null;

export function getAllNeighborhoodRecords(): NeighborhoodRecord[] {
  return records;
}

export function getAllNeighborhoodPages(): NeighborhoodPage[] {
  if (!cached) {
    cached = records.map((n) => toNeighborhoodPage(n, records));
  }
  return cached;
}

export function getNeighborhoodBySlug(slug: string): NeighborhoodPage | undefined {
  return getAllNeighborhoodPages().find((p) => p.slug === slug);
}

export function getNeighborhoodsByRegion(
  region: NeighborhoodRecord["region"],
): NeighborhoodPage[] {
  return getAllNeighborhoodPages().filter((p) => p.region === region);
}
