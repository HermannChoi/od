import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryClientProvider } from "./utils/ReactQueryClientProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OD : 우리들만의 다이어리 공간",
  description: "하루하루 그 날의 기분을 저장하는 공간",
  manifest: "/manifest.json",
  icons: [{ rel: "icon", url: "/png/192icon.png", sizes: "192x192" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout">
          <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
        </div>
      </body>
    </html>
  );
}
