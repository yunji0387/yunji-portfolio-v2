import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import resume from '../assets/pdfs/my_resume.pdf';

const Navbar = () => {

  function showDropDown() {
    document.getElementById("dropdownContent").classList.toggle("show");
  }

  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("dropdownContent");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

  return (
    <div className="navbar">
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li>
          <div className="dropdown">
            <button className="dropbtn testing" id="dropBtn" onClick={showDropDown}>More</button>
            <div className="dropdown-content" id="dropdownContent">
              <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
              <Link to="/projects" >Projects</Link>
              <Link to="/contact" >Contact</Link>
            </div>
          </div>
        </li>
        <li><Link to='/about'>About</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
