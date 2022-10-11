import { Grid } from "@mui/material";
import React from "react";
import MailBox from "../MailBox";
import FooterNav from "./FooterNav";
import Social from "./Social";

export default function FooterInfo() {
  return (
    <Grid
      container
      direction="row-reverse"
      justifyContent="space-around"
      alignItems="center"
      sx={{
        outline: "1px solid green",
        bgcolor: "secondary.main",
        minHeight: "180px",
        padding: { md: "30px 0", xs: "10px 0" },
      }}
    >
      <Grid item xs={12} md={4}>
        <MailBox />
      </Grid>
      <Grid item xs={12} md={4}>
        <FooterNav />
      </Grid>
      <Grid item xs={12} md={4}>
        <Social />
      </Grid>
    </Grid>
  );
}
