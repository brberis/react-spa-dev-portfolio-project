import React, { useState } from 'react';
import Project from '../../components/Project';
function Portfolio() {
  const [projects] = useState([
    {
      name: 'Ai Dream',
      description: 'AI-powered platform for creating original graphics, logos, and images for product concepts and art. It utilizes Open IA resources',
      image:'https://raw.githubusercontent.com/brberis/ai-dream-io/feature/readme/assets/images/web.png',
      github: 'https://github.com/brberis/ai-dream-io#questions',
      deployment: 'https://boiling-sea-19359.herokuapp.com/herokuapp.com',
      tech: 'React NoSQL GraphQL'
    },
    {
      name: 'Dev Connect',
      description: 'Social media platform designed specifically for developers. Allowing users to create and share their portfolios, comment, etc',
      image:'https://github.com/brberis/dev-connect-portfolio-sharing/raw/main/assets/images/web.png?raw=true',
      github: 'https://github.com/brberis/dev-connect-portfolio-sharing',
      deployment: 'https://dev-connect-portfolio-sharing.herokuapp.com',
      tech: 'Node Express Handlebars'
    },
    {
      name: 'NFT Force',
      description: 'This project uses APIs from NFT Port and Coinbase to unify search and leverage NFT Port`s AI image recognition',
      image:'https://github.com/brberis/nft-force/raw/main/Develop/assets/images/web.png',
      github: 'https://github.com/brberis/nft-force',
      deployment: 'https://brberis.github.io/nft-force/Develop/index.html',
      tech: 'Vanilla JS'
    },
    {
      name: 'Django React NextJs Resto App',
      description: 'Web application for managing a restaurant and catering company, including Billing, Recipes, Inventory and more',
      image:'https://github.com/brberis/python-django-react-nextjs-jwt/blob/main/web.jpg?raw=true',
      github: 'https://github.com/brberis/fullscope-python-django-resto-app',
      deployment: 'https://github.com/brberis/fullscope-python-django-resto-app',
      tech: 'Django NextJs PostgreSQL'
    },
    {
      name: 'PWA Text Editor',
      description: 'This project is a Text Editor PWA developed with ES5 JavaScript, Webpack and Babel. IndexedDB for offline storage',
      image:'https://github.com/brberis/pwa-text-editor-offline-crud/raw/main/assets/images/web.png',
      github: 'https://github.com/brberis/pwa-text-editor-offline-crud',
      deployment: 'https://pwa-text-editor-offline-crud.herokuapp.com',
      tech: 'Django NextJs PostgreSQL'
    },
    {
      name: 'MVC-CMS Blog App',
      description: 'Blog CMS portal allows user registration, login, and management of posts, using Express, Sequelize, MySQL2 for CRUD',
      image:'https://github.com/brberis/mvccms-blog-app/raw/main/assets/images/web.png',
      github: 'https://github.com/brberis/mvccms-blog-app',
      deployment: 'https://mvccms-blog-app.herokuapp.com/',
      tech: 'NodeJs Sequelize MySQL'
    },
    {
      name: 'Work Day Calendar',
      description: 'This project is developed using jQuery, jQuery UI and Moment JS. A simple calendar to save events in hourly block times. Dynamic CSS',
      image:'https://github.com/brberis/jq-work-day-cal/raw/main/Develop/assets/images/web.png',
      github: 'https://github.com/brberis/jq-work-day-cal',
      deployment: 'https://brberis.github.io/jq-work-day-cal/Develop/',
      tech: 'MomentJs JQuery'
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
