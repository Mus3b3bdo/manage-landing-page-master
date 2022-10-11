import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  YouTube,
} from "@mui/icons-material";

export default function SocialIcons() {
  return (
    <ButtonGroup variant="text" aria-label="Social-icons">
      <Facebook
        sx={{
          cursor: "pointer",
          color: "info.main",
          margin: "0 5px",
          "&:hover": { color: "primary.main" },
        }}
      />
      <YouTube
        sx={{
          cursor: "pointer",
          color: "info.main",
          margin: "0 5px",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Twitter
        sx={{
          cursor: "pointer",
          color: "info.main",
          margin: "0 5px",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Pinterest
        sx={{
          cursor: "pointer",
          color: "info.main",
          margin: "0 5px",
          "&:hover": { color: "primary.main" },
        }}
      />
      <Instagram
        sx={{
          cursor: "pointer",
          color: "info.main",
          margin: "0 5px",
          "&:hover": { color: "primary.main" },
        }}
      />
    </ButtonGroup>
  );
}
