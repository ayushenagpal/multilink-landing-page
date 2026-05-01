import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
