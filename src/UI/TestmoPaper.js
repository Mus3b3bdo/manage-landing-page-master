import React from "react";
import { Avatar, Paper, Typography } from "@mui/material";
export default function TestmoPaper({ item }) {
  return (
    <Paper
      key={item.id}
      elevation={0}
      variant="elevation"
      square
      sx={{
        position: "relative",
        backgroundColor: "info.main",
        padding: "50px 30px 30px",
        margin: { xs: "0 10px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Avatar
        src={item.image}
        alt={item.name}
        sx={{
          position: "absolute",
          top: "-15%",
          width: "60px",
          height: "60px",
        }}
      />
      <Typography variant="h6" color="secondary.main">
        {item.name}
      </Typography>
      <Typography
        variant="body1"
        color="secondary.light"
        textAlign="center"
        maxWidth="50ch"
      >
        {item.description}
      </Typography>
    </Paper>
  );
}
