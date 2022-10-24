import React from 'react';


function Project(props) {
  const { projects } = props;
  console.log(projects);

  return (
    <>
      {projects.map((project, i) => (
        <div key={i} className="article-detail">
          <a href={project.github} target="_blank" rel="noreferrer">
            <img src={project.image} alt={project.name}/>
          </a>
          <div className="article-info">
            <h4>Dev Connect</h4>
            <p>Node/ Handlebars</p>
          </div>
        </div>
      ))}
    </>
  
)}

export default Project;
