import React from "react";
import { Box, Chip, Grid, Typography } from "@mui/material";
export default function ADL({ data }) {
  return (
    <>
      {data.map((item) => {
        return (
          <Grid container key={item.id}>
            <Box component="div">
              <Chip
                color="primary"
                label={item.id}
                sx={{
                  padding: "10px 15px",
                  marginRight: "30px",
                }}
              />
              <Typography
                variant="h6"
                color="secondary.main"
                textAlign="left"
                display="inline-block"
                sx={{
                  borderRadius: "1rem 0 0 1rem",
                  padding: 0,
                  lineHeight: 1,
                  fontWeight: "500",
                  fontSize: "1.1rem",
                }}
              >
                {item.title}
              </Typography>
            </Box>
            <Typography
              textAlign="left"
              variant="body1"
              color="secondary.light"
              sx={{ margin: "20px 0", paddingLeft: "90px" }}
            >
              {item.body}
            </Typography>
          </Grid>
        );
      })}
    </>
  );
}
