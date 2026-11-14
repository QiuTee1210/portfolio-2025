import gallery from "../galleries/dark-calvary";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Dark Calvary",
  theme: "light",
  tags: ["graphic", "uiux", "character"],
  live: "https://www.behance.net/gallery/258479827/Dark-Calvary-2D-Metroidvania-Game",
  description:
    "Dark Calvary is a 2D metroidvania game concept set in a dark fantasy world.<br/><br/>The game presentation covers the story, world building and plot, character design and animation sprites for the hero Jack and the demons he fights, gameplay mechanics, art direction, typography and the full UX/UI, from the menus and health bars to the victory and defeat screens. A team studying project.",
  components: toMediaComponents(gallery, "en"),
} satisfies ProjectContent;
