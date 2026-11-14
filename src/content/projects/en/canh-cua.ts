import gallery from "../galleries/canh-cua";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "Cánh Cửa",
  theme: "light",
  tags: ["character", "graphic"],
  live: "https://www.behance.net/gallery/258494903/STORYBOARD-CANH-CA",
  description:
    "Cánh Cửa (The Door) is the storyboard for a 3–5 minute animated short for children. Tom, a ten-year-old boy with a birthmark on his face, shuts himself away in his room until a superhero who looks just like him shows up and helps him step out into the world.<br/><br/>The project covers the story and its meaning, target audience, world building, character design and turnarounds, and a shot-by-shot storyboard with framing notes. A team studying project.",
  components: toMediaComponents(gallery, "en"),
} satisfies ProjectContent;
