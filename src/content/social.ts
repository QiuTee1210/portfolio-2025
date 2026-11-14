export const social = [
  { url: "mailto:quitrong38@gmail.com", name: "mail" },
  { url: "https://www.facebook.com/quitrong.nguyen.50", name: "facebook" },
  { url: "https://www.behance.net/trongqui1", name: "behance" },
] as const satisfies { url: string; name: "mail" | "facebook" | "behance" }[];
