import type { Metadata } from "next";
import { Noto_Serif_Sinhala, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "ගම්භාර දේව වන්දනාව | Gambhara Dewa Wandhanawa",
  description:
    "ගම්භාර දේව වන්දනාව – A devotional prayer page offered with reverence and devotion. | Gambhara Dewa Wandhanawa (ගම්භාර දේව වන්දනාව).",
  metadataBase: new URL("https://gambhara-dewa-wandhanawa.vercel.app"),
  icons: {
    icon: [
      { url: "/favicon-circle.png", type: "image/png" },
    ],
    apple: [
      { url: "/favicon-circle.png", type: "image/png" },
    ],
    shortcut: "/favicon-circle.png",
  },
  openGraph: {
    title: "ගම්භාර දේව වන්දනාව | Gambhara Dewa Wandhanawa",
    description:
      "ගම්භාර දේව වන්දනාව – A devotional prayer page offered with reverence and devotion.",
    url: "https://gambhara-dewa-wandhanawa.vercel.app",
    siteName: "Gambhara Dewa Wandhanawa",
    images: [
      {
        url: "https://gambhara-dewa-wandhanawa.vercel.app/og.png",
        width: 1200,
        height: 630,
        alt: "ගම්භාර දේව වන්දනාව",
      },
    ],
    locale: "si_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ගම්භාර දේව වන්දනාව | Gambhara Dewa Wandhanawa",
    description:
      "ගම්භාර දේව වන්දනාව – A devotional prayer page offered with reverence and devotion.",
    images: ["https://gambhara-dewa-wandhanawa.vercel.app/og.png"],
  },
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
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EGNTYQE59C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EGNTYQE59C');
          `}
        </Script>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
