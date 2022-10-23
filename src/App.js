import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

function App() {

  const [menu] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentTitle, setCurrentTitle] = useState(menu[0])

  // const [aboutSelected, setAboutSelected] = useState(true);
  // const [portfolioSelected, setPortfolioSelected] = useState(false);
  // const [contactSelected, setContactSelected] = useState(false);
  // const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header
        menu={menu} 
        currentTitle={currentTitle}    
        setCurrentTitle={setCurrentTitle}    
        ></Header>
    </div>
  );
}

export default App;
