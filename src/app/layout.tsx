import type { Metadata } from "next";
import { Noto_Serif_Sinhala, Inter } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const notoSerifSinhala = Noto_Serif_Sinhala({
  variable: "--font-noto-sinhala",
  subsets: ["sinhala"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "දේව වන්දනාව | Dewa Wandhanawa",
  description:
    "A devotional prayer page – Dewa Wandhanawa (දේව වන්දනාව). Offered with reverence and devotion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="si"
      className={`${notoSerifSinhala.variable} ${inter.variable}`}
    >
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
