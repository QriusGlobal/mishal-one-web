/** @type {import('tailwindcss').Config} */

const tokens = require('./src/tokens/design-tokens.json');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  darkMode: 'media',
  theme: {
    screens: tokens.breakpoints,
    container: {
      center: true,
      padding: tokens.spacing[2],
    },
    extend: {
      colors: {
        // MD3 System Colors (CSS variable references)
        'md-primary': 'var(--md-sys-color-primary)',
        'md-on-primary': 'var(--md-sys-color-on-primary)',
        'md-primary-container': 'var(--md-sys-color-primary-container)',
        'md-on-primary-container': 'var(--md-sys-color-on-primary-container)',
        'md-primary-mid': 'var(--md-sys-color-primary-mid)',

        'md-secondary': 'var(--md-sys-color-secondary)',
        'md-on-secondary': 'var(--md-sys-color-on-secondary)',
        'md-secondary-container': 'var(--md-sys-color-secondary-container)',
        'md-on-secondary-container': 'var(--md-sys-color-on-secondary-container)',

        'md-tertiary': 'var(--md-sys-color-tertiary)',
        'md-on-tertiary': 'var(--md-sys-color-on-tertiary)',
        'md-tertiary-container': 'var(--md-sys-color-tertiary-container)',
        'md-on-tertiary-container': 'var(--md-sys-color-on-tertiary-container)',

        'md-error': 'var(--md-sys-color-error)',
        'md-on-error': 'var(--md-sys-color-on-error)',

        'md-background': 'var(--md-sys-color-background)',
        'md-on-background': 'var(--md-sys-color-on-background)',

        'md-surface': 'var(--md-sys-color-surface)',
        'md-on-surface': 'var(--md-sys-color-on-surface)',
        'md-surface-variant': 'var(--md-sys-color-surface-variant)',
        'md-on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'md-surface-dark': 'var(--md-sys-color-surface-dark)',
        'md-on-surface-dark': 'var(--md-sys-color-on-surface-dark)',

        'md-outline': 'var(--md-sys-color-outline)',
        'md-outline-variant': 'var(--md-sys-color-outline-variant)',

        'md-surface-container': 'var(--md-sys-color-surface-container)',
        'md-surface-container-low': 'var(--md-sys-color-surface-container-low)',
        'md-surface-container-high': 'var(--md-sys-color-surface-container-high)',
        'md-surface-container-highest': 'var(--md-sys-color-surface-container-highest)',

        // Legacy token compat
        primary: { DEFAULT: tokens.colors.primary[500], ...tokens.colors.primary },
        gray: { DEFAULT: tokens.colors.gray[500], ...tokens.colors.gray },
      },
      spacing: tokens.spacing,
      fontFamily: tokens.typography.fontFamily,
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      borderRadius: tokens.radius,
      boxShadow: tokens.shadows,
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
