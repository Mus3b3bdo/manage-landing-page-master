import { Grid } from "@mui/material";
import React from "react";
import MailBox from "../MailBox";
import FooterNav from "./FooterNav";
import Social from "./Social";

export default function FooterInfo() {
  return (
    <Grid
      container
      direction={{ md: "row-reverse", xs: "column" }}
      justifyContent={{ md: "space-between", xs: "center" }}
      alignItems="center"
      sx={{
        bgcolor: "secondary.main",
        minHeight: "180px",
        padding: { md: "0 100px", xs: "10px" },
      }}
    >
      <Grid item>
        <MailBox />
      </Grid>
      <Grid item>
        <FooterNav />
      </Grid>
      <Grid item>
        <Social />
      </Grid>
    </Grid>
  );
}
