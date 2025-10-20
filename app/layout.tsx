import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://theicigroup.com"),
  title: {
    default: "The ICI Group",
    template: "%s | The ICI Group",
  },
  description:
    "International Cargo Investigations: Risk assessments, cargo theft investigations, CAPS, training, and global reach across the Americas.",
  openGraph: {
    title: "The ICI Group",
    description:
      "International Cargo Investigations: Risk assessments, cargo theft investigations, CAPS, training, and global reach across the Americas.",
    url: "https://theicigroup.com",
    siteName: "The ICI Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The ICI Group",
    description: "International Cargo Investigations across the Americas.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
