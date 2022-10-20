import React from "react";
import "../App.css";
export default function Navigation({ menuItems }) {
  return (
    <div className="navigation">
      <ul>
        {menuItems.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
