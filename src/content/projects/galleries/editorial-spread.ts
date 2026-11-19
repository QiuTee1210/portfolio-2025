import type { GalleryItem } from "./types";

import img00 from "../../../assets/images/projects/editorial-spread/editorial-spread-00.webp";
import img01 from "../../../assets/images/projects/editorial-spread/editorial-spread-01.webp";
import img02 from "../../../assets/images/projects/editorial-spread/editorial-spread-02.webp";
import img03 from "../../../assets/images/projects/editorial-spread/editorial-spread-03.webp";
import img04 from "../../../assets/images/projects/editorial-spread/editorial-spread-04.webp";
import img05 from "../../../assets/images/projects/editorial-spread/editorial-spread-05.webp";
import img06 from "../../../assets/images/projects/editorial-spread/editorial-spread-06.webp";
import img07 from "../../../assets/images/projects/editorial-spread/editorial-spread-07.webp";
import img08 from "../../../assets/images/projects/editorial-spread/editorial-spread-08.webp";

export default [
  { src: img00, size: [1200, 1697], caption: { en: "Front cover", vi: "Bìa trước" } },
  { src: img01, size: [1200, 849], caption: { en: "Pages 2–3", vi: "Trang 2–3" } },
  { src: img02, size: [1200, 849], caption: { en: "Pages 4–5", vi: "Trang 4–5" } },
  { src: img03, size: [1200, 849], caption: { en: "Pages 6–7", vi: "Trang 6–7" } },
  { src: img04, size: [1200, 849], caption: { en: "Pages 8–9", vi: "Trang 8–9" } },
  { src: img05, size: [1200, 849], caption: { en: "Pages 10–11", vi: "Trang 10–11" } },
  { src: img06, size: [1200, 849], caption: { en: "Pages 12–13", vi: "Trang 12–13" } },
  { src: img07, size: [1200, 849], caption: { en: "Pages 14–15", vi: "Trang 14–15" } },
  { src: img08, size: [1200, 1697], caption: { en: "Back cover", vi: "Bìa sau" } },
] as const satisfies GalleryItem[];
