import { Theme, ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface PikassoTheme extends Theme {
        palette: {
            primary: {
              main: string;
              dark: string;
              light: string;
            };
            secondary: {
              main: string;
              dark: string;
              light: string;
            };
            error: {
              main: string;
              dark: string;
              light: string;
            };
          };
          typography: {
            fontFamily: string[];
            fontSize: number;
            h1: {
              fontSize: number;
            };
            h2: {
              fontSize: number;
            };
            h3: {
              fontSize: number;
            };
            h4: {
              fontSize: number;
            };
            h5: {
              fontSize: number;
            };
            h6: {
              fontSize: number;
            };
          };
          spacing: number;
          breakpoints: {
            values: {
              xs: number;
              sm: number;
              md: number;
              lg: number;
              xl: number;
            };
          };
        };
    }
