import Footer from "./Footer";
import NavBar from "./NavBar";
import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "SR7.NL - Honkai Impact Star Rail build hub. Unleash the power of your beloved waifus and husbandos!",
  description:
    "Enhance your Honkai Impact Star Rail gaming experience with our website dedicated to character builds, team compositions, and equipment recommendations. Discover optimal strategies, synergies, and equipment builds to conquer challenges and create formidable teams in Honkai Impact Star Rail. Unlock the full potential of your characters and dominate the game with our expert insights and recommendations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/webp" href="/assets/general/logo.webp" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2443745935997146"
          strategy="lazyOnload"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <span className="fixed inset-0 -z-50 bg-slate-950" />
        <div className="min-w-fit text-white">
          <div className="relative mx-auto min-w-[941px] max-w-5xl">
            <NavBar className="sticky top-0 z-50" />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
