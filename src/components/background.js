import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import imgStars from "../images/stars.svg";
import { Box, Typography } from "@material-ui/core";

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
    paddingTop: "10px",
  },
  footer: {
    position: "fixed",
    bottom: 0,
    color: "white",
  },
};

const Svg = ({ src, alt, width, left, top }) => (
  <img
    src={src}
    alt={alt}
    style={{
      position: "absolute",
      display: "block",
      width,
      left,
      top,
    }}
  />
);

const MyBackground = () => {
  return (
    <>
      {/* BACKGROUND */}
      <ParallaxLayer offset={0} speed={0.2} factor={5}>
        <div
          style={{
            background: `linear-gradient(to right, #20232f 50%, #0b0d11 100%)`,
            clipPath: `polygon(0% 0%, 29% 0, 100% 65%, 100% 100%, 0% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2} factor={5}>
        <div
          style={{
            background: `linear-gradient(to right, #0b0d11 50%, #000000 100%)`,
            clipPath: `polygon(30% 0, 100% 0, 100% 64%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.5} speed={-0.2} factor={2.2}>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(86,200,255,1) 0%, rgba(0,117,173,0.6277955271565495) 50%, rgba(32,43,47,0.6306897759103641) 95%)`,
            clipPath: `polygon(18% 33%, 100% 6%, 100% 100%, 0% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.2} speed={-0.5} factor={2.1}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(118,118,237,1) 0%, rgba(118,118,237,0.5965909090909092) 35%, rgba(32,35,47,1) 100%)`,
            clipPath: `polygon(16% 20%, 51% 15%, 99% 48%, 0 60%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1.8} speed={-0.2} factor={2}>
        <div
          style={{
            background: `linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)`,
            clipPath: `polygon(10% 25%, 90% 40%, 100% 100%, 0% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0.5} factor={2.4}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(118,220,237,1) 0%, rgba(118,198,237,0.5965909090909092) 29%, rgba(32,43,47,0.6306897759103641) 96%)`,
            clipPath: `polygon(0 52%, 80% 0%, 100% 100%, 71% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={-0.5} factor={2.4}>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(218,243,255,1) 0%, rgba(125,166,186,0.31818181818181823) 50%, rgba(83,144,166,0.6306897759103641) 95%)`,
            clipPath: `polygon(0 0, 0% 100%, 100% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      {/* SUN */}
      <ParallaxLayer offset={2.5} speed={-0.3} factor={1}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(255,239,134,0.6026785714285714) 0%, rgba(250,223,39,0.2413340336134454) 48%, rgba(255,245,145,0.4822303921568627) 100%)`,
            clipPath: `polygon(33% 4%, 96% 10%, 100% 61%, 81% 97%, 23% 89%, 0 55%, 8% 20%)`,
            position: ` absolute`,
            width: `40%`,
            height: `50%`,
            left: "2vw",
            top: "20%",
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2.2} speed={-0.3} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614633.svg"
          width="20vw"
          left="10%"
          top="60%"
        />
      </ParallaxLayer>
      {/* LAND & MOUNTAIN */}
      <ParallaxLayer offset={3} speed={-0.1} factor={1}>
        <div
          style={{
            background: `rgb(111,186,84)`,
            clipPath: `polygon(0 60%, 45% 17%, 100% 100%, 0% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `60vh`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={-0.1} factor={1}>
        <div
          style={{
            background: `linear-gradient(90deg, rgba(184,233,187,1) 0%, rgba(158,238,109,0.9460227272727273) 50%, rgba(152,222,67,0.6306897759103641) 95%)`,
            clipPath: `polygon(8% 79%, 81% 84%, 100% 100%, 0% 100%)`,
            position: ` absolute`,
            width: `170%`,
            height: `100%`,
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      {/* LIGHT GLARE */}
      <ParallaxLayer offset={3} speed={-0.4} factor={1}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.4822303921568627) 34%, rgba(243,208,246,0.41220238095238093) 48%, rgba(39,167,250,0.41220238095238093) 92%)`,
            clipPath: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
            position: ` absolute`,
            width: `2vw`,
            height: `2vw`,
            left: "30vw",
            top: "20vh",
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={-0.6} factor={1}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.4822303921568627) 34%, rgba(243,208,246,0.41220238095238093) 48%, rgba(39,167,250,0.41220238095238093) 92%)`,
            clipPath: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
            position: ` absolute`,
            width: `5vw`,
            height: `5vw`,
            left: "45vw",
            top: "30vh",
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={-0.8} factor={1}>
        <div
          style={{
            background: `radial-gradient(circle, rgba(255,255,255,0.4822303921568627) 34%, rgba(243,208,246,0.41220238095238093) 48%, rgba(39,167,250,0.41220238095238093) 92%)`,
            clipPath: `polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)`,
            position: ` absolute`,
            width: `10vw`,
            height: `10vw`,
            left: "65vw",
            top: "40vh",
            cursor: `pointer`,
          }}
        />
      </ParallaxLayer>

      {/* STARS */}
      <ParallaxLayer offset={0} speed={-0.1} factor={2}>
        <Svg
          src={imgStars}
          alt="stars"
          style={{ display: "block", width: "100%", backgroundSize: "cover" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2} factor={3}>
        <Svg
          src={imgStars}
          alt="stars"
          style={{ display: "block", width: "100%", backgroundSize: "cover" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={-0.5} factor={2}>
        <Svg
          src={imgStars}
          alt="stars"
          style={{ display: "block", width: "100%", backgroundSize: "cover" }}
        />
      </ParallaxLayer>

      {/* ROCKET */}
      <ParallaxLayer offset={0} speed={-0.7} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/639/639373.svg"
          alt="639373"
          width="25%"
          left="10vw"
          top="15vh"
        />
      </ParallaxLayer>
      {/* ASTRONAUTS */}
      <ParallaxLayer offset={0.1} speed={0.6} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/547/547420.svg"
          alt="547420"
          width="15%"
          left="20vw"
          top="60vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={0.2} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/926/926355.svg"
          alt="926355"
          width="10vw"
          left="70vw"
          top="10vh"
        />
      </ParallaxLayer>
      {/* SATELLITE */}
      <ParallaxLayer offset={1} speed={-0.5} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/997/997065.svg"
          alt="997065"
          width="15vw"
          left="70%"
          top="10%"
        />
      </ParallaxLayer>
      {/* EARTH */}
      <ParallaxLayer offset={1} speed={0} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614643.svg"
          alt="614643"
          width="25vw"
          left="10vw"
          top="70vh"
        />
      </ParallaxLayer>
      {/* UFO */}
      <ParallaxLayer offset={1.5} speed={1} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/179/179595.svg"
          alt="179595"
          width="15vw"
          left="75%"
          top="60%"
        />
      </ParallaxLayer>
      {/* BIRD */}
      <ParallaxLayer offset={3} speed={0.4} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/2918/2918588.svg"
          alt="2918588"
          width="15vw"
          left="70vw"
          top="10vh"
        />
      </ParallaxLayer>

      {/* TREES */}
      <ParallaxLayer offset={3} speed={0.4} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614645.svg"
          alt="614645"
          width="30vw"
          left="1vw"
          top="70vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.1} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614645.svg"
          alt="614645"
          width="25vw"
          left="50vw"
          top="70vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614645.svg"
          alt="614645"
          width="40vw"
          left="70vw"
          top="65vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.3} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614663.svg"
          alt="614663"
          width="40vw"
          left="3vw"
          top="78vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.1} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614663.svg"
          alt="614663"
          width="35vw"
          left="60vw"
          top="79vh"
        />
      </ParallaxLayer>
      <ParallaxLayer offset={3} speed={0.5} factor={1}>
        <Svg
          src="https://image.flaticon.com/icons/svg/614/614663.svg"
          alt="614663"
          width="20vw"
          left="40%"
          top="80%"
        />
      </ParallaxLayer>
      {/* FOOTER */}
      <ParallaxLayer offset={3} speed={0.5} factor={1}>
        <Box component="span" style={style.footer}>
          <Typography variant="subtitle1">Filus Inra @ 2021</Typography>
        </Box>
      </ParallaxLayer>
    </>
  );
};

export default MyBackground;
