import React, { useState } from 'react';
import Project from '../Project';
function Portfolio() {
  const [projects] = useState([
    {
      name: 'Dev Connect',
      image:'https://github.com/brberis/dev-connect-portfolio-sharing/raw/main/assets/images/web.png?raw=true',
      github: 'https://github.com/brberis/dev-connect-portfolio-sharing',
      deployment: 'https://dev-connect-portfolio-sharing.herokuapp.com'
    },
    {
      name: 'NFT Force',
      image:'https://github.com/brberis/nft-force/raw/main/Develop/assets/images/web.png',
      github: 'https://github.com/brberis/nft-force',
      deployment: 'https://brberis.github.io/nft-force/Develop/index.html'
    },
    {
      name: 'Weather API',
      image:'https://github.com/brberis/cbr-weather-api/raw/main/Develop/assets/images/web.png',
      github: 'https://github.com/brberis/cbr-weather-api',
      deployment: 'https://brberis.github.io/cbr-weather-api/Develop/'
    },
    {
      name: 'PWA Text Editor',
      image:'https://github.com/brberis/pwa-text-editor-offline-crud/raw/main/assets/images/web.png',
      github: 'https://github.com/brberis/pwa-text-editor-offline-crud',
      deployment: 'https://pwa-text-editor-offline-crud.herokuapp.com'
    },
    {
      name: 'MVC-CMS Blog App',
      image:'https://github.com/brberis/mvccms-blog-app/raw/main/assets/images/web.png',
      github: 'https://github.com/brberis/mvccms-blog-app',
      deployment: 'https://mvccms-blog-app.herokuapp.com/'
    },
    {
      name: 'Work Day Calendar',
      image:'https://github.com/brberis/jq-work-day-cal/raw/main/Develop/assets/images/web.png',
      github: 'https://github.com/brberis/jq-work-day-cal',
      deployment: 'https://brberis.github.io/jq-work-day-cal/Develop/'
    }
  ]);

  return (
    <section className="content">
      <div id="work" className="section-title">
        <h2>Projects</h2>
      </div>
      <div className="main-content">
        <article>
        <Project
          projects = {projects}
        ></Project>  
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
