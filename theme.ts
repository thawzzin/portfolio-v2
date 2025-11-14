import { createTheme, rem } from "@mantine/core";

export const theme = createTheme({
  breakpoints: {
    xs: "0em",
    sm: "30em",
    md: "48em",
    lg: "64em",
    xl: "74em",
    xxl: "90em",
  },
  fontSizes: {
    xs: rem(12),
    sm: rem(14),
    md: rem(16),
    lg: rem(18),
    xl: rem(24),
    xxl: rem(32),
    xxxl: rem(40),
  },
  headings: {
    sizes: {
      h1: { fontSize: rem(50) },
      h2: { fontSize: rem(32) },
      h3: { fontSize: rem(24) },
      h4: { fontSize: rem(20) },
      h5: { fontSize: rem(18) },
      h6: { fontSize: rem(16) },
    },
  },
  defaultRadius: "md",
  primaryColor: "white",
  colors: {
    white: [
      "#ffffff",
      "#f0f0f0",
      "#e0e0e0",
      "#d0d0d0",
      "#D1D1C7",
      "#c0c0c0",
      "#b0b0b0",
      "#a0a0a0",
      "#A29E9A",
      "#909090",
      "#808080",
    ],
    dark: [
      "#080807",
      "#0a0a0a",
      "#0c0c0c",
      "#0e0e0e",
      "#1F1F1F",
      "#121212",
      "#141414",
      "#161616",
      "#181818",
      "#14213d",
    ],
    blue: [
      "#0d1526",
      "#14213d",
      "#28427b",
      "#3f51b5",
      "#5c6bc0",
      "#7986cb",
      "#9fa8da",
      "#c5cae9",
      "#e8eaf6",
      "#f3f4f6",
    ],
  },
  components: {
    Text: {
      defaultProps: {
        c: "white.8",
        // fz: "lg",
      },
    },
    Title: {
      defaultProps: {
        c: "white.4",
      },
    },
    Button: {
      defaultProps: {
        color: "white.4",
      },
    },
  },
});
