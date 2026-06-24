import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import ContextMenu from "./components/ContextMenu";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cortexhq.net"),
  title: "Cortex HQ — Next-Gen Discord Infrastructure",
  description:
    "Cortex HQ delivers premium Discord bots, moderation tools, and community infrastructure for modern communities.",
  openGraph: {
    title: "Cortex HQ — Next-Gen Discord Infrastructure",
    description:
      "Cortex HQ delivers premium Discord bots, moderation tools, and community infrastructure for modern communities.",
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
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="min-h-screen bg-cortex-bg text-cortex-text antialiased">
        {children}
        <ContextMenu />
      </body>
    </html>
  );
}
