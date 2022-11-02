import React from "react";
import TestmoPaper from "./TestmoPaper";
export default function Testimonial({ dataTestimonial }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      {dataTestimonial.map((item) => {
        return <TestmoPaper item={item} />;
      })}
    </div>
  );
}
