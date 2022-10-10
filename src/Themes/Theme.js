import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
  palette: {
    primary: {
      main: "hsl(12, 88%, 59%)", //Bright Red
      light: "hsl(13, 100%, 96%)", //Very Pale Red
    },
    secondary: {
      main: "hsl(228, 39%, 23%)", //Dark Blue
      dark: "hsl(233, 12%, 13%)", //Very Dark Blue
      light: "hsl(227, 12%, 61%)", //Dark Grayish Blue
    },
    info: {
      main: "hsl(0, 0%, 98%)", //Vary Light Gray
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          borderRadius: "2rem",
          textTransform: "capitalize",
          color: "info.main",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        },
      },
    },
  },
});
