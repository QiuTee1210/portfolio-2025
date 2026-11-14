import type { GalleryItem } from "./types";

import img00 from "../../../assets/images/projects/dark-calvary/dark-calvary-00.webp";
import img10 from "../../../assets/images/projects/dark-calvary/dark-calvary-10.webp";
import img13 from "../../../assets/images/projects/dark-calvary/dark-calvary-13.webp";
import img15 from "../../../assets/images/projects/dark-calvary/dark-calvary-15.webp";
import img20 from "../../../assets/images/projects/dark-calvary/dark-calvary-20.webp";
import img24 from "../../../assets/images/projects/dark-calvary/dark-calvary-24.webp";
import img28 from "../../../assets/images/projects/dark-calvary/dark-calvary-28.webp";
import img33 from "../../../assets/images/projects/dark-calvary/dark-calvary-33.webp";
import img37 from "../../../assets/images/projects/dark-calvary/dark-calvary-37.webp";
import img41 from "../../../assets/images/projects/dark-calvary/dark-calvary-41.webp";
import img43 from "../../../assets/images/projects/dark-calvary/dark-calvary-43.webp";
import img46 from "../../../assets/images/projects/dark-calvary/dark-calvary-46.webp";

export default [
  { src: img00, size: [1200, 675], caption: { en: "Game presentation", vi: "Bài thuyết trình game" } },
  { src: img10, size: [1200, 675], caption: { en: "Character art direction", vi: "Định hướng hình ảnh nhân vật" } },
  { src: img13, size: [1200, 675], caption: { en: "Character profile: Jack", vi: "Hồ sơ nhân vật: Jack" } },
  { src: img15, size: [960, 540], caption: { en: "Jack animation", vi: "Animation của Jack" } },
  { src: img20, size: [1200, 675], caption: { en: "Character profile: Baphomet", vi: "Hồ sơ nhân vật: Baphomet" } },
  { src: img24, size: [1200, 675], caption: { en: "Character sizes", vi: "Tỉ lệ nhân vật" } },
  { src: img28, size: [800, 450], caption: { en: "Game mechanics", vi: "Cơ chế game" } },
  { src: img33, size: [1200, 675], caption: { en: "Art style", vi: "Phong cách hình ảnh" } },
  { src: img37, size: [1200, 675], caption: { en: "Game menus", vi: "Giao diện menu" } },
  { src: img41, size: [1200, 675], caption: { en: "Victory & defeat screens", vi: "Màn hình thắng & thua" } },
  { src: img43, size: [960, 540], caption: { en: "Level background", vi: "Background màn chơi" } },
  { src: img46, size: [1200, 675], caption: { en: "Poster", vi: "Poster" } },
] as const satisfies GalleryItem[];
