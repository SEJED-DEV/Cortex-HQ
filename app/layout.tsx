import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cortexhq.net"),
  title: "Cortex HQ",
  description:
    "Infrastructure for modern Discord communities.",
  openGraph: {
    title: "Cortex HQ",
    description:
      "Infrastructure for modern Discord communities.",
    images: [
      {
        url: "/thubnail.png",
        width: 1200,
        height: 630,
        alt: "Cortex HQ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
