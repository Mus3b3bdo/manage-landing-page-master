import { useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import ADL from "./ADL";
import ADLMobile from "./ADLMobile";

export default function AdvantagesList() {
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const data = [
    {
      id: 1,
      title: "Track company-wide progress",
      body: "See how your day-to-day tasks fit into the wider vision.Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      id: 2,
      title: "Advanced built-in reports",
      body: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      id: 3,
      title: "Everything you need in one place",
      body: "Stop jumping from one service to another to commnicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];
  return <div>{mobile ? <ADLMobile data={data} /> : <ADL data={data} />}</div>;
}
