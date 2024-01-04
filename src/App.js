import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact';

import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Experience from './components/Experiecne';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
