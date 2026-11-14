import gallery from "../galleries/mat-bao";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Mắt Bão",
  theme: "light",
  tags: ["motion", "graphic"],
  live: "https://www.behance.net/gallery/258494317/VIDEO-ANIMATION",
  description:
    "Mắt Bão (Eye of the Storm) is a video animation of about two minutes that mixes kinetic typography with motion graphics.<br/><br/>Before animating, the project defined the mood and tone, color palette and fonts, then planned every scene with a storyboard and scene layouts. The full video is on Behance. A team studying project.",
  components: toMediaComponents(gallery, "en"),
} satisfies ProjectContent;
