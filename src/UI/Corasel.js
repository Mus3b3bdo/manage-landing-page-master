import React from "react";
import {
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";
import anisha from "../images/avatar-anisha.png";
import ali from "../images/avatar-ali.png";
import richard from "../images/avatar-richard.png";
import shanai from "../images/avatar-shanai.png";
import Testimonial from "./Testimonial";
import TestimonialMobile from "./TestimonialMobile";
export default function Corasel() {
  const mobile = useMediaQuery(useTheme().breakpoints.down("sm"));
  const dataTestimonial = [
    {
      id: 1,
      name: "Anisha Li",
      image: anisha,
      description:
        "“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: 2,
      name: "Ali Bravo",
      image: ali,
      description:
        "“We have been able to cancel so many other subscriptions since using  Manage. There is no more cross-channel confusion and everyone is much  more focused.”",
    },
    {
      id: 3,
      name: "Richard Watts",
      image: richard,
      description:
        "“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      id: 4,
      name: "Shanai Gough",
      image: shanai,
      description:
        "“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      gap={3}
      sx={{ margin: "30px 0", padding: { sx: "0 10px" } }}
    >
      <Typography
        variant="h4"
        color="secondary.main"
        maxWidth="20ch"
        sx={{ margin: "60px auto" }}
      >
        What they've said
      </Typography>
      {mobile ? (
        <TestimonialMobile dataTestimonial={dataTestimonial} />
      ) : (
        <Testimonial dataTestimonial={dataTestimonial} />
      )}
      <Button>Get started</Button>
    </Grid>
  );
}
