import Image from "next/image";
import {
  caseStudies,
  portfolioSection,
  type CaseStudy,
} from "@/data/content";

/** Encode path segments so static assets with spaces load correctly in export. */
function publicAssetPath(path: string): string {
  return path
    .split("/")
    .map((segment) => (segment ? encodeURIComponent(segment) : segment))
    .join("/");
}

function CaseStudyCard({
  project,
  featured = false,
}: {
  project: CaseStudy;
  featured?: boolean;
}) {
  return (
    <article className="portfolio-card group flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
        <Image
          src={publicAssetPath(project.image)}
          alt={project.imageAlt}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 1280px"
              : "(max-width: 768px) 100vw, 50vw"
          }
          priority={featured}
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex flex-col md:mt-5">
        <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
          {project.client}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-zinc-500 md:text-[15px]">
          {project.tagline}
        </p>
        <ul className="mt-3 flex flex-wrap gap-2 md:mt-4">
          {project.services.map((service) => (
            <li
              key={service}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-zinc-300"
            >
              {service}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Portfolio() {
  const [featured, ...rest] = caseStudies;

  return (
    <section id="work" className="ambient-bg relative overflow-hidden py-20 md:py-28">
      <span
        className="ambient-orb ambient-orb--top-right ambient-orb--blue"
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--mid-top ambient-orb--cyan ambient-orb--subtle"
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--bottom-right ambient-orb--violet ambient-orb--subtle"
        aria-hidden
      />
      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-tight leading-[1.15] text-white md:text-4xl lg:text-5xl">
              {portfolioSection.title}
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
          >
            Discuss your project
            <span aria-hidden className="text-zinc-400">
              ?
            </span>
          </a>
        </div>

        {featured ? (
          <CaseStudyCard project={featured} featured />
        ) : null}

        <div className="mt-8 grid gap-8 sm:grid-cols-2 md:mt-10 md:gap-10">
          {rest.map((project) => (
            <CaseStudyCard key={project.client} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
