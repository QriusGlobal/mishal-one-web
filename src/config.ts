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
  { label: 'X', url: 'https://x.com/mishalqrius', icon: 'carbon:logo-x' },
  { label: 'GitHub', url: 'https://github.com/mishaal79', icon: 'carbon:logo-github' },
  { label: 'Qrius GitHub', url: 'https://github.com/QriusGlobal', icon: 'carbon:logo-github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/PLACEHOLDER', icon: 'carbon:logo-linkedin' },
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
    description: 'Essays and thinking out loud',
    url: '/blog',
    icon: 'lucide:pen-line',
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
