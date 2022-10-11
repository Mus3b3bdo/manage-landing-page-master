import React from "react";
import "../App.css";
export default function FooterNav() {
  return (
    <nav
      id="footer-nav"
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "15px 0",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "50px",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <li>Careers</li>
          <li>Comunity</li>
          <li>Privacy Policy</li>
        </div>
      </ul>
    </nav>
  );
}
