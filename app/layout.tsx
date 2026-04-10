import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sans = IBM_Plex_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans", weight: ["400", "500", "600", "700"] });
const technical = IBM_Plex_Mono({ subsets: ["latin"], display: "swap", variable: "--font-technical", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Multilink Solutions Inc. | B2B Network Hardware Distributor",
  description:
    "Authorized US distributor of routing, wireless, fiber, power, surveillance, and voice hardware for WISPs, ISPs, IT teams, schools, and security integrators.",
  openGraph: {
    title: "Multilink Solutions Inc. | B2B Network Hardware Distributor",
    description:
      "Authorized US distributor of routing, wireless, fiber, power, surveillance, and voice hardware for WISPs, ISPs, IT teams, schools, and security integrators.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${technical.variable}`}>{children}</body>
    </html>
  );
}
