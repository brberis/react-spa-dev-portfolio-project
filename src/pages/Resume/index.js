import React, { useState } from 'react';

function Resume() {
  const [front] = useState(['JavaScript ES6','JSON','Rest API','DjangoCMS','JQuery', 'ReactJs', 'Angular2+','TypeScript',
                            'WebPack', 'Bootstrap CSS','Progressive Web Apps']);
  const [back] = useState(['Django','Python','PostgreSQL','MySQL', 'NoSQL', 'Restful', 'GraphQL', 'Session and JWT Authentication', 'MERN Stack - MongoDB','ExpressJs',
                            'NodeJs. Sequelize ORM','Handlebars','Jest','NGINX','Linux',
                            'Droplets VPS', 'DO Apps', 'Heroku','Elastic AWS', 'OOP', 'TDD',
                            'Repository management and version control (GitHub and Git).']);

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
          <ul>
            {front.map((frontSkill, i) => (
              <li key={i}>
                <p>{frontSkill}</p>
              </li>
            ))}
          </ul>
        <h3>
          Back-end Proficiencies      
        </h3>
          <ul>
            {back.map((backSkill, i) => (
              <li key={i}>
                <p>{backSkill}</p>
              </li>
            ))}
          </ul>
      </div>
    </section>
  );
}

export default Resume;