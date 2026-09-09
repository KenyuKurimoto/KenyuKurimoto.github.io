import type { Contact as ContactType } from "@/data/types";
import type { UiStrings } from "@/data/ui";
import Reveal from "./Reveal";

interface ContactProps {
  contact: ContactType;
  ui: UiStrings;
}

function hostLabel(url: string): string {
  try {
    const parsed = new URL(url);
    return (parsed.hostname + parsed.pathname).replace(/^www\./, "").replace(/\/$/, "");
  } catch {
    return url;
  }
}

export default function Contact({ contact, ui }: ContactProps) {
  const channels: { label: string; href: string; display: string }[] = [];

  if (contact.email) {
    channels.push({
      label: "Email",
      href: `mailto:${contact.email}`,
      display: contact.email,
    });
  }
  if (contact.github) {
    channels.push({
      label: ui.labels.github,
      href: contact.github,
      display: hostLabel(contact.github),
    });
  }
  if (contact.linkedin) {
    channels.push({
      label: "LinkedIn",
      href: contact.linkedin,
      display: hostLabel(contact.linkedin),
    });
  }
  if (contact.blog) {
    channels.push({
      label: "Blog",
      href: contact.blog,
      display: hostLabel(contact.blog),
    });
  }

  return (
    <section id="contact" className="shell scroll-mt-24 pb-20 pt-12 md:pb-32 md:pt-20">
      <Reveal>
        <div className="grid grid-cols-1 gap-x-14 border-t border-line pt-7 lg:grid-cols-12">
          <div className="flex items-baseline gap-4 lg:col-span-4">
            <span className="font-sans text-[10px] tracking-eyebrow text-sand">07</span>
            <p className="eyebrow">{ui.sections.contact.eyebrow}</p>
          </div>

          <div className="mt-8 lg:col-span-8 lg:mt-0">
            <p className="font-display text-[clamp(2.1rem,6vw,4rem)] leading-[1.16] text-ink">
              {ui.labels.contactTitle}
            </p>
            <p className="ja-body text-pretty mt-8 max-w-measure text-[14.5px] leading-[2] text-body md:text-[15.5px]">
              {ui.labels.contactLede}
            </p>

            {channels.length > 0 && (
              <ul className="mt-12">
                {channels.map((channel) => (
                  <li key={channel.href}>
                    <a
                      href={channel.href}
                      {...(channel.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-baseline justify-between gap-6 border-t border-line py-5 last:border-b"
                    >
                      <span className="font-display text-[22px] leading-none text-ink transition-colors duration-300 group-hover:text-navy md:text-[27px]">
                        {channel.label}
                      </span>
                      <span className="flex shrink-0 items-center gap-2 font-sans text-[10.5px] uppercase tracking-eyebrow text-muted">
                        <span className="hidden sm:inline">{channel.display}</span>
                        <svg
                          viewBox="0 0 12 12"
                          className="h-3 w-3 transition-transform duration-500 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          aria-hidden="true"
                        >
                          <path
                            d="M3 9L9 3M9 3H4M9 3v5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
