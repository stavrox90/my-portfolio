import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import CardProject from "./card-project";
import portfolio from "../images/portfolio.png";
import modp from "../images/modp.png";
import firelog from "../images/firelog.png";
import atmosph from "../images/atmosph.png";

const style = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  box: {
    paddingTop: "10px"
  }
};

const projects = [
  {
    title: "Portfolio - Filus Inra",
    desc: "My personal online portfolio",
    url: window.location.href,
    img: portfolio,
  },
  {
    title: "Malaysia Open Data Portal",
    desc: "The first working experience I had - Malaysia Open Data Portal for public sector",
    url: "https://www.data.gov.my/",
    img: modp,
  },
  {
    title: "Firelog",
    desc: "Firebase Login - hence Firelog. Just me experimenting with Firebase login",
    url: "https://firelog.netlify.com/",
    img: firelog,
  },
  {
    title: "Atmosph",
    desc: "Weather Finder app I experimented using OpenWeather API",
    url: "https://atmosph.netlify.com/",
    img: atmosph,
  },
];

const Project = ({ onClick }) => {
  return (
    <div>
      <ParallaxLayer
        offset={2}
        speed={0.6}
        onClick={onClick}
        className={style.container}
      >
        <Container maxWidth="lg">
          <Box component="span" style={style.text}>
            <Typography variant="h2">My Projects</Typography>
            <Typography variant="subtitle1">
              Here's what I've build so far.. y-yeap, gotta hustle up
            </Typography>
          </Box>
          <Grid container spacing={3} style={style.box}>
            {projects.map((project, id) => (
              <Grid item key={id} xs={12} sm={4}>
                <CardProject {...project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </ParallaxLayer>
    </div>
  );
};

export default Project;
