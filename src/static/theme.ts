import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#F7F7F7",
    },
  },
});

theme.typography.h1 = {
  fontSize: "3rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
  },
};
theme.typography.h2 = {
  fontSize: "2.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.4rem",
  },
};
theme.typography.h3 = {
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
  },
};
theme.typography.h4 = {
  fontSize: "1.6rem",
  fontWeight: 400,
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
};
export default theme;
