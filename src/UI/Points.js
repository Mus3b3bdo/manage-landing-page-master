import React from "react";
import Grid from "@mui/material/Grid";
export default function Points() {
  return (
    <Grid
      container
      spacing={1}
      justifyContent="space between"
      alignItems="center"
      wrap="wrap"
    >
      <Grid item xs={12} md={6}>
        Heading
      </Grid>
      <Grid item xs={12} md={6}>
        points
      </Grid>
    </Grid>
  );
}
