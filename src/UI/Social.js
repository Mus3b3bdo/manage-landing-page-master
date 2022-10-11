import React from "react";
import Grid from "@mui/material/Grid";
import logo from "../images/logo.svg";
import SocialIcons from "./SocialIcons";
export default function Social() {
  return (
    <Grid
      container
      direction={{ md: "column-reverse", xs: "column" }}
      gap={{ md: "50px", xs: "10px" }}
    >
      <Grid item>
        <SocialIcons />
      </Grid>
      <Grid item>
        <img src={logo} alt="logo" style={{ color: "white" }} />
      </Grid>
    </Grid>
  );
}
