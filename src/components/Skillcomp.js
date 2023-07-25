import React from "react";
import "./Skillcomp.css";

import { Fade } from "react-reveal";

const Skillcomp= () => {

  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div className="number">
            <Fade>Javascript</Fade>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
      >
        <defs>
          <linearGradient id="GradientColor">
            {" "}
            {/* Use the same id for the linear gradient */}
            <stop offset="0%" stop-color="#e91e63" />
            <stop offset="100%" stop-color="#673ab7" />
          </linearGradient>
        </defs>
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
          stroke="url(#GradientColor)"
        />
        <circle
          cx="80"
          cy="80"
          r="70"
          stroke-linecap="round"
          stroke="url(#GradientColor)"
        />
      </svg>


    </div>
  
    // <div className='skills'>
    //     <div className="skill">
    //         <div className="skill-name">HTML</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">CSS</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">Javascript</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">React Js</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">Node Js</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">Mongo DB</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    //     <div className="skill">
    //         <div className="skill-name">Data Structures and Algorithms</div>
    //         <div className="skill-bar">
    //             <div className="skill-per" per='90%'></div>
    //         </div>
    //     </div>
    // </div>
  );
};

export default Skillcomp;
