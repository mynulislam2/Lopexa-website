"use client";

import { useId, useState } from "react";
import { faqSection } from "@/data/content";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M2.5 4.5L6 8L9.5 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();
  const { title, cta, items } = faqSection;

  return (
    <section
      id="faq"
      className="ambient-bg relative overflow-hidden bg-[#0a0a0a] py-16 text-white md:py-24 lg:py-28"
    >
      <span
        className="ambient-orb ambient-orb--top-right ambient-orb--violet ambient-orb--subtle"
        aria-hidden
      />
      <span
        className="ambient-orb ambient-orb--bottom-left ambient-orb--blue ambient-orb--subtle"
        style={{ opacity: 0.45 }}
        aria-hidden
      />

      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
        <h2 className="text-3xl font-semibold leading-[1.12] tracking-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-3 lg:gap-12 xl:gap-16">
          <aside className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-2xl bg-zinc-900 px-6 py-8 text-white md:px-8 md:py-10">
              <span
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/[0.04]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-white/[0.04]"
                aria-hidden
              />
              <span
                className="pointer-events-none absolute bottom-6 right-6 h-14 w-14 rotate-12 rounded-lg bg-white/[0.04]"
                aria-hidden
              />

              <div className="relative flex items-center">
                {cta.avatars.map((avatar, index) => (
                  <span
                    key={avatar.initials}
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white ring-2 ring-zinc-900 ${avatar.className} ${
                      index > 0 ? "-ml-3" : ""
                    }`}
                    aria-hidden
                  >
                    {avatar.initials}
                  </span>
                ))}
              </div>

              <p className="relative mt-6 text-lg font-semibold leading-snug text-white md:text-xl">
                {cta.headline}
              </p>

              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-8 inline-flex rounded-full bg-[#FACC15] px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-[#FDE047]"
              >
                {cta.buttonLabel}
              </a>
            </div>
          </aside>

          <div className="lg:col-span-2">
            <div className="flex flex-col gap-1">
              {items.map((faq, index) => {
                const isOpen = openIndex === index;
                const triggerId = `${baseId}-trigger-${index}`;
                const panelId = `${baseId}-panel-${index}`;

                return (
                  <div key={faq.question}>
                    <h3>
                      <button
                        type="button"
                        id={triggerId}
                        className="flex w-full items-center justify-between gap-6 py-5 text-left md:py-6"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <span className="pr-4 font-medium text-zinc-100 md:text-lg">
                          {faq.question}
                        </span>
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-zinc-800 text-zinc-300"
                          aria-hidden
                        >
                          <ChevronIcon open={isOpen} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden" aria-hidden={!isOpen}>
                        <p className="pb-5 text-sm leading-relaxed text-zinc-400 md:pb-6 md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
