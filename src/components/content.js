import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React, { useRef } from "react";

const Content = ({ children }) => {
  const ref = useRef(<Parallax />);

  return (
    <div>
      <Parallax ref={ref} pages={3} scrolling={false} horizontal>
        <ParallaxLayer offset={0} speed={0.5}>
          <span
            onClick={() => {
              ref.current.scrollTo(1);
            }}
          >
            {children}
          </span>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Content;
