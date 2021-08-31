import styles from "./styles.module.css";
import { Parallax } from "@react-spring/parallax";
import { useRef } from "react";
import MyBackground from "./components/background";
import Intro from "./components/intro";
import About from "./components/about";
import Project from "./components/project";
import Contact from "./components/contact";

// special thanks to flaticon for these awesome icons
// https://www.flaticon.com/

const style = {
  backDrop: { top: "0", left: "0", backgroundColor: "#545864" },
};

const App = () => {
  const parallax = useRef(<Parallax />);

  return (
    <Parallax
      className={styles.container}
      ref={parallax}
      pages={4}
      style={style.backDrop}
    >
      <MyBackground />
      <Intro onClick={() => parallax.current.scrollTo(1)} />
      <About onClick={() => parallax.current.scrollTo(2)} />
      <Project onClick={() => parallax.current.scrollTo(3)} />
      <Contact onClick={() => parallax.current.scrollTo(0)} />
    </Parallax>
  );
};

export default App;
