export type NavItem = { label: string; href: string };
export type LinkItem = { label: string; href: string };

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
  { label: "Shop by Brand", href: "https://multilink.us/shop-by-brand/" },
  { label: "Categories", href: "https://multilink.us/shop-by-category/" },
  { label: "Top Deals", href: "https://multilink.us/top-deals/" },
  { label: "Tech Support", href: "https://multilink.us/tech-support/" },
  { label: "Blog", href: "https://multilink.us/blog/" }
];

export const trustStats = [
  { value: "10+", label: "Years Supporting Networks" },
  { value: "30+", label: "Authorized Brands" },
  { value: "5,000+", label: "Available SKUs" },
  { value: "US", label: "Fulfillment & Support" }
];

export const heroTrust = ["Authorized sourcing", "Project pricing", "US fulfillment", "Technical guidance"];

export const popularPaths = [
  { label: "Wireless & backhaul", href: "https://multilink.us/shop-by-brand/mikrotik/" },
  { label: "Fiber / FTTH", href: "https://multilink.us/shop-by-brand/revotik/" },
  { label: "Security systems", href: "https://multilink.us/shop-by-category/cameras/" },
  { label: "Voice & access", href: "https://multilink.us/shop-by-category/voice-and-video/" }
];

export const useCases = [
  {
    title: "WISPs & ISPs",
    description: "Routers, backhaul links, subscriber gear, and access infrastructure",
    cta: "Shop WISP Gear",
    href: "https://multilink.us/shop-by-brand/mikrotik/"
  },
  {
    title: "Enterprise & IT Teams",
    description: "Switches, WiFi, firewalls, racks, and backup power systems",
    cta: "Shop Enterprise",
    href: "https://multilink.us/shop-by-brand/ubiquiti/"
  },
  {
    title: "Schools & Campuses",
    description: "High-density WiFi, PoE switching, structured access, and security",
    cta: "Shop Campus WiFi",
    href: "https://multilink.us/shop-by-category/wifi-access-points/"
  },
  {
    title: "Security Integrators",
    description: "IP cameras, NVRs, access control, storage, and PoE infrastructure",
    cta: "Shop Security",
    href: "https://multilink.us/shop-by-category/cameras/"
  },
  {
    title: "Fiber & GPON / FTTH",
    description: "OLTs, ONTs, splitters, splicing tools, and deployment accessories",
    cta: "Shop Fiber",
    href: "https://multilink.us/shop-by-brand/revotik/"
  },
  {
    title: "VoIP & Communications",
    description: "IP phones, PBX, intercoms, paging, and controlled entry hardware",
    cta: "Shop VoIP",
    href: "https://multilink.us/shop-by-category/voice-and-video/"
  }
];

export const whyMultilink = [
  { title: "Authorized sourcing", text: "Buy through accountable distribution channels with genuine hardware and dependable availability." },
  { title: "Fast US fulfillment", text: "In-stock products ship from Cincinnati to keep installs, upgrades, and emergency replacements moving." },
  { title: "Deployment guidance", text: "Work with a team that understands network hardware selection, compatibility, and rollout constraints." },
  { title: "B2B pricing support", text: "Get practical pricing and account support built around real projects, not consumer checkout flows." }
];

export const featuredBrands = ["MikroTik", "Ubiquiti", "Cambium", "Cisco", "TP-Link", "Hikvision", "Hanwha Vision", "CyberPower", "Grandstream", "Aruba Networks", "Teltonika", "Ruckus", "Datto", "Eaton"];

export const shoppingPaths = [
  { title: "Shop by Manufacturer", description: "Go directly into authorized brand collections and stocked product lines.", href: "https://multilink.us/shop-by-brand/" },
  { title: "Review Deal Inventory", description: "See current promotions, clearance stock, and value buys for active projects.", href: "https://multilink.us/top-deals/" },
  { title: "Request Project Pricing", description: "Talk through BOMs, alternates, and deployment requirements with the sales team.", href: "https://multilink.us/contact-us/" }
];

export const blogPosts = [
  {
    title: "Best MikroTik Routers for WISPs in 2026",
    href: "https://multilink.us/blog/best-mikrotik-routers-for-wisps-in-2026/"
  },
  {
    title: "Building the Smart Campus: Ubiquiti for K-12 & Universities",
    href: "https://multilink.us/blog/building-the-smart-campus-the-ultimate-ubiquiti-infrastructure-guide-for-k12-and-universities/"
  },
  {
    title: "Ubiquiti UniFi for Churches & Houses of Worship",
    href: "https://multilink.us/blog/ubiquiti-unifi-system-for-churches-houses-of-worship/"
  }
];

export const footerLinks: LinkItem[] = [
  { label: "About Us", href: "https://multilink.us/about-us/" },
  { label: "Tech Support", href: "https://multilink.us/tech-support/" },
  { label: "Blog", href: "https://multilink.us/blog/" },
  { label: "Careers", href: "https://multilink.us/careers/" },
  { label: "Contact Us", href: "https://multilink.us/contact-us/" },
  { label: "Shipping & Returns", href: "https://multilink.us/shipping-returns/" },
  { label: "Warranty", href: "https://multilink.us/warranty/" },
  { label: "Terms & Conditions", href: "https://multilink.us/terms-conditions/" }
];

export const socialLinks: LinkItem[] = [
  { label: "Facebook", href: "https://www.facebook.com/multilink.us" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/multilink-us/" },
  { label: "YouTube", href: "https://www.youtube.com/@multilinkus" }
];
