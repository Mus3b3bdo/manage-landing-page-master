import React from "react";
import Grid from "@mui/material/Grid";
import image from "../images/illustration-intro.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Banner() {
  return (
    <Grid
      container
      spacing={1}
      justifyContent={{ md: "space-between", xs: "center" }}
      alignItems="center"
      wrap="wrap"
      direction="row-reverse"
      p={{ md: "0 100px", xs: "0 10px" }}
    >
      <Grid item xs={12} md={5}>
        <img
          src={image}
          alt="illustration"
          style={{ height: "380px", minHeight: "180px", maxWidth: "100%" }}
        />
      </Grid>
      <Grid item container direction="column" xs={11} md={6} gap={2}>
        <Typography
          variant="h1"
          color="secondary.main"
          sx={{
            fontWeight: "700",
            fontSize: { md: "3rem", xs: "2rem" },
            textAlign: { md: "left", xs: "center" },
            maxWidth: "15ch",
          }}
        >
          Bring everyone together to build better products.
        </Typography>
        <Typography
          variant="body1"
          color="secondary.light"
          sx={{ fontWeight: "400", textAlign: "left", maxWidth: "36ch" }}
        >
          Manage makes it simple tor sottwore teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </Typography>
        <Button
          sx={{
            alignSelf: { xs: "center", md: "flex-start" },
          }}
        >
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
