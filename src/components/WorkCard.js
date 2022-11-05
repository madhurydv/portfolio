import "./WorkCardStyles.css";
import React from 'react'

const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img className="into-img" src={props.imgSrc} alt="project1"/> 
      <h2 className="project-title">{props.title}</h2>
      <div className="project-details">
          <p>{props.text}</p>
          <div className="project-btn">
              <a href={props.view} className="btn">View</a>
              <a href={props.source} className="btn">Source</a>
          </div>
      </div>
    </div>
  )
}

export default WorkCard
