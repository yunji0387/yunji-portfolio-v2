import React from 'react';
import './Footer.css';
import SocialIcon from '../components/SocialIcon';
import twitterIcon from '../assets/images/twitter.png';
import gmailIcon from '../assets/images/gmail.png';
import linkedinIcon from '../assets/images/linkedin.png';
import githubIcon from '../assets/images/github.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <ul className="social-icon">
          <SocialIcon href="https://github.com/yunji0387" src={githubIcon} alt="GitHub Icon" />
          <SocialIcon href="https://www.linkedin.com/in/yun-ji-how-64025220a/" src={linkedinIcon} alt="LinkedIn Icon" />
          <SocialIcon href="mailto: yunji0387@gmail.com" src={gmailIcon} alt="gmail Icon" />
          <SocialIcon href="https://twitter.com/" src={twitterIcon} alt="Twitter Icon" />
        </ul>
        <p className="footer-text">&copy; {new Date().getFullYear()} Yun Ji How.</p>
      </div>
    </footer>
  );
};

export default Footer;
