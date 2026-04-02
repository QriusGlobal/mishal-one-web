/**
 * Version metadata — single source of truth for build versioning.
 * Reads from package.json at build time. Injected into HTML <meta> tags by Layout.astro.
 */
// @ts-expect-error — Astro resolves JSON imports at build time
import pkg from '../package.json';

/** Semantic version from package.json (e.g. "0.1.0") */
export const VERSION: string = pkg.version;

/** ISO 8601 timestamp of when the build was executed */
export const BUILD_TIMESTAMP: string = new Date().toISOString();
