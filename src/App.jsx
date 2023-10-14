import { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import moon from "./assets/moon.png";
import land from "./assets/land.png";
import cat from "./assets/cat.gif";
export const App = () => {
  const ref = useRef()
  return (
    <>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer sticky={{start: 0.9, end: 2.5}} style={{display: 'flex', justifyContent: "center"}}>
          <img src={cat} />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        ></ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          factor={4}
          style={{ backgroundImage: `url(${land})`, backgroundSize: "cover" }}
        ></ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.005} onClick={() => ref.current.scrollTo(3)}>
          <h2>Welcome to my website</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={2} onClick={() => ref.current.scrollTo(0)}>
          <h2>Web development is fun</h2>
        </ParallaxLayer>
      </Parallax>
    </>
  );
};
