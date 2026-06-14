import registry from "../../../data/riyadh-neighborhoods.json";
import { toNeighborhoodPage } from "./build-content";
import {
  loadAreaMarkdown,
  mergeRecordWithMarkdown,
} from "./load-area-markdown";
import { PROFILE_SERVICES } from "./content-profiles";
import type { NeighborhoodPage, NeighborhoodRecord } from "./types";

const records = registry as NeighborhoodRecord[];

function buildPageFromRecord(
  n: NeighborhoodRecord,
  all: NeighborhoodRecord[],
): NeighborhoodPage {
  const md = loadAreaMarkdown(n.slug);
  if (md) {
    const merged = mergeRecordWithMarkdown(n, md);
    const generated = toNeighborhoodPage(n, all);
    return {
      ...n,
      keyword: merged.keyword,
      title: merged.title,
      description: merged.description,
      content: merged.content,
      relatedSlugs: merged.relatedSlugs ?? generated.relatedSlugs,
      serviceSlugs: merged.serviceSlugs ?? PROFILE_SERVICES[n.profile],
      contentSource: "markdown",
    };
  }
  return { ...toNeighborhoodPage(n, all), contentSource: "generated" };
}

let cached: NeighborhoodPage[] | null = null;

export function getAllNeighborhoodRecords(): NeighborhoodRecord[] {
  return records;
}

export function getAllNeighborhoodPages(): NeighborhoodPage[] {
  if (!cached) {
    cached = records.map((n) => buildPageFromRecord(n, records));
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
