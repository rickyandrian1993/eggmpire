// Site Configuration - EggMpire Token
export const SITE_CONFIG = {
  name: "EggMpire",
  shortName: "EGGS",
  description:
    "EggMpire is a decentralized token project built on blockchain technology. Discover the future of digital currency.",
  tagline: "The Future of Decentralized Finance",
  url: "https://eggmpire.com",
  ogImage: "https://eggmpire.com/og-image.png",
  twitterImage: "https://eggmpire.com/twitter-image.png",
  tokenSymbol: "EGGS",
  tokenDecimals: 18,
  chainId: 1, // Ethereum Mainnet - adjust as needed
  links: {
    twitter: "https://twitter.com/eggmpire",
    telegram: "https://t.me/eggmpire",
    discord: "https://discord.gg/eggmpire",
    github: "https://github.com/eggmpire",
    whitepaper: "/whitepaper.pdf",
    docs: "https://docs.eggmpire.com",
  },
  contact: {
    email: "admin@eggmpire.com",
    support: "admin@eggmpire.com",
  },
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Privacy Rule", href: "/privacy-rules" },
  { label: "Term & Conditions", href: "/terms" },
  // { label: "Blog", href: "/team" },
  { label: "Contact Us", href: "#contact-us" },
];

// SEO Keywords
export const SEO_KEYWORDS = {
  home: [
    "EggMpire token",
    "EGGS cryptocurrency",
    "blockchain token",
    "decentralized finance",
    "crypto currency",
  ] as string[],
  privacyRules: [
    "Privacy Policy",
    "Eggmpire",
    "EGGM Token",
    "Data Protection",
    "User Privacy",
    "Indonesia Privacy Policy",
  ] as string[],
  terms: [
    "Terms and Conditions",
    "Eggmpire",
    "Crypto Terms",
    "Blockchain Agreement",
    "EGGM Token",
  ] as string[],
};

