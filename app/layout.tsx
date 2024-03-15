import type { Metadata } from "next";
import { Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import { BackgroundDots } from "@/components/background-dots";
import Topbar from "@/components/topbar";
import Footer from "@/components/footer";

const inter = Noto_Serif_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - GUSD",
    absolute: "Georgetown University Student Dictionary",
  },
  description: "The dictionary built by students at Georgetown University.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundDots>
          <div className="min-h-screen">
            <Topbar />
            {children}
          </div>
          <Footer />
        </BackgroundDots>
      </body>
    </html>
  );
}
