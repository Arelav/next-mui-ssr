"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { green, deepPurple } from "@mui/material/colors";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: deepPurple[500],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: "25px",
          padding: "20px 40px",
        },
        contained: {
          borderRadius: "25px",
          padding: "20px 40px",
        },
        text: {
          fontWeight: "500",
        },
      },
    },
  },
});

export default theme;
