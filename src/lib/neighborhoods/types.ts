export type NeighborhoodRegion =
  | "north"
  | "east"
  | "west"
  | "south"
  | "central";

export type NeighborhoodProfile =
  | "villa_luxury"
  | "villa_standard"
  | "apartment_towers"
  | "mixed_residential"
  | "compound_gated"
  | "commercial_mix"
  | "heritage_dense"
  | "industrial_edge";

export type NeighborhoodEra =
  | "new_2010s"
  | "growth_2000s"
  | "established_1990s";

export type NeighborhoodRecord = {
  slug: string;
  nameAr: string;
  region: NeighborhoodRegion;
  profile: NeighborhoodProfile;
  era: NeighborhoodEra;
  landmark: string;
  housingNote: string;
  featured: boolean;
};

export type NeighborhoodPage = NeighborhoodRecord & {
  keyword: string;
  /** عنوان SEO — قد يختلف عن H1 */
  title: string;
  description: string;
  content: string;
  relatedSlugs: string[];
  serviceSlugs: string[];
  /** مصدر المحتوى */
  contentSource: "markdown" | "generated";
};
