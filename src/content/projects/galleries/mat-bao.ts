import type { GalleryItem } from "./types";

import img00 from "../../../assets/images/projects/mat-bao/mat-bao-00.webp";
import img02 from "../../../assets/images/projects/mat-bao/mat-bao-02.webp";
import img03 from "../../../assets/images/projects/mat-bao/mat-bao-03.webp";
import img04 from "../../../assets/images/projects/mat-bao/mat-bao-04.webp";
import img07 from "../../../assets/images/projects/mat-bao/mat-bao-07.webp";
import img08 from "../../../assets/images/projects/mat-bao/mat-bao-08.webp";
import img10 from "../../../assets/images/projects/mat-bao/mat-bao-10.webp";
import img11 from "../../../assets/images/projects/mat-bao/mat-bao-11.webp";
import img13 from "../../../assets/images/projects/mat-bao/mat-bao-13.webp";
import img15 from "../../../assets/images/projects/mat-bao/mat-bao-15.webp";

export default [
  { src: img00, size: [1200, 675], caption: { en: "Mắt Bão", vi: "Mắt Bão" } },
  { src: img02, size: [1200, 675], caption: { en: "Mood and tone", vi: "Mood and tone" } },
  { src: img03, size: [1200, 675], caption: { en: "Color palette", vi: "Bảng màu" } },
  { src: img04, size: [1200, 675], caption: { en: "Fonts", vi: "Font chữ" } },
  { src: img07, size: [1200, 675], caption: { en: "Storyboard: part 1", vi: "Storyboard: phần 1" } },
  { src: img08, size: [1200, 675], caption: { en: "Storyboard: part 2", vi: "Storyboard: phần 2" } },
  { src: img10, size: [1200, 675], caption: { en: "Storyboard: part 3", vi: "Storyboard: phần 3" } },
  { src: img11, size: [1200, 675], caption: { en: "Storyboard: part 4", vi: "Storyboard: phần 4" } },
  { src: img13, size: [1200, 675], caption: { en: "Storyboard: part 5", vi: "Storyboard: phần 5" } },
  { src: img15, size: [1200, 675], caption: { en: "Scene layouts", vi: "Dàn layout" } },
] as const satisfies GalleryItem[];
