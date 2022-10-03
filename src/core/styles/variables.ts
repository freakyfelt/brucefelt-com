/* eslint-disable max-len */

import { lighten } from 'polished'

export const colors = {
  brand: '#0f4c81',
  ui: {
    bright: '#e0d6eb',
    light: '#f5f3f7',
    whisper: '#fbfafc'
  },
  text: {
    light: lighten(0.2, '#2b3542'),
    base: '#2b3542'
  },
  green: {
    light: '#b9e3c6'
  },
  blue: {
    base: '#0f4c81'
  },
  gray: {
    calm: '#1b262c',
    dark: 'rgba(0, 0, 0, 0.54)'
  },
  white: '#ffffff',
  black: '#000000'
}

export const fonts = {
  sansSerif:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',
  serif: 'Georgia, "Times New Roman", Times, serif',
  monospace: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'
}

export const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
}

export const widths = {
  md: 720,
  lg: 960,
  xl: 1140
}

export const dimensions = {
  fontSize: {
    regular: 16,
    large: 18
  },
  headingSizes: {
    h1: 2.441,
    h2: 1.953,
    h3: 1.563,
    h4: 1.25
  },
  lineHeight: {
    regular: 1.45,
    heading: 1.2
  },
  containerPadding: 1.5,
  padding: {
    smY: 0.25,
    smX: 0.5,
    mdY: 0.375,
    mdX: 0.75,
    lgY: 0.5,
    lgX: 1.0
  },
  margin: {
    mdY: 1.2
  }
}

export const heights = {
  header: 60,
  footer: 40
}
