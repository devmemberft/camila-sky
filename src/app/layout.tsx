import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://superchicacl.netlify.app"),
  title: "Soury",
  description: "You changed it all",
  applicationName: "Soury",
  appleWebApp: { capable: true, title: "Soury", statusBarStyle: "black-translucent" },
  openGraph: {
    title: "Soury",
    description: "You changed it all",
    type: "website",
  },
  robots: { index: false, follow: false }, // Google no index
};

export const viewport: Viewport = {
  themeColor: "#183D32",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
