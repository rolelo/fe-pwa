import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff",
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
  fontSize: "1.5rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
};
theme.typography.h3 = {
  fontSize: "1.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1rem",
  },
};
export default theme;
