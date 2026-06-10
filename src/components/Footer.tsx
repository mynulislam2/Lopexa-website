import { footerCopy } from "@/data/content";

export function Footer() {
  return (
    <footer className="ambient-bg relative overflow-hidden border-t border-white/5 bg-black py-8">
      <span
        className="ambient-orb ambient-orb--top-left ambient-orb--violet ambient-orb--subtle"
        aria-hidden
      />
      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-sm text-zinc-500">{footerCopy.copyright}</p>
      </div>
    </footer>
  );
}
