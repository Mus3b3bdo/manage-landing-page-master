import { Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../images/logo.svg";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
export default function Header() {
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        minHeight: "110px",
        padding: mobile ? "0 20px" : "0 120px",
      }}
    >
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item>{mobile ? <MobileNav /> : <Navigation />}</Grid>
      <Grid item display={{ xs: "none", md: "block" }}>
        <Button>get started</Button>
      </Grid>
    </Grid>
  );
}
