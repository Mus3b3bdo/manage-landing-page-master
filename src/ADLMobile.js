import { Box, Chip, Typography } from "@mui/material";
import React from "react";

export default function ADLMobile({ data }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <Box
            component="div"
            key={item.id}
            sx={{ width: "100%", paddingRight: 0, margin: "2rem 0 " }}
          >
            <Typography
              variant="h3"
              color="secondary.main"
              bgcolor="primary.light"
              textAlign="left"
              display="inline-block"
              sx={{
                width: "100%",
                borderRadius: "1rem 0 0 1rem",
                padding: 0,
                lineHeight: 1,
                fontWeight: "500",
                fontSize: "1.1rem",
              }}
            >
              <Chip
                color="primary"
                label={item.id}
                sx={{
                  padding: "10px 15px",
                  marginRight: "5px",
                }}
              />
              {item.title}
            </Typography>
            <Typography
              textAlign="left"
              variant="body1"
              color="secondary.light"
              sx={{ margin: "15px 0" }}
            >
              {item.body}
            </Typography>
          </Box>
        );
      })}
    </div>
  );
}
