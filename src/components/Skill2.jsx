import React from "react";
import { CircleRing } from "./CircleRing";
import "./Skill2.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

export const Skill2 = () => {
  return (
    <div className="app">
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={70} circleWidth="200" intext="HTML" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={80} circleWidth="200" intext="CSS" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={70} circleWidth="200" intext="JAVASCRIPT" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={85} circleWidth="200" intext="REACT JS" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={70} circleWidth="200" intext="NODE JS" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={70} circleWidth="200" intext="NODE JS" />
        </Fade>
      </RubberBand>
      <RubberBand>
        <Fade duration={3000}>
          <CircleRing percent={70} circleWidth="200" intext="NODE JS" />
        </Fade>
      </RubberBand>
    </div>
  );
};
