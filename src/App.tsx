import Index from "./routes";

/**
 * Entrypoint.
 */
export default function App() {
  return (
    <>
      <span className="fixed inset-0 -z-50 bg-slate-950" />
      <div className="min-w-fit text-white">
        <Index />
      </div>
    </>
  );
}
