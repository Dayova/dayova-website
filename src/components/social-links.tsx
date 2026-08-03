import {
  DiscordIcon,
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import { DayovaIcon } from "@/components/ui/huge-icon";
import { siteConfig } from "@/config/site";

type SocialLink = {
  href: string;
  label: string;
  icon: IconSvgElement;
};

const socialLinks: readonly SocialLink[] = [
  {
    href: siteConfig.links.discord,
    label: "Discord",
    icon: DiscordIcon,
  },
  {
    href: siteConfig.links.linkedin,
    label: "LinkedIn",
    icon: Linkedin01Icon,
  },
  {
    href: siteConfig.links.instagram,
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: siteConfig.links.facebook,
    label: "Facebook",
    icon: Facebook01Icon,
  },
  {
    href: siteConfig.links.youtube,
    label: "YouTube",
    icon: YoutubeIcon,
  },
] as const;

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Dayova Social Media">
      {socialLinks.map((social) => (
        <a
          aria-label={`Dayova auf ${social.label}`}
          className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-3 text-xs font-medium text-white/75 transition duration-200 hover:-translate-y-1 hover:border-brand/70 hover:bg-white/[0.06] hover:text-white"
          href={social.href}
          key={social.label}
          rel="noreferrer"
          target="_blank"
        >
          <span
            className="grid size-7 place-items-center rounded-full bg-white/[0.06] text-white transition-colors group-hover:text-brand"
            aria-hidden="true"
          >
            <DayovaIcon icon={social.icon} size={18} />
          </span>
          <span>{social.label}</span>
        </a>
      ))}
    </div>
  );
}
