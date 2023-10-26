import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Navbar />
      <div className='main-content'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>

    // router code without using gh-pages
    // <Router>
    //   <Navbar />
    //   <div className='main-content'>
    //     <Routes>
    //       <Route exact path='/' element={<Home />} />
    //       <Route path='/about' element={<About />} />
    //       <Route path='/contact' element={<Contact />} />
    //       <Route path='/projects' element={<Projects />} />
    //     </Routes>
    //   </div>
    //   <Footer />
    // </Router>
  );
}

export default App;
