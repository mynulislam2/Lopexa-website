import { clientLogos } from "@/data/content";

/** Repeat enough times so one half of the track exceeds typical viewport width. */
const SET_REPEATS = 8;

function buildMarqueeTrack() {
  const oneSet = Array.from({ length: SET_REPEATS }, () => clientLogos).flat();
  return [...oneSet, ...oneSet];
}

export function LogoMarquee() {
  const logos = buildMarqueeTrack();

  return (
    <section
      className="ambient-bg relative overflow-hidden bg-[#0a0a0a] py-10"
      aria-label="Client logos"
    >
      <span
        className="ambient-orb ambient-orb--top-left ambient-orb--cyan ambient-orb--subtle"
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--top-right ambient-orb--blue ambient-orb--subtle"
        aria-hidden
      />
      <div className="ambient-content marquee">
        <div className="marquee__track">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="marquee__item text-base font-normal leading-relaxed text-zinc-400 transition-colors hover:text-zinc-300"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
