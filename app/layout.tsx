import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Cortex HQ",
    template: "%s | Cortex HQ",
  },
  description: "Infrastructure for modern Discord communities.",
  openGraph: {
    title: "Cortex HQ",
    description: "Infrastructure for modern Discord communities.",
    siteName: "Cortex HQ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortex HQ",
    description: "Infrastructure for modern Discord communities.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
