import React from "react";
import { Button } from "@material-ui/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "../styles.module.css";
import imgStars from "../images/stars.svg";

const style = {
  backDrop: { top: "0", left: "0", backgroundColor: "#545864" },
};

const ErrorPage = ({ history }) => {
  return (
    <Parallax className={styles.container} pages={1} style={style.backDrop}>
      <ParallaxLayer offset={0} speed={0.2} factor={1}>
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
      <ParallaxLayer offset={0} speed={-0.1} factor={2}>
        <img
          src={imgStars}
          style={{ display: "block", width: "100%", backgroundSize: "cover" }}
        />
      </ParallaxLayer>
      {/* DESKTOP */}
      <ParallaxLayer offset={0} speed={0.6} factor={1}>
        <img
          src="https://image.flaticon.com/icons/svg/1111/1111719.svg"
          style={{
            position: "absolute",
            display: "block",
            width: "30%",
            margin: "auto",
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      {/* MAGNIFIER */}
      <ParallaxLayer offset={0} speed={0.6} factor={1}>
        <img
          src="https://image.flaticon.com/icons/svg/1010/1010656.svg"
          style={{
            position: "absolute",
            display: "block",
            width: "20%",
            left: "20vw",
            top: "50vh",
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      {/* ASTRONAUT */}
      <ParallaxLayer offset={0} speed={0.6} factor={1}>
      <img
          src="https://image.flaticon.com/icons/svg/547/547420.svg"
          style={{
            position: "absolute",
            display: "block",
            width: "20vh",
            left: "60vw",
            top: "10vh",
            backgroundSize: "cover",
          }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={0} speed={2} factor={1}>
        <Button variant="contained" color="secondary" style={{top: "40vh"}} onClick={() => history.push("/")}>Go back home</Button>
      </ParallaxLayer>
    </Parallax>
  );
};

export default ErrorPage;
