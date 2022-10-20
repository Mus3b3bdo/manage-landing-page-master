import { Grid, Button, useTheme, useMediaQuery } from "@mui/material";
import React from "react";
import logo from "../images/logo.svg";
import MobileNav from "./MobileNav";
import Navigation from "./Navigation";
export default function Header() {
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const menuItems = [
    { id: 1, title: "Pricing" },
    { id: 2, title: "Product" },
    { id: 3, title: "About us" },
    { id: 4, title: "Careers" },
    { id: 5, title: "Community" },
  ];
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
      <Grid item>
        {mobile ? (
          <MobileNav menuItems={menuItems} />
        ) : (
          <Navigation menuItems={menuItems} />
        )}
      </Grid>
      <Grid item display={{ xs: "none", md: "block" }}>
        <Button>get started</Button>
      </Grid>
    </Grid>
  );
}
