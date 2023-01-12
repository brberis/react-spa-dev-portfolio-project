import React from 'react';


function Footer() {

  return (
    <section className="content footer">
      <div className="main-content">
        <nav className="footer-menu">
          <ul>
            <li>
              <a href='https://github.com/brberis' target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </li>
            <li>
            <a href='https://stackoverflow.com/users/5666488/cristobal-barberis' target="_blank" rel="noreferrer"><i className="fa-brands fa-stack-overflow"></i></a>
            </li>   
            <li>
              <a href='https://www.linkedin.com/in/cristobal-barberis' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
            </li>     
          </ul>
          <ul>
            <li>
              <div className='email'>
                <a  href="mailto:cristobal@barberis.com">cristobal@barberis.com</a>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Footer;
