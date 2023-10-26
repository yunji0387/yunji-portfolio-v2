import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#166e0e',
      dark: '#00000',
      sub: '#ffff00',
      mainText: '#495E57',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ababab',
      main: '#8c8c8c',
      dark: '#636363',
      contrastText: '#fff',
    },
  },
  typography: {
    titleText: 'Holtwood One SC, serif',
    contentText: 'Handlee, cursive',
  },
});

function App() {
  return (
    <HashRouter basename='/'>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className='main-content'>
          <Routes>
            <Route exact path='/' element={<Home theme={theme}/>} />
            <Route path='/about' element={<About theme={theme}/>} />
            <Route path='/contact' element={<Contact theme={theme}/>} />
            <Route path='/projects' element={<Projects theme={theme}/>} />
          </Routes>
        </div>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
