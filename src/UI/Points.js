import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AdvantagesList from "../AdvantagesList";

export default function Points() {
  return (
    <Grid
      container
      justifyContent={{ md: "space-between", xs: "center" }}
      alignItems={{ md: "flex-start", xs: "stretch" }}
      wrap="wrap"
      sx={{
        padding: { md: "50px 100px", xs: "10px" },
      }}
    >
      <Grid item container flexDirection="column" gap={4} xs={12} md={6}>
        <Typography
          variant="h4"
          color="secondary.main"
          maxWidth="20ch"
          textAlign={{ md: "left", xs: "center" }}
        >
          What's different about Manage?
        </Typography>
        <Typography
          variant="body1"
          color="secondary.light"
          maxWidth="34ch"
          textAlign={{ md: "justify", xs: "center" }}
        >
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </Typography>
      </Grid>
      <Grid item md={6} xs={12}>
        <AdvantagesList />
      </Grid>
    </Grid>
  );
}
