export type NavItem = { label: string; href: string };
export type LinkItem = { label: string; href: string };
export type BlurbItem = { title: string; text: string };
export type PathItem = { title: string; description: string; href: string; cta: string };
const storeUrl = "https://shop.multilink.us";

export const company = {
  name: "Multilink",
  headerName: "Multilink Solutions",
  legalName: "Multilink Solutions Inc.",
  phoneDisplay: "(888) 254-8006",
  phoneHref: "tel:8882548006",
  address: "11815 Highway Drive Ste #300, Cincinnati OH 45241",
  email: "sales@multilink.us"
};

export const navItems: NavItem[] = [
  { label: "Shop by Brand", href: `${storeUrl}/shop-by-brand/` },
  { label: "Categories", href: `${storeUrl}/shop-by-category/` },
  { label: "Top Deals", href: `${storeUrl}/top-deals/` },
  { label: "Tech Support", href: `${storeUrl}/tech-support/` },
  { label: "Blog", href: `${storeUrl}/blog/` }
];

export const trustStats = [
  { value: "10+", label: "Years Supporting Networks" },
  { value: "30+", label: "Authorized Brands" },
  { value: "5,000+", label: "Available SKUs" },
  { value: "US", label: "Fulfillment & Support" }
];

export const heroTrust = [
  "Authorized hardware from brands teams already spec",
  "Fast Cincinnati fulfillment for active deployments",
  "Project pricing support for quotes, BOMs, and alternates",
  "Practical guidance for real network, fiber, security, and voice rollouts"
];

export const popularPaths = [
  { label: "Browse Brands", href: `${storeUrl}/shop-by-brand/` },
  { label: "Explore Categories", href: `${storeUrl}/shop-by-category/` },
  { label: "Shop Top Deals", href: `${storeUrl}/top-deals/` },
  { label: "Request Project Pricing", href: `${storeUrl}/contact-us/` }
];

export const useCases = [
  {
    title: "WISPs & ISPs",
    description: "Subscriber gear, backhaul, routing, tower hardware, and access infrastructure for service-provider builds.",
    cta: "See WISP Products",
    href: `${storeUrl}/shop-by-brand/mikrotik/`
  },
  {
    title: "Enterprise & IT Teams",
    description: "Switching, WiFi, firewalls, racks, UPS, and power gear for business and multi-site IT environments.",
    cta: "See Enterprise Products",
    href: `${storeUrl}/shop-by-brand/ubiquiti/`
  },
  {
    title: "Schools & Campuses",
    description: "High-density WiFi, PoE switching, security, and access hardware for classrooms, campuses, and facilities.",
    cta: "See Campus Solutions",
    href: `${storeUrl}/shop-by-category/wifi-access-points/`
  },
  {
    title: "Security Integrators",
    description: "IP cameras, NVRs, access control, storage, and PoE infrastructure for surveillance deployments.",
    cta: "See Security Products",
    href: `${storeUrl}/shop-by-category/cameras/`
  },
  {
    title: "Fiber & GPON / FTTH",
    description: "OLTs, ONTs, splitters, splicing tools, and deployment accessories for FTTH and access builds.",
    cta: "See Fiber Products",
    href: `${storeUrl}/shop-by-brand/revotik/`
  },
  {
    title: "VoIP & Communications",
    description: "Phones, PBX, intercom, paging, and entry systems for voice and facility communications.",
    cta: "See Voice Products",
    href: `${storeUrl}/shop-by-category/voice-and-video/`
  }
];

export const trustSignals: BlurbItem[] = [
  { title: "Cincinnati fulfillment", text: "US-based shipping and support for active projects and replacements." },
  { title: "Built for infrastructure buyers", text: "WISPs, enterprise IT, campuses, security, fiber, and voice teams." },
  { title: "Real deployment support", text: "Used by teams building, upgrading, and maintaining production networks." }
];

export const whyMultilink: BlurbItem[] = [
  {
    title: "Authorized sourcing",
    text: "Buy from real distribution channels with genuine hardware, known warranty paths, and accountable follow-through."
  },
  {
    title: "Project pricing support",
    text: "Get quote help for BOMs, alternates, budget checks, and project-driven purchasing instead of consumer-style checkout only."
  },
  {
    title: "Fast Cincinnati fulfillment",
    text: "In-stock products ship from the US to keep installs, expansions, and replacements moving without unnecessary delay."
  },
  {
    title: "Practical technical guidance",
    text: "Work with people who understand deployment fit, compatibility questions, and the tradeoffs behind real infrastructure purchases."
  },
  {
    title: "Inventory across core categories",
    text: "Source networking, wireless, fiber, surveillance, power, and voice hardware without bouncing between disconnected vendors."
  },
  {
    title: "Support for real deployments",
    text: "The buying experience is built around infrastructure jobs, not casual consumer browsing or one-off gadget purchases."
  }
];

export const featuredBrands = ["MikroTik", "Ubiquiti", "Cambium", "Cisco", "TP-Link", "Hikvision", "Hanwha Vision", "CyberPower", "Grandstream", "Aruba Networks", "Teltonika", "Ruckus", "Datto", "Eaton"];

export const shoppingPaths: PathItem[] = [
  {
    title: "Shop by Manufacturer",
    description: "Start with the brands you already spec or trust for routing, wireless, fiber, security, and voice.",
    href: `${storeUrl}/shop-by-brand/`,
    cta: "Browse Brands"
  },
  {
    title: "Explore Categories",
    description: "Jump into product categories when you know the type of hardware you need but not the exact brand.",
    href: `${storeUrl}/shop-by-category/`,
    cta: "Explore Categories"
  },
  {
    title: "Shop Top Deals",
    description: "Review current promotions, clearance inventory, and value-oriented options for active purchasing cycles.",
    href: `${storeUrl}/top-deals/`,
    cta: "Shop Top Deals"
  },
  {
    title: "Request Project Pricing",
    description: "Use quote support when you are working through BOMs, alternates, larger quantities, or a live deployment plan.",
    href: `${storeUrl}/contact-us/`,
    cta: "Request Project Pricing"
  },
  {
    title: "Browse by Deployment",
    description: "Start from WISP, enterprise IT, campus, security, fiber, or voice use cases if you need a faster path into the catalog.",
    href: "#deployment-paths",
    cta: "Browse Deployment Paths"
  }
];

export const blogPosts = [
  {
    title: "Best MikroTik Routers for WISPs in 2026",
    href: `${storeUrl}/blog/best-mikrotik-routers-for-wisps-in-2026/`
  },
  {
    title: "Building the Smart Campus: Ubiquiti for K-12 & Universities",
    href: `${storeUrl}/blog/building-the-smart-campus-the-ultimate-ubiquiti-infrastructure-guide-for-k12-and-universities/`
  },
  {
    title: "Ubiquiti UniFi for Churches & Houses of Worship",
    href: `${storeUrl}/blog/ubiquiti-unifi-system-for-churches-houses-of-worship/`
  }
];

export const footerLinks: LinkItem[] = [
  { label: "About Us", href: `${storeUrl}/about-us/` },
  { label: "Tech Support", href: `${storeUrl}/tech-support/` },
  { label: "Blog", href: `${storeUrl}/blog/` },
  { label: "Careers", href: `${storeUrl}/careers/` },
  { label: "Contact Us", href: `${storeUrl}/contact-us/` },
  { label: "Shipping & Returns", href: `${storeUrl}/shipping-returns/` },
  { label: "Warranty", href: `${storeUrl}/warranty/` },
  { label: "Terms & Conditions", href: `${storeUrl}/terms-conditions/` }
];

export const socialLinks: LinkItem[] = [
  { label: "Facebook", href: "https://www.facebook.com/multilink.us" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/multilink-us/" }
];
