import React, { useEffect, useState } from "react";
import TestmoPaper from "./TestmoPaper";
import { MobileStepper } from "@mui/material";
export default function TestimonialMobile({ dataTestimonial }) {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveStep((prevActiveStep) => {
        if (prevActiveStep >= dataTestimonial.length - 1) prevActiveStep = 0;
        else prevActiveStep = prevActiveStep + 1;
        return prevActiveStep;
      });
    }, 3000);
  }, [dataTestimonial.length, activeStep]);

  console.log(activeStep);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "90%",
      }}
    >
      <TestmoPaper item={dataTestimonial[activeStep]} />

      <MobileStepper
        steps={dataTestimonial.length}
        position="static"
        activeStep={activeStep}
      />
    </div>
  );
}
