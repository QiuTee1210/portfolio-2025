import type { Locale } from "../../../i18n/types";
import type { ProjectComponent } from "../../../features/projects/types";

export interface GalleryItem {
  src: string;
  size: readonly [number, number];
  caption: Record<Locale, string>;
}

export const toMediaComponents = (items: readonly GalleryItem[], locale: Locale): ProjectComponent[] =>
  items.map((item) => ({
    type: "media",
    props: {
      type: "image",
      src: item.src,
      size: [item.size[0], item.size[1]],
      alt: item.caption[locale],
      caption: item.caption[locale],
    },
  }));
