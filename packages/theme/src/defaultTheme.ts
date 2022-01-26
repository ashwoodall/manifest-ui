import { Theme } from './types';

const breakpoints = ['37.5rem', '64rem', '80rem', '120rem'];

export const defaultTheme: Theme = {
  breakpoints,
  borderWidths: {
    small: 1,
    medium: 2,
    large: 3,
  },
  colors: {
    background: '#FFFFFF',
    brand: {
      50: '#ECF4FE',
      100: '#C9E1FB',
      200: '#95C5F8',
      300: '#62A9F4',
      400: '#308DF1',
      500: '#0072EC',
      600: '#005CBE',
      700: '#00458E',
      800: '#003772',
      900: '#002956',
    },
    black: '#000000',
    neutral: {
      50: '#FAFAFB',
      100: '#F4F4F5',
      200: '#D5D7D9',
      300: '#B8BBBF',
      400: '#9DA1A6',
      500: '#80858C',
      600: '#646B72',
      700: '#49515A',
      800: '#2A343F',
      900: '#0A1521',
    },
    text: '#0A1521',
    white: '#FFFFFF',
  },
  direction: 'ltr',
  fonts: {
    body: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  fontSizes: {
    1: '2rem',
    2: '1.75rem',
    3: '1.5rem',
    4: '1.25rem',
    5: '1.125rem',
    6: '1rem',
    7: '0.875rem',
    8: '0.75rem',
    9: '0.625rem',
  },
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  letterSpacings: {
    tight: '-0.02em',
    normal: '-0.01em',
    wide: '0.04em',
  },
  lineHeights: {
    1: '2.5rem',
    2: '2rem',
    3: '1.5rem',
    4: '1rem',
    5: '0.875rem',
  },
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[1]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[3]})`,
    'x-large': `@media screen and (min-width: ${breakpoints[4]})`,
  },
  mode: 'light',
  radii: {
    none: 0,
    medium: 2,
    full: 9999,
  },
  shadows: {},
  sizes: {},
  space: ['0', '0.25rem', '0.5rem', '0.75rem', '1rem', '1.25rem', '2.5rem'],
  transitions: {
    duration: {
      base: '200ms',
      fast: '125ms',
      slow: '300ms',
    },
    property: {
      common: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform',
      colors: 'background-color, border-color, color, fill, stroke',
    },
    timingFunction: {
      ease: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
    },
  },
  zIndices: {},
};