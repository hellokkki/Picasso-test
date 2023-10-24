import { createTheme } from "@mui/material";

export const PikassoTheme = createTheme({
    palette: {
      primary: {
        main: '#000000', // dark
        dark: '#222222',
        light: '#444444',
      },
      secondary: {
        main: '#0000FF', // blue
        dark: '#0000CC',
        light: '#0000EE',
      },
      error: {
        main: '#FF0000', // red
        dark: '#CC0000',
        light: '#EE0000',
      },
    },
    typography: {
      fontFamily: 'Roboto',
      fontSize: 16, // base font size
      h1: {
        fontSize: 36,
      },
      h2: {
        fontSize: 32,
      },
      h3: {
        fontSize: 28,
      },
      h4: {
        fontSize: 24,
      },
      h5: {
        fontSize: 20,
      },
      h6: {
        fontSize: 16,
      }
    },
    spacing: 8, // base spacing unit
    breakpoints: {
      values: {
        xs: 0, // mobile
        sm: 600, // tablet
        md: 900, // laptop
        lg: 1200, // desktop
        xl: 1536, // large desktop
      },
    },
  })