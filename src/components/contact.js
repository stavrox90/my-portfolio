import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { Container, Box, Grid, Typography } from "@material-ui/core";
import { EmailRounded, LinkedIn, GitHub } from "@material-ui/icons";
import CardContact from "./card-contact";

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

export const contacts = [
  {
    title: "Email",
    value: "inrafilus@gmail.com",
    url: "mailto:inrafilus@gmail.com",
    color: "#D44638",
    img: "gmail",
    icon: <EmailRounded />,
  },
  {
    title: "LinkedIn",
    value: "Filus Inra",
    url: "https://www.linkedin.com/in/inrafilus/",
    color: "#0077B5",
    img: "linkedin",
    icon: <LinkedIn />,
  },
  {
    title: "Github",
    value: "stavrox90",
    url: "https://github.com/stavrox90",
    color: "#999999",
    img: "github",
    icon: <GitHub />,
  },
  //   {
  //     title: "Twitter",
  //     value: "@nyxstvrx",
  //     url: "https://twitter.com/nyxstvrx",
  //     color: "#1DA1F2",
  //     img: "twitter",
  //     icon: <Twitter />,
  //   },
  //   {
  //     title: "Soundcloud",
  //     value: "Z'yev",
  //     url: "https://soundcloud.com/stvrx90",
  //     color: "#e87109",
  //     img: "soundcloud",
  //     icon: <Cloud />,
  //   },
];

const Contact = ({ onClick }) => {
  return (
    <>
      <ParallaxLayer
        offset={3}
        speed={-0}
        onClick={onClick}
        style={style.container}
      >
        <Container maxWidth="md">
          <Box component="span" style={style.text}>
            <Typography variant="h2">How to contact me?</Typography>
            <Typography variant="h4">I can be contacted via..</Typography>
            <Typography variant="subtitle1">
              Apparently not much options but I'd be glad to hear from you!
            </Typography>
          </Box>
          <Grid container spacing={3} style={style.box}>
            {contacts.map((contact, id) => (
              <Grid item key={id} xs={12} sm={4}>
                <CardContact {...contact} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </ParallaxLayer>
    </>
  );
};

export default Contact;
