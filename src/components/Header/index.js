import React from 'react';
import Navigation from './Navigation';
import avatar from './assets/images/avatar.png'; // with import


function Header(props) {
  const {
    titles = [],
    setCurrentTitle,
    currentTitle,
  } = props;

  return (

  <header>
    <div>
      <img src={avatar} alt="Avatar" />
      <h1>Cristobal A Barberis</h1>
    </div>
    <Navigation
        titles={titles}
        setCurrentTitle={setCurrentTitle}
        currentTitle={currentTitle}
      ></Navigation>  
    </header>
  );
}

export default Header;
