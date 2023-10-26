import React from 'react';
import { Link } from 'react-router-dom';
import SubTitle from '../components/SubTitle';
import './Projects.css';
import '../components/Band.css';
import skyCastLogo from '../assets/images/skyCast.png';
import gitHubLogo from '../assets/images/github.png';

function Projects() {
  return (
    <div className="project">
      <SubTitle title="Projects" />
      <div className="projects-section">
        <div className="band">
          <p className="project-description">Hit the box to view the web</p>
          <div className="projects-content">
            <Link to="https://sky-cast-854836ef4892.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="project-card ">
              <img src={skyCastLogo} alt="Sky Cast Weather" className="project-card-img" />
              <div className="project-card-description">
                <p className="project-card-description-title">
                  Weather App
                </p>
                <p className="project-card-description-info">
                  A simple web showing current and forecast weather.
                </p>
              </div>
            </Link>

            <Link to="https://github.com/yunji0387" target="_blank" rel="noopener noreferrer" className="project-card ">
              <img src={gitHubLogo} alt="GitHub Logo" className="project-card-img" />
              <div className="project-card-description">
                <p className="project-card-description-title">
                  More Projects
                </p>
                <p className="project-card-description-info">
                  information available on my GitHub profiles.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
