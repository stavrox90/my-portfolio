import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Container, Typography } from "@material-ui/core";

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
};

const About = ({ onClick }) => {
  return (
    <>
      {/* about myself */}
      <ParallaxLayer
        offset={1}
        speed={0.3}
        onClick={onClick}
        className={style.container}
      >
        <Container fixed>
          <Box component="span" style={style.text}>
            <Typography variant="h2">About myself.</Typography>
            <Typography variant="h4">I'm a self-taught Programmer</Typography>
            <Typography variant="subtitle1">
              I started my coding journey since 2016 but only started my coding
              career in 2019.
            </Typography>
            <Typography variant="subtitle1">
              Recently started experimenting with animations using Three.js,
              React Spring animations thingy.
            </Typography>
          </Box>
        </Container>
      </ParallaxLayer>
    </>
  );
};

export default About;
