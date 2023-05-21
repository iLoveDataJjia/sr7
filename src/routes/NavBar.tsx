import Webp from "../assets";

/**
 * Navigation bar.
 */
export default function NavBar({ className }: { className?: string }) {
  return (
    <div className={"flex items-center justify-between bg-slate-950 p-4" + (className ? ` ${className}` : "")}>
      <a className="flex items-center space-x-2" href="/">
        <Webp src="./general/logo.webp" className="h-10 w-10" />
        <div className="text-sm font-bold">SR7.ME</div>
      </a>
      <p className="w-96 text-xs font-thin italic text-indigo-300">
        SR7.ME - Build hub for Honkai Impact Star Rail. Unleash the power of your beloved waifus and husbandos!
      </p>
    </div>
  );
}
