import "./globals.css";
import NavBar from "@/components/NavBar";

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
      </head>
      <body>
        <span className="fixed inset-0 -z-50 bg-slate-950" />
        <div className="min-w-fit text-white">
          <div className="relative mx-auto max-w-5xl">
            <NavBar className="sticky top-0 z-50" />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
