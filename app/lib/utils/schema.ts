import { SITE_CONFIG } from "@/app/lib/constants/config";

// JSON-LD Structured Data for SEO

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.ogImage,
    sameAs: [
      SITE_CONFIG.links.twitter,
      SITE_CONFIG.links.telegram,
      SITE_CONFIG.links.discord,
      SITE_CONFIG.links.github,
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/logo.png`,
    image: SITE_CONFIG.ogImage,
    email: SITE_CONFIG.contact.email,
    sameAs: [
      SITE_CONFIG.links.twitter,
      SITE_CONFIG.links.telegram,
      SITE_CONFIG.links.discord,
      SITE_CONFIG.links.github,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      email: SITE_CONFIG.contact.support,
    },
  };
}

export function getCryptoTokenSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Thing",
    name: `${SITE_CONFIG.name} (${SITE_CONFIG.tokenSymbol})`,
    description: SITE_CONFIG.description,
    identifier: SITE_CONFIG.tokenSymbol,
    url: SITE_CONFIG.url,
    image: SITE_CONFIG.ogImage,
    sameAs: [SITE_CONFIG.links.twitter, SITE_CONFIG.links.telegram],
  };
}

export function getArticleSchema(
  title: string,
  description: string,
  datePublished?: string,
  dateModified?: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: SITE_CONFIG.ogImage,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}/logo.png`,
      },
    },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

