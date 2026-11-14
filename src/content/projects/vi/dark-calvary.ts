import gallery from "../galleries/dark-calvary";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Dark Calvary",
  theme: "light",
  tags: ["graphic", "uiux", "character"],
  live: "https://www.behance.net/gallery/258479827/Dark-Calvary-2D-Metroidvania-Game",
  description:
    "Dark Calvary là concept game 2D metroidvania lấy bối cảnh thế giới dark fantasy.<br/><br/>Bài thuyết trình game bao gồm cốt truyện, world building và plot, thiết kế nhân vật cùng sprite animation cho nhân vật chính Jack và lũ quỷ, cơ chế gameplay, định hướng hình ảnh, typography và toàn bộ UX/UI, từ menu, thanh máu đến màn hình thắng và thua. Dự án học tập theo nhóm.",
  components: toMediaComponents(gallery, "vi"),
} satisfies ProjectContent;
