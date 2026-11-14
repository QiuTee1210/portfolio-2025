import type { GalleryItem } from "./types";

import img03 from "../../../assets/images/projects/canh-cua/canh-cua-03.webp";
import img07 from "../../../assets/images/projects/canh-cua/canh-cua-07.webp";
import img08 from "../../../assets/images/projects/canh-cua/canh-cua-08.webp";
import img10 from "../../../assets/images/projects/canh-cua/canh-cua-10.webp";
import img12 from "../../../assets/images/projects/canh-cua/canh-cua-12.webp";
import img15 from "../../../assets/images/projects/canh-cua/canh-cua-15.webp";
import img18 from "../../../assets/images/projects/canh-cua/canh-cua-18.webp";
import img26 from "../../../assets/images/projects/canh-cua/canh-cua-26.webp";
import img30 from "../../../assets/images/projects/canh-cua/canh-cua-30.webp";
import img35 from "../../../assets/images/projects/canh-cua/canh-cua-35.webp";
import img37 from "../../../assets/images/projects/canh-cua/canh-cua-37.webp";
import img44 from "../../../assets/images/projects/canh-cua/canh-cua-44.webp";

export default [
  { src: img03, size: [1200, 675], caption: { en: "Story summary", vi: "Tóm tắt câu chuyện" } },
  { src: img07, size: [1200, 675], caption: { en: "Character design", vi: "Thiết kế nhân vật" } },
  { src: img08, size: [1200, 675], caption: { en: "Turnaround: Tom", vi: "Turnaround: Tom" } },
  { src: img10, size: [1200, 675], caption: { en: "Storyboard overview", vi: "Tổng quan storyboard" } },
  { src: img12, size: [1200, 675], caption: { en: "Storyboard overview", vi: "Tổng quan storyboard" } },
  { src: img15, size: [1200, 675], caption: { en: "Shot: 16:59", vi: "Cảnh: 16:59" } },
  { src: img18, size: [1200, 675], caption: { en: "Shot: friends playing outside", vi: "Cảnh: bạn bè chơi bên ngoài" } },
  { src: img26, size: [1200, 675], caption: { en: "Shot: the superhero appears", vi: "Cảnh: siêu nhân xuất hiện" } },
  { src: img30, size: [1200, 675], caption: { en: "Shot: the mask", vi: "Cảnh: chiếc mặt nạ" } },
  { src: img35, size: [1200, 675], caption: { en: "Shot: chasing the ball", vi: "Cảnh: đuổi theo quả bóng" } },
  { src: img37, size: [1200, 675], caption: { en: "Shot: the superhero", vi: "Cảnh: siêu nhân" } },
  { src: img44, size: [1200, 675], caption: { en: "Shot: the open door", vi: "Cảnh: cánh cửa mở" } },
] as const satisfies GalleryItem[];
