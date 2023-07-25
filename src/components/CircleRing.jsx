import React from "react";
import "./Skill2.css";

export const CircleRing = ({ percent, circleWidth, intext }) => {
  const radius = 85;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percent) / 100;
  return (
    <div>
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        <defs>
          <linearGradient id="gradient">
            <stop offset="10%" stop-color="#12c2e9" />
            <stop offset="30%" stop-color="#c471ed" />
            <stop offset="55%" stop-color="#f64f59" />
          </linearGradient>
        </defs>
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-bg"
        />
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={radius}
          className="circle-progress"
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          stroke="url(#gradient)"
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3em"
          className="circle-text"
          fill="url(#gradient)"
        >
          {intext}
        </text>
      </svg>
    </div>
  );
};
