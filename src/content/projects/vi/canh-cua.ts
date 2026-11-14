import gallery from "../galleries/canh-cua";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Cánh Cửa",
  theme: "light",
  tags: ["character", "graphic"],
  live: "https://www.behance.net/gallery/258494903/STORYBOARD-CANH-CA",
  description:
    "Cánh Cửa là storyboard cho một phim hoạt hình ngắn 3–5 phút dành cho trẻ em. Tom, cậu bé 10 tuổi có vết bớt trên mặt, luôn thu mình trong phòng cho đến khi một siêu nhân giống hệt cậu xuất hiện và giúp cậu bước ra thế giới bên ngoài.<br/><br/>Dự án gồm câu chuyện và thông điệp, đối tượng khán giả, world building, thiết kế nhân vật và turnaround, cùng storyboard chi tiết từng cảnh kèm ghi chú khung hình. Dự án học tập theo nhóm.",
  components: toMediaComponents(gallery, "vi"),
} satisfies ProjectContent;
