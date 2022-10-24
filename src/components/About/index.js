import React from 'react';
import avatar from '../../assets/images/avatar.png'; // with import


function About() {

  return (
    <section className="content">
      <div id="about-me" className="section-title">
        <img src={avatar} alt="avatar" />
        <h2>About Me</h2>
      </div>
      <div className="main-content">
        <p>
          I'm passionated about computer science and programming. Continuing lerning from every challenge I'm presented with. Building knowledge on every step, a process that never stop.
        </p>
        <br />
        <p>
          Here are my latest projects and collabotaions.      
        </p>
      </div>
    </section>
  );
}

export default About;
