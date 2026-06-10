import {
  contactMailto,
  contactPeople,
  contactSection,
  type ContactPerson,
} from "@/data/content";
import { IconEnvelope } from "@/components/ContactIcons";

function ContactPersonBlock({ person }: { person: ContactPerson }) {
  return (
    <div className="py-8 first:pt-0 last:pb-0">
      <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
        <a href={contactMailto} className="transition hover:text-zinc-200">
          {person.name}
        </a>
      </h3>
      <p className="mt-1 text-sm text-zinc-500">{person.role}</p>
      <ul className="mt-5 space-y-3">
        <li>
          <a
            href={contactMailto}
            className="group inline-flex items-center gap-3 text-base text-zinc-300 transition hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-white/5 text-zinc-400 transition group-hover:bg-white/10 group-hover:text-white">
              <IconEnvelope />
            </span>
            {person.email}
          </a>
        </li>
      </ul>
    </div>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      className="ambient-bg relative overflow-hidden bg-black py-20 md:py-28"
    >
      <span
        className="ambient-orb ambient-orb--top-right ambient-orb--violet ambient-orb--subtle"
        aria-hidden
      />
      <div className="ambient-content mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 xl:gap-24">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
              {contactSection.title}
            </h2>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 md:mt-6 md:text-lg">
              {contactSection.intro}
            </p>
            <p className="mt-3 text-sm text-zinc-500">{contactSection.responseTime}</p>

            <div className="mt-10 md:mt-12">
              {contactPeople.map((person) => (
                <ContactPersonBlock key={person.email} person={person} />
              ))}
            </div>

          </div>

          <div className="relative flex w-full items-center justify-center lg:justify-end">
            <img
              src="/images/countries.svg"
              alt="World map highlighting countries where Lopexa Technologies operates"
              width={932}
              height={585}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

