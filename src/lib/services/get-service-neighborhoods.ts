import {
  REGION_LABELS,
  SERVICE_CATALOG,
} from "@/lib/neighborhoods/content-profiles";
import { getAllNeighborhoodPages } from "@/lib/neighborhoods/load-neighborhoods";
import type {
  NeighborhoodPage,
  NeighborhoodRegion,
} from "@/lib/neighborhoods/types";

const REGION_ORDER: NeighborhoodRegion[] = [
  "north",
  "east",
  "west",
  "south",
  "central",
];

export function getNeighborhoodsForService(
  serviceSlug: string,
): NeighborhoodPage[] {
  return getAllNeighborhoodPages()
    .filter((p) => p.serviceSlugs.includes(serviceSlug))
    .sort((a, b) => {
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.nameAr.localeCompare(b.nameAr, "ar");
    });
}

export type NeighborhoodRegionGroup = {
  region: NeighborhoodRegion;
  label: string;
  neighborhoods: NeighborhoodPage[];
};

export function groupNeighborhoodsByRegion(
  neighborhoods: NeighborhoodPage[],
): NeighborhoodRegionGroup[] {
  return REGION_ORDER.map((region) => ({
    region,
    label: REGION_LABELS[region],
    neighborhoods: neighborhoods.filter((n) => n.region === region),
  })).filter((g) => g.neighborhoods.length > 0);
}

export function getServiceAreaLinkLabel(
  serviceSlug: string,
  nameAr: string,
): string {
  const catalog = SERVICE_CATALOG[serviceSlug];
  if (!catalog) return `حي ${nameAr}`;
  return `${catalog.title} — حي ${nameAr}`;
}
