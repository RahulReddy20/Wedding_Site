import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        container: '1200px',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      colors: {
        'page-bg': 'var(--page-bg)',
        'card-bg': 'var(--card-bg)',
        primary: 'var(--primary)',
        accent: 'var(--accent)',
        'footer-bg': 'var(--footer-bg)',
        muted: 'var(--muted)',
        text: 'var(--text)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
