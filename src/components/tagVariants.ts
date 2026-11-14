export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "branding"
  | "logo"
  | "motion"
  | "graphic"
  | "uiux"
  | "character";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  branding: "Branding",
  logo: "Logo Design",
  motion: "Motion Graphics",
  graphic: "Graphic Design",
  uiux: "UI/UX",
  character: "Character Design",
} as const satisfies Record<TagVariant, string>;
