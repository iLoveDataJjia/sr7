import Footer from "./Footer";
import NavBar from "./NavBar";
import "./globals.css";
import Script from "next/script";

/**
 * Metadata.
 */
export const metadata = {
  metadataBase: new URL("https://sr7.nl"),
  title: "Honkai: Star Rail All Characters List",
  description:
    "SR7.NL provides the essential, constantly updated Honkai Star Rail tier list and character builds for the latest patch, utilizing data science to determine the optimal characters for any team.",
  openGraph: {
    images: "/assets/general/logo.webp",
  },
};

/**
 * Layout.
 */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
