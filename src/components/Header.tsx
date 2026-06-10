"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { brand, heroSection, navLinks } from "@/data/content";
import { pageShell } from "@/lib/layout";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full max-w-full overflow-x-clip transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/80 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-transparent"
      }`}
    >
      <div
        className={`${pageShell} flex min-w-0 items-center justify-between gap-3 py-4 sm:gap-4`}
      >
        <a
          href="#"
          className="min-w-0 shrink"
          aria-label={`${brand.name} home`}
        >
          <Image
            src={brand.logo}
            alt={brand.logoAlt}
            width={180}
            height={40}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </a>

        <nav
          className="hidden min-w-0 shrink items-center gap-5 lg:flex xl:gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 lg:block">
          <a
            href={heroSection.ctaPrimary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center whitespace-nowrap rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            {heroSection.ctaPrimary.label}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 text-white lg:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className={`${pageShell} border-t border-white/10 bg-[#0a0a0a] py-6 lg:hidden`}>
          <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-zinc-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={heroSection.ctaPrimary.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"
              onClick={() => setMenuOpen(false)}
            >
              {heroSection.ctaPrimary.label}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
