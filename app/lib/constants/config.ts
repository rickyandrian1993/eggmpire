
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
    email: "hello@eggmpire.com",
    support: "support@eggmpire.com",
  },
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Tokenomics", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// Token Features (replaces Services)
export const TOKEN_FEATURES = [
  {
    id: 1,
    title: "Decentralized",
    description:
      "Built on blockchain technology for true decentralization and transparency",
    icon: "⛓️",
  },
  {
    id: 2,
    title: "Secure",
    description:
      "Audited smart contracts with enterprise-grade security measures",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Low Fees",
    description: "Minimal transaction fees with efficient network operations",
    icon: "💰",
  },
  {
    id: 4,
    title: "Fast Transactions",
    description:
      "Lightning-fast blockchain transactions with confirmation speeds",
    icon: "⚡",
  },
  {
    id: 5,
    title: "Community Driven",
    description:
      "Governed by the community with transparent governance mechanisms",
    icon: "🤝",
  },
  {
    id: 6,
    title: "Multi-Chain",
    description:
      "Available across multiple blockchain networks for accessibility",
    icon: "🌐",
  },
];

// Tokenomics
export const TOKENOMICS = {
  totalSupply: "1,000,000,000",
  circulatingSupply: "400,000,000",
  decimals: 18,
  contractAddress: "0x...", // Add actual contract address
  distribution: [
    { category: "Community", percentage: 40, amount: "400,000,000" },
    { category: "Team", percentage: 20, amount: "200,000,000" },
    { category: "Development", percentage: 20, amount: "200,000,000" },
    { category: "Marketing", percentage: 10, amount: "100,000,000" },
    { category: "Liquidity", percentage: 10, amount: "100,000,000" },
  ],
};

// SEO Keywords
export const SEO_KEYWORDS = {
  home: [
    "EggMpire token",
    "EGGS cryptocurrency",
    "DeFi token",
    "blockchain token",
    "decentralized finance",
    "crypto currency",
  ] as string[],
  about: [
    "EggMpire about",
    "EGGS token project",
    "blockchain project",
    "crypto community",
    "DeFi ecosystem",
  ] as string[],
  tokenomics: [
    "EggMpire tokenomics",
    "EGGS distribution",
    "token allocation",
    "crypto supply",
  ] as string[],
  team: [
    "EggMpire team",
    "blockchain developers",
    "crypto founders",
  ] as string[],
};

