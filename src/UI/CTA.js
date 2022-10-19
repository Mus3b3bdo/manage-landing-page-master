import React from "react";
import { Grid, Button, Typography } from "@mui/material";

export default function CTA() {
  return (
    <Grid
      container
      spacing={0}
      justifyContent={{ md: "space-between", xs: "center" }}
      alignItems="center"
      sx={{
        bgcolor: "primary.main",
        minHeight: "165px",
        padding: { md: "0 100px", xs: "0 10px" },
      }}
    >
      <Grid item>
        <Typography
          variant="h4"
          color="info.main"
          sx={{
            fontWeight: 500,
            maxWidth: "20ch",
            textAlign: { md: "justify", xs: "center" },
          }}
        >
          Simplify how your team works today.
        </Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{
            bgcolor: "info.main",
            color: "primary.main",
            ":hover": { bgcolor: "info.main" },
          }}
        >
          get started
        </Button>
      </Grid>
    </Grid>
  );
}
