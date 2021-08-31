import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Box, Container, Grid, Typography } from "@material-ui/core";

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

const Intro = ({ onClick }) => {
  return (
    <>
      {/* intro */}
      <ParallaxLayer
        offset={0}
        speed={0.1}
        onClick={onClick}
        className={style.container}
      >
        <Container maxWidth="sm">
          <Box component="span" style={style.text}>
            <Typography variant="h2">Hi, I'm Filus Inra.</Typography>
            <Typography variant="h4">Welcome to my portfolio</Typography>
            <Typography variant="subtitle1">
              Click to scroll to the next page
            </Typography>
            <Typography variant="subtitle1">
              ..or perhaps just traditionally scroll down using mouse scroll
            </Typography>
          </Box>
        </Container>
      </ParallaxLayer>
    </>
  );
};

export default Intro;
