import gallery from "../galleries/editorial-spread";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Editorial Spread",
  theme: "light",
  tags: ["graphic"],
  live: "https://www.behance.net/gallery/258746551/EDITORIAL-SPREAD",
  description:
    "Một số tạp chí âm nhạc về màn trở lại của G-Dragon và album thứ ba Übermensch, được thiết kế từ bìa trước đến bìa sau.<br/><br/>Mỗi trang đôi kết hợp bài viết với collage ảnh, sticker và hình vẽ tay, đồng thời đổi bảng màu theo không khí của từng bài hát. Dự án học tập.",
  components: toMediaComponents(gallery, "vi"),
} satisfies ProjectContent;
