import thumbnailParaPizza from "../../../assets/thumbnails/parapizza.webp";
import thumbnailDarkCalvary from "../../../assets/thumbnails/dark-calvary.webp";
import thumbnailMatBao from "../../../assets/thumbnails/mat-bao.webp";
import thumbnailCanhCua from "../../../assets/thumbnails/canh-cua.webp";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "ParaPizza",
    slug: "parapizza",
    thumbnail: thumbnailParaPizza,
    description: "Nhận diện thương hiệu",
  },
  {
    title: "Dark Calvary",
    slug: "dark-calvary",
    thumbnail: thumbnailDarkCalvary,
    description: "Game 2D metroidvania",
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
    description: "Storyboard phim hoạt hình",
  },
] as const satisfies ProjectPreview[];
