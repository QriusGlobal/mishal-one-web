// ============================================================
// Site Configuration — Single source of truth
// Replace placeholder values with your actual brand details
// ============================================================

/** Display name shown in header, footer, and meta tags */
export const SITE_NAME = 'Mishal';

/** One-line tagline for the hero section */
export const SITE_TAGLINE = 'Builder. Thinker. Operator.';

/** SEO description (≤160 chars) */
export const SITE_DESCRIPTION =
  'Personal linktree for Mishal — links to writing, projects, and social profiles.';

/** Canonical site URL (no trailing slash) */
export const SITE_URL = 'https://mishal.one';

/** Path to avatar image in public/ (or external URL) */
export const AVATAR_PATH = '/avatar-placeholder.svg';

/** Path to logo/wordmark in public/ */
export const LOGO_PATH = '/logo-placeholder.svg';

// ============================================================
// Social & Contact Links
// Set to null or remove entries you don't use
// ============================================================
export interface SocialLink {
  label: string;
  url: string;
  icon: string; // astro-icon name (e.g. "carbon:logo-linkedin")
}

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/PLACEHOLDER', icon: 'carbon:logo-linkedin' },
  { label: 'Twitter / X', url: 'https://x.com/PLACEHOLDER', icon: 'carbon:logo-x' },
  { label: 'GitHub', url: 'https://github.com/PLACEHOLDER', icon: 'carbon:logo-github' },
  { label: 'Email', url: 'mailto:hello@mishal.one', icon: 'carbon:email' },
];

// ============================================================
// Linktree Items — Main content of the page
// Each link gets a card on the page
// ============================================================
export interface LinkItem {
  title: string;
  description?: string;
  url: string;
  icon?: string;
  badge?: string; // e.g. "New", "Latest"
}

export const LINK_ITEMS: LinkItem[] = [
  {
    title: 'Writing',
    description: 'Thought leadership and essays',
    url: 'https://PLACEHOLDER.com/blog',
    icon: 'carbon:pen',
  },
  {
    title: 'Projects',
    description: 'Things I\'m building',
    url: 'https://PLACEHOLDER.com/projects',
    icon: 'carbon:code',
  },
  {
    title: 'Newsletter',
    description: 'Subscribe for updates',
    url: 'https://PLACEHOLDER.com/newsletter',
    icon: 'carbon:email-new',
    badge: 'Subscribe',
  },
  {
    title: 'Speaking',
    description: 'Talks and presentations',
    url: 'https://PLACEHOLDER.com/speaking',
    icon: 'carbon:microphone',
  },
  {
    title: 'Resume / CV',
    description: 'Professional background',
    url: 'https://PLACEHOLDER.com/cv',
    icon: 'carbon:document',
  },
];

// ============================================================
// Port Configuration
// ============================================================
const PORT_DEV = parseInt(process.env.PORT_DEV || '4322', 10);

export const SERVER = {
  port: PORT_DEV,
  host: true,
};
