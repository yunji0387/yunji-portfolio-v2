import React from 'react';
import SubTitle from '../components/SubTitle';
import './About.css';
import '../components/Band.css';

function About() {
  const introText = "Recent Computer Science graduates with a strong passion for coding and full-stack development. While I may not have prior professional experience in the field, I am highly motivated to pursue a career in full-stack development, willing to learn new skills and contribute to a dynamic team.";
  const introText1 = "Recent Computer Science graduates";
  const introText2 = "Open to work ";
  const introText3 = "Interested in: ";
  const introText4 = "Web/Software development";
  const introText5 = "Game development";
  const introText6 = "Data mining, Artificial Intelligence";

  return (
    <div className="about">
      <SubTitle title="About" />
      <div className="content">
        <div className="band content-section">
          <p className="content-head-text">&#10148; {introText1}</p>
          <p className="content-head-text">&#10148; {introText2}</p>
          <p className="content-head-text">&#10148; {introText3}</p>
          <p className="content-text">&#10149; {introText4}</p>
          <p className="content-text">&#10149; {introText5}</p>
          <p className="content-text">&#10149; {introText6}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
