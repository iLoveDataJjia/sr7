/**
 * Navigation bar.
 */
export default function NavBar({ className }: { className?: string }) {
  return (
    <div className={"flex items-center justify-between bg-slate-950 p-4" + (className ? ` ${className}` : "")}>
      <a className="flex items-center space-x-2" href="/">
        <img src="/general/logo.webp" alt="Logo" className="h-10 w-10" />
        <div className="text-sm font-bold">{window.location.host.toUpperCase()}</div>
      </a>
      <p className="w-96 text-xs font-thin italic text-indigo-300">
        {window.location.host.toUpperCase()} - Build hub for Honkai Impact Star Rail. Unleash the power of your beloved
        waifus and husbandos!
      </p>
    </div>
  );
}
