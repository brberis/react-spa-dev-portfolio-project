import React, { useState } from 'react';

function Resume() {
  const [front] = useState(['JavaScript ES6','JSON','Rest API','Django','JQuery','Angular','TypeScript',
                            'Bootstrap CSS','PWA']);
  const [back] = useState(['Django','Python','PostgreSQL','MySQL','JQuery','MERN Stack - MongoDB','ExpressJs',
                            'React','NodeJs. Sequelize ORM','Handlebars','Jest','WebPack','NGINX','Linux',
                            'Droplets VPS','Heroku','DO Apps','Elastic AWS. OOP','PWA',
                            'Repository management and version control (Git and GitHub).']);

  const onButtonClick = () => {
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            const fileURL = window.URL.createObjectURL(blob);
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}
  return (
    <section className="content resume">
      <div id="resume" className="section-title">
        <h2>Resume</h2>
      </div>
      <div className="main-content">
        <p>
          Download my resume here.
        </p>
        <button className="btn" onClick={onButtonClick}>
                    Download Resume
        </button>
        <h3>
          Front-end Proficiencies      
        </h3>
        <p>
          {front.map((frontSkill, i) => (
            <ul>
              <li key={i}>
                {frontSkill}
              </li>
            </ul>
          ))}
        </p>
        <h3>
          Back-end Proficiencies      
        </h3>
        <p>
          {back.map((backSkill, i) => (
          <ul>
            <li key={i}>
              {backSkill}
            </li>
          </ul>
          ))}
        </p>
      </div>
    </section>
  );
}

export default Resume;

var a = "Django, Python, PostgreSQL, MySQL, JQuery, MERN Stack - MongoDB, ExpressJs, React, NodeJs. Sequelize ORM, Handlebars, Jest, WebPack, NGINX, Linux, Droplets VPS, Heroku, DO Apps, Elastic AWS. OOP, PWA, Repository management and version control (Git and GitHub)."
