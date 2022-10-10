import React, { useState } from "react";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
export default function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {open ? (
        <>
          <img src={close} alt="close" onClick={() => setOpen(false)} />
          <Menu
            id="mobile-nav"
            keepMounted
            open={open}
            onClose={() => setOpen(false)}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            sx={{
              position: "absolute",
              display: "flex",
              //   flexDirection: "column",
              //   justifyContent: "center",
            }}
          >
            <MenuItem onClick={() => setOpen(false)}>Pricing</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Product</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>About Us</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Careers</MenuItem>
            <MenuItem onClick={() => setOpen(false)}>Community</MenuItem>
          </Menu>
        </>
      ) : (
        <img src={hamburger} alt="menu" onClick={() => setOpen(true)} />
      )}
    </>
  );
}
