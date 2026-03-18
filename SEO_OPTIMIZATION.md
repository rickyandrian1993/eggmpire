# EggMpire - SEO & Meta Tags Optimization Guide

## 🎯 SEO Strategy Overview

This document outlines all SEO optimizations implemented for the EggMpire cryptocurrency token website.

---

## 📋 Root Layout Optimizations (`app/layout.tsx`)

### 1. **Enhanced Metadata**

```typescript
- title: "EggMpire - Decentralized Token & DeFi Ecosystem"
- description: Crypto-focused description
- keywords: DeFi, blockchain, token, cryptocurrency, decentralized finance
- canonical: Auto-generated from metadataBase
```

### 2. **Structured Data (JSON-LD)**

- **Website Schema**: Defines the website's basic information
- **Organization Schema**: Company information, contact points, social links
- Helps Google understand your site's purpose and legitimacy

### 3. **Social Media Meta Tags**

- **Open Graph (OG)**: Multiple image sizes for social sharing
- **Twitter Cards**: Optimized for Twitter previews
- **Image Headers**: 1200x630 and 800x600 versions

### 4. **Advanced Meta Tags**

```html
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="theme-color" content="#1e40af" />
<meta name="apple-mobile-web-app-capable" content="yes" />
```

### 5. **Preconnect & DNS Prefetch**

- Faster resource loading for Google Fonts
- Google Analytics preconnection
- Improves Core Web Vitals

---

## 📄 Page-Specific SEO

### **Home Page** (`app/page.tsx`)

```
Title: "EggMpire - Decentralized Token & DeFi Ecosystem | Home"
Keywords:
  - EggMpire token
  - EGGS crypto
  - DeFi token
  - blockchain
  - decentralized finance

Content:
- Hero section with "Why Choose EggMpire"
- Token features grid
- Tokenomics overview with distribution charts
- Call-to-action sections
- Breadcrumb JSON-LD markup
```

### **About Page** (`app/(sections)/about/page.tsx`)

```
Title: "About EggMpire - DeFi Token Project & Mission"
Keywords:
  - EggMpire about
  - EGGS token project
  - blockchain project
  - crypto community
  - DeFi ecosystem

Content:
- Mission statement focused on DeFi
- Core values (decentralization, community, security)
- Trust factors (audited contracts, community governance)
- Breadcrumb schema
```

### **Tokenomics Page** (`app/(sections)/services/page.tsx`)

```
Title: "EggMpire Tokenomics - Token Distribution & Supply"
Keywords:
  - EggMpire tokenomics
  - EGGS distribution
  - token allocation
  - crypto supply

Content:
- Token specifications (name, symbol, supply)
- Supply distribution chart with percentages
- Token features grid
- Release schedule phases
```

### **Team Page** (`app/(sections)/team/page.tsx`)

```
Title: "EggMpire Team - Meet Our Blockchain Experts"
Keywords:
  - EggMpire team
  - blockchain developers
  - crypto founders

Content:
- Team member cards
- Roles and expertise
- Professional presentation
```

### **Contact Page** (`app/(sections)/contact/page.tsx`)

```
Title: "Contact EggMpire - Get in Touch with Our Team"
Keywords:
  - contact EggMpire
  - EGGS token support
  - DeFi support
  - customer service

Content:
- Multiple contact channels (Email, Discord, Twitter)
- Contact form
- Community engagement emphasis
```

---

## 🏗️ Structured Data Implementation

### 1. **Website Schema**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "EggMpire",
  "url": "https://eggmpire.com",
  "sameAs": [Twitter, Telegram, Discord, GitHub]
}
```

### 2. **Organization Schema**

```json
{
  "@type": "Organization",
  "name": "EggMpire",
  "logo": "https://eggmpire.com/logo.png",
  "contactPoint": {
    "contactType": "Customer Support",
    "email": "support@eggmpire.com"
  }
}
```

### 3. **Breadcrumb Schema**

Applied to all pages for better navigation understanding:

- Home > About
- Home > Tokenomics
- Home > Team
- Home > Contact

### 4. **Cryptocurrency Token Schema**

```json
{
  "@type": "Thing",
  "name": "EggMpire (EGGS)",
  "identifier": "EGGS",
  "url": "https://eggmpire.com"
}
```

---

## 🔑 Keyword Strategy

### **High Priority Keywords**

- EggMpire token
- EGGS cryptocurrency
- DeFi token
- Blockchain token
- Decentralized finance

### **Secondary Keywords**

- EggMpire tokenomics
- EGGS supply
- Token distribution
- Crypto currency
- Digital currency

### **Long-Tail Keywords**

- "How to buy EggMpire token"
- "EGGS token price"
- "EggMpire DeFi ecosystem"
- "Best DeFi tokens 2024"

---

## 📊 Tokenomics Data Structure

Located in `app/lib/constants/config.ts`:

```typescript
TOKENOMICS = {
  totalSupply: "1,000,000,000",
  circulatingSupply: "400,000,000",
  distribution: [
    { category: "Community", percentage: 40 },
    { category: "Team", percentage: 20 },
    { category: "Development", percentage: 20 },
    { category: "Marketing", percentage: 10 },
    { category: "Liquidity", percentage: 10 },
  ],
};
```

---

## 🛠️ SEO Utilities

### **Schema Generation** (`app/lib/utils/schema.ts`)

Functions for creating structured data:

- `getWebsiteSchema()` - Website schema
- `getOrganizationSchema()` - Organization info
- `getCryptoTokenSchema()` - Crypto-specific schema
- `getArticleSchema()` - Article/blog schema
- `getBreadcrumbSchema()` - Breadcrumb navigation

Usage:

```typescript
const schema = getWebsiteSchema();
<script type="application/ld+json">
  {JSON.stringify(schema)}
</script>
```

---

## 🚀 SEO Best Practices Implemented

### 1. **Title Tags**

✅ Unique for each page
✅ Include primary keyword
✅ 50-60 characters (optimal length)
✅ Brand name included

### 2. **Meta Descriptions**

✅ Unique for each page
✅ 150-160 characters
✅ Include call-to-action
✅ Crypto/DeFi focused language

### 3. **Heading Hierarchy**

✅ H1: One per page (page title)
✅ H2: Section headers
✅ H3: Subsection headers
✅ Proper nesting structure

### 4. **URL Structure**

✅ Clean, descriptive URLs
✅ No parameters in main URLs
✅ Logical hierarchy using route groups

### 5. **Internal Linking**

✅ Contextual links between pages
✅ Breadcrumb navigation
✅ Related content links
✅ Navigation menus

### 6. **Mobile Optimization**

✅ Responsive design
✅ Touch-friendly buttons
✅ Readable font sizes
✅ Fast loading times

### 7. **Core Web Vitals**

✅ LCP: Images optimized
✅ FID: Fast interactions
✅ CLS: Layout stability

---

## 📱 Social Media Optimization

### **Twitter Card Settings**

- Card type: summary_large_image
- 1200x630px image
- Handles: @eggmpire for attribution

### **Open Graph Settings**

- Multiple image sizes
- Proper title and description
- Site name: EggMpire
- Locale: en_US

### **Social Links Configuration**

```typescript
links: {
  twitter: "https://twitter.com/eggmpire",
  telegram: "https://t.me/eggmpire",
  discord: "https://discord.gg/eggmpire",
  github: "https://github.com/eggmpire",
  whitepaper: "/whitepaper.pdf"
}
```

---

## 🔍 Search Engine Features

### **Robots Meta**

```html
<meta name="robots" content="index, follow" />
```

Allows search engines to index and follow all links

### **Google Bot Specific**

```html
<meta
  name="googlebot"
  content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
/>
```

Shows full snippets and large previews

### **Canonical Tags**

Applied to all pages to prevent duplicate content issues:

```typescript
alternates: {
  canonical: "/page-url";
}
```

---

## 📈 Implementation Checklist

- ✅ Root layout with comprehensive metadata
- ✅ JSON-LD structured data on all pages
- ✅ Breadcrumb navigation and schema
- ✅ Crypto-focused keywords throughout
- ✅ Open Graph tags for social sharing
- ✅ Twitter Cards configuration
- ✅ Mobile-responsive design
- ✅ Schema.org markup
- ✅ Canonical URLs
- ✅ Meta robots directives

---

## 🔧 Customization Guide

### **To Update Site Config:**

Edit `app/lib/constants/config.ts`:

```typescript
SITE_CONFIG.url = "https://yourdomain.com";
SITE_CONFIG.links.twitter = "https://twitter.com/yourhandle";
SITE_CONFIG.tokenSymbol = "YOUR_TOKEN";
```

### **To Add New Pages:**

1. Create metadata object with `title`, `description`, `keywords`
2. Add breadcrumb schema
3. Update nav links in config
4. Include canonical URL

### **To Update Keywords:**

Edit `SEO_KEYWORDS` object in `app/lib/constants/config.ts`

---

## 📊 Monitoring & Testing

### **Tools to Use:**

- Google Search Console - Track indexing
- Google PageSpeed Insights - Core Web Vitals
- Screaming Frog - SEO audit
- Schema.org Validator - Structured data validation
- SEMrush/Ahrefs - Keyword research

### **Regular Maintenance:**

- Monitor keyword rankings monthly
- Update content based on analytics
- Check for broken links
- Refresh old content regularly
- Monitor token price and update messaging

---

## 🎯 Crypto/DeFi SEO Tips

1. **Use Crypto-Specific Terms** - "DeFi", "blockchain", "decentralized", "token"
2. **Highlight Security** - Mention audits, security measures
3. **Community Focus** - Emphasize governance and community
4. **Transparency** - Show tokenomics clearly
5. **Trust Signals** - Team info, roadmap, liquidity locks
6. **Content Strategy** - Blog posts about token economics
7. **Link Building** - Get featured on crypto news sites
8. **Social Proof** - Community stats, holder count

---

## 📝 Notes

- All pages now use Lexend font for consistency
- Dark mode support for all SEO content
- Responsive design for mobile indexing
- Fast loading with preconnect/DNS prefetch
- Follow best practices for crypto/DeFi SEO

For questions about specific implementations, refer to the individual file comments and the config file.

