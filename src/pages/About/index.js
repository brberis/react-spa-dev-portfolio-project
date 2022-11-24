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
          Full stack developer. Previous experience includes database modeling,
          wire-framing, programming and maintaining web apps, implementing Python, 
          Django, Angular, Rest API, SQL,, JavaScript, HTML, and CSS. Completed Full 
          Stack Web Development Certificate at University of Miami, 
          to develop deeper technical knowledge and experience. 
          Proficient in React, Node.js, Express, MongoDB, NoSQL, 
          and agile development methodologies and source control with Git. 
          Strengths include building successful team relationships and providing 
          a high level of customer service by ensuring all deadlines are met in a 
          timely yet professional manner.         
        </p>
        <br />
        <p>
          Here are my latest projects and collaborations.      
        </p>
      </div>
    </section>
  );
}

export default About;
