import Webp from "../assets";

/**
 * Navigation bar.
 */
export default function NavBar(props: { className?: string }) {
  return (
    <div
      className={
        "flex items-center justify-between bg-slate-950 px-4 py-2" + (props.className ? ` ${props.className}` : "")
      }
    >
      <a className="flex items-center space-x-2" href="/">
        <Webp src="./general/logo.webp" className="h-10 w-10" />
        <div className="text-sm font-bold">SR7.ME</div>
      </a>
      <p className="w-96 text-xs font-thin italic text-indigo-300">
        SR7.ME - The ultimate build hub for Honkai Impact Star Rail. Unleash the power of your beloved waifus and
        husbandos! Created by dedicated gamers, for passionate otakus!
      </p>
    </div>
  );
}
