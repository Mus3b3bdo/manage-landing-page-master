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
        <>
          <Button
            variant="text"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={() => handleClose}
          >
            <img src={close} alt="close" />
          </Button>
          <Menu
            id="mobile-nav"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Pricing</MenuItem>
            <MenuItem onClick={handleClose}>Product</MenuItem>
            <MenuItem onClick={handleClose}>About Us</MenuItem>
            <MenuItem onClick={handleClose}>Careers</MenuItem>
            <MenuItem onClick={handleClose}>Community</MenuItem>
          </Menu>
        </>
      ) : (
        <img src={hamburger} alt="menu" onClick={handleClick} />
      )}
    </>
  );
}
