import React from 'react';


function Project(props) {
  const { projects } = props;

  return (
    <>
      {projects.map((project, i) => (
        <div key={i} className="article-detail">
          <a href={project.github} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.name}/>
          </a>
          <div className="article-info">
            <h4>{project.name}:~$</h4>
            <p className="article-description">
            {project.description}
            </p>
            <div>
              <p>
                <a href={project.github} target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i>&nbsp;GitHub</a>
                <a href={project.deployment} target="_blank" rel="noreferrer"><i className="fa-solid fa-earth-americas"></i>&nbsp;Deployment</a>
                <a href='#' rel="noreferrer">| Tech: {project.tech} </a>
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  
)}

export default Project;
