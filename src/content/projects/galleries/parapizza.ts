import type { GalleryItem } from "./types";

import img00 from "../../../assets/images/projects/parapizza/parapizza-00.webp";
import img01 from "../../../assets/images/projects/parapizza/parapizza-01.webp";
import img03 from "../../../assets/images/projects/parapizza/parapizza-03.webp";
import img05 from "../../../assets/images/projects/parapizza/parapizza-05.webp";
import img06 from "../../../assets/images/projects/parapizza/parapizza-06.webp";
import img07 from "../../../assets/images/projects/parapizza/parapizza-07.webp";
import img08 from "../../../assets/images/projects/parapizza/parapizza-08.webp";
import img09 from "../../../assets/images/projects/parapizza/parapizza-09.webp";
import img12 from "../../../assets/images/projects/parapizza/parapizza-12.webp";
import img13 from "../../../assets/images/projects/parapizza/parapizza-13.webp";

export default [
  { src: img00, size: [960, 540], caption: { en: "Logo animation", vi: "Animation logo" } },
  { src: img01, size: [1200, 1609], caption: { en: "Brand story & logo", vi: "Câu chuyện thương hiệu & logo" } },
  { src: img03, size: [1200, 740], caption: { en: "Color palette", vi: "Bảng màu" } },
  { src: img05, size: [1200, 1077], caption: { en: "Typography", vi: "Typography" } },
  { src: img06, size: [1200, 1050], caption: { en: "Business cards", vi: "Danh thiếp" } },
  { src: img07, size: [1200, 723], caption: { en: "Social media posts", vi: "Bài đăng mạng xã hội" } },
  { src: img08, size: [480, 853], caption: { en: "Animated story post", vi: "Story động" } },
  { src: img09, size: [1200, 900], caption: { en: "Menu", vi: "Menu" } },
  { src: img12, size: [960, 694], caption: { en: "Packaging", vi: "Bao bì" } },
  { src: img13, size: [1200, 900], caption: { en: "Stickers", vi: "Sticker" } },
] as const satisfies GalleryItem[];
