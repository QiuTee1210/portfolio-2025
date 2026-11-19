import thumbnailParaPizza from "../../../assets/thumbnails/parapizza.webp";
import thumbnailDarkCalvary from "../../../assets/thumbnails/dark-calvary.webp";
import thumbnailMatBao from "../../../assets/thumbnails/mat-bao.webp";
import thumbnailCanhCua from "../../../assets/thumbnails/canh-cua.webp";
import thumbnailEditorialSpread from "../../../assets/thumbnails/editorial-spread.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ParaPizza",
    slug: "parapizza",
    thumbnail: thumbnailParaPizza,
    description: "Brand identity",
  },
  {
    title: "Dark Calvary",
    slug: "dark-calvary",
    thumbnail: thumbnailDarkCalvary,
    description: "2D metroidvania game",
  },
  {
    title: "Mắt Bão",
    slug: "mat-bao",
    thumbnail: thumbnailMatBao,
    description: "Video animation",
  },
  {
    title: "Cánh Cửa",
    slug: "canh-cua",
    thumbnail: thumbnailCanhCua,
    description: "Animated short storyboard",
  },
  {
    title: "Editorial Spread",
    slug: "editorial-spread",
    thumbnail: thumbnailEditorialSpread,
    description: "Editorial design",
  },
] as const satisfies ProjectPreview[];
