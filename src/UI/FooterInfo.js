import { Grid } from "@mui/material";
import React from "react";

export default function FooterInfo() {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="space-around"
      alignItems="center"
      sx={{ bgcolor: "secondary.main", minHeight: "180px" }}
    >
      <Grid item xs={12} md={4}>
        mailbox
      </Grid>
      <Grid item xs={12} md={4}>
        navigation
      </Grid>
      <Grid item xs={12} md={4}>
        social
      </Grid>
    </Grid>
  );
}
