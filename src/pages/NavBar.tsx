import logo from "../assets/general/logo.webp";

/**
 * Navigation bar.
 */
export default function NavBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <a className="flex items-center space-x-2" href="/">
        <img src={logo} alt="SR7.ME" className="w-10" />
        <div className="text-sm font-bold">SR7.ME</div>
      </a>
      <p className="w-96 text-xs italic text-indigo-300">
        SR.GG for Honkai Impact Star Rail: The ultimate build hub! Crafted by passionate gamers, discover top-tier
        character builds for honing your heroes. Unleash potential with expertly curated loadouts. By gamers, for
        gamers!
      </p>
    </div>
  );
}
