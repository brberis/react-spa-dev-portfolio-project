import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {

  const [menu] = useState(['About', 'Portfolio', 'Contact', 'Resume']);
  const [currentTitle, setCurrentTitle] = useState(menu[0])

  return (
    <div>
      <div>
        <Header
          menu={menu} 
          currentTitle={currentTitle}    
          setCurrentTitle={setCurrentTitle}    
          ></Header>
      </div>
      {currentTitle === 'About' ? (
        <>
          <section className="hero">
            <div>
              <h2>My Project Portfolio</h2>
            </div>
          </section>
        </>
      ):''}
      <section className="main-section">
        {currentTitle === 'About' ? (
          <>
            <About></About>
          </>
        ):''}
        {currentTitle === 'Portfolio' ? (
          <>
            <Portfolio></Portfolio>
          </>
        ):''}
      </section>
    </div>

  );
}

export default App;
