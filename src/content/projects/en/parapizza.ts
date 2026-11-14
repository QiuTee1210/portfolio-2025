import gallery from "../galleries/parapizza";
import { toMediaComponents } from "../galleries/types";

import type { ProjectContent } from "../../types";

export default {
  title: "ParaPizza",
  theme: "light",
  tags: ["branding", "logo", "motion"],
  live: "https://www.behance.net/gallery/258227173/ParaPizza-Brand-Identity",
  description:
    "ParaPizza is a brand identity for a pizza restaurant built around one idea: good food brings people together. The logo turns a pizza into a ringed planet, giving the brand its playful “Para-dise” personality.<br/><br/>The identity system covers the logo and its animation, color palette, typography, business cards, menu, packaging, stickers and a set of social media posts. A team studying project.",
  components: toMediaComponents(gallery, "en"),
} satisfies ProjectContent;
