import gallery from "../galleries/editorial-spread";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Editorial Spread",
  theme: "light",
  tags: ["graphic"],
  live: "https://www.behance.net/gallery/258746551/EDITORIAL-SPREAD",
  description:
    "A music magazine issue about G-Dragon's comeback and his third album, Übermensch, designed from the front cover to the back cover.<br/><br/>Each spread pairs feature articles with photo collages, stickers and hand-drawn doodles, and shifts its color palette to match the mood of each song. A studying project.",
  components: toMediaComponents(gallery, "en"),
} satisfies ProjectContent;
