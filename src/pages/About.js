import React from 'react';
import SubTitle from '../components/SubTitle';
import './About.css';
import '../components/Band.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function About(props) {
  const { theme } = props;

  const introText1 = "Computer Science graduates";
  const introText2 = "Open to work ";
  const introText3 = "Skills: ";
  const introText4 = "Programming Languages Javascript, Python, Java, C, C++, C#";
  const introText5 = "Markup & Stylesheet Languages HTML, CSS, Markdown";
  const introText6 = "Libraries/Frameworks React, Node.js, Express.js, REST APIs, Pandas";
  const introText7 = "Tools / Platforms Git/GitHub, Visual Studio Code, Jupyter Notebook, Heroku";
  const introText8 = "Databases SQL, NoSQL, MongoDB";
  const introText9 = "Development Methodologies Agile, Scrum, DevOps, OOP, SOLID";

  return (
    // <div className="about">
    //   <SubTitle title="About" />
    //   <div className="content">
    //     <div className="band content-section">
    //       <p className="content-head-text">&#10148; {introText1}</p>
    //       <p className="content-head-text">&#10148; {introText2}</p>
    //       <p className="content-head-text">&#10148; {introText3}</p>
    //       <p className="content-text">&#10149; {introText4}</p>
    //       <p className="content-text">&#10149; {introText5}</p>
    //       <p className="content-text">&#10149; {introText6}</p>
    //     </div>
    //   </div>
    // </div>
    <Container>
      <SubTitle title="About" theme={theme}/>
      <Container>
        <Typography>&#10148; {introText1}</Typography>
        <Typography>&#10148; {introText2}</Typography>
        <Typography>&#10148; {introText3}</Typography>
        <Typography>&#10148; {introText4}</Typography>
        <Typography>&#10148; {introText5}</Typography>
        <Typography>&#10148; {introText6}</Typography>
        <Typography>&#10148; {introText7}</Typography>
        <Typography>&#10148; {introText8}</Typography>
        <Typography>&#10148; {introText9}</Typography>
      </Container>
    </Container>
  );
}

export default About;
