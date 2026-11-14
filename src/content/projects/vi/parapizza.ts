import gallery from "../galleries/parapizza";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "ParaPizza",
  theme: "light",
  tags: ["branding", "logo", "motion"],
  live: "https://www.behance.net/gallery/258227173/ParaPizza-Brand-Identity",
  description:
    "ParaPizza là bộ nhận diện thương hiệu cho một tiệm pizza, xoay quanh ý tưởng: món ngon gắn kết mọi người. Logo biến chiếc pizza thành một hành tinh có vành đai, tạo nên cá tính vui nhộn “Para-dise” cho thương hiệu.<br/><br/>Bộ nhận diện gồm logo và animation logo, bảng màu, typography, danh thiếp, menu, bao bì, sticker và loạt bài đăng mạng xã hội. Dự án học tập theo nhóm.",
  components: toMediaComponents(gallery, "vi"),
} satisfies ProjectContent;
