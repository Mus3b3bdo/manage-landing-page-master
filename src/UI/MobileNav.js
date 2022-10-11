import React, { useState } from "react";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
export default function MobileNav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {open ? (
        <Button
          id="nav-button"
          variant="text"
          aria-controls={open ? "mobile-nav" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClose}
        >
          <img src={close} alt="close" />
        </Button>
      ) : (
        <Button
          id="nav-button"
          variant="text"
          aria-controls={open ? "mobile-nav" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img src={hamburger} alt="menu" />
        </Button>
      )}
      <Menu
        id="mobile-nav"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "nav-button",
        }}
      >
        <MenuItem
          sx={{ width: "100%", justifyContent: "center" }}
          onClick={handleClose}
        >
          Pricing
        </MenuItem>
        <MenuItem
          sx={{ width: "100%", justifyContent: "center" }}
          onClick={handleClose}
        >
          Product
        </MenuItem>
        <MenuItem
          sx={{ width: "100%", justifyContent: "center" }}
          onClick={handleClose}
        >
          About Us
        </MenuItem>
        <MenuItem
          sx={{ width: "100%", justifyContent: "center" }}
          onClick={handleClose}
        >
          Careers
        </MenuItem>
        <MenuItem
          sx={{ width: "100%", justifyContent: "center" }}
          onClick={handleClose}
        >
          Community
        </MenuItem>
      </Menu>
    </>
  );
}
