import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bagdja Development Group | Technology Services & Software Development",
  description: "Professional software development, system integration, automation, and IT consulting services. Build, Develop, Deliver.",
  keywords: "software development, web development, mobile development, system integration, automation, IT consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

