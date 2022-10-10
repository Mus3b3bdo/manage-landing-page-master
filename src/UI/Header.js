import { Grid, Button } from "@mui/material";
import React from "react";
import logo from "../images/logo.svg";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
export default function Header() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        minHeight: "110px",
        outline: "1px solid red",
        padding: { md: "0 120px", xs: "0 20px" },
      }}
    >
      <Grid item>
        <img src={logo} alt="logo" />
      </Grid>
      <Grid item md={8} display={{ md: "block", xs: "none" }}>
        <Navigation />
      </Grid>
      <Grid item display={{ md: "none", xs: "block" }}>
        <MobileNav />
      </Grid>
      <Grid item display={{ xs: "none", md: "block" }}>
        <Button>get started</Button>
      </Grid>
    </Grid>
  );
}
