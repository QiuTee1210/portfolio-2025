import gallery from "../galleries/mat-bao";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Mắt Bão",
  theme: "light",
  tags: ["motion", "graphic"],
  live: "https://www.behance.net/gallery/258494317/VIDEO-ANIMATION",
  description:
    "Mắt Bão là video animation dài khoảng hai phút, kết hợp kinetic typography với motion graphics.<br/><br/>Trước khi làm animation, dự án xác định mood and tone, bảng màu và font chữ, sau đó lên kế hoạch từng cảnh bằng storyboard và dàn layout. Xem video đầy đủ trên Behance. Dự án học tập theo nhóm.",
  components: toMediaComponents(gallery, "vi"),
} satisfies ProjectContent;
