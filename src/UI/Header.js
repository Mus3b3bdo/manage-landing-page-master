import { Grid } from "@mui/material";
import React from "react";

export default function Header() {
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={6} md={4}>
        logo
      </Grid>
      <Grid item xs={6} md={4}>
        navigation
      </Grid>
      <Grid item xs={6} md={4}>
        button
      </Grid>
    </Grid>
  );
}
