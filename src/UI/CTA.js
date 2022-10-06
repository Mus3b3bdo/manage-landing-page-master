import React from "react";
import { Grid } from "@mui/material";

export default function CTA() {
  return (
    <Grid
      container
      spacing={0}
      justifyContent="space-around"
      alignItems="center"
      sx={{ bgcolor: "primary.main", minHeight: "165px" }}
    >
      <Grid item xs={12} md={6}>
        message
      </Grid>
      <Grid item xs={12} md={6}>
        button
      </Grid>
    </Grid>
  );
}
