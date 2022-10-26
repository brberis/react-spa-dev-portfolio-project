import React, { useState } from 'react';

//components
import Header from './components/Header';
import Footer from './components/Footer';

//pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
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
      {currentTitle !== 'About' ? (
        <>
          <section className="hero hero-mini">
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
        {currentTitle === 'Contact' ? (
          <>
            <Contact></Contact>
          </>
        ):''}
        {currentTitle === 'Resume' ? (
          <>
            <Resume></Resume>
          </>
        ):''}
      </section>
      <>
        <Footer></Footer>
      </>
    </div>

  );
}

export default App;

