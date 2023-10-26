import React from 'react';
import { Link } from 'react-router-dom';
import SubTitle from '../components/SubTitle';
import './Contact.css';
import '../components/Band.css';

function Contact() {
  return (
    <div className="contact">
      <SubTitle title="Contact" />
      <div className="contact-content">
        <div className="band contact-content-section">
          <Link to="https://www.linkedin.com/in/yun-ji-how-64025220a/" target="_blank" rel="noopener noreferrer" className="contact-content-text">LinkedIn : Yun Ji How</Link>
          <Link to="mailto: yunji0387@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-content-text">Email : yunji0387@gmail.com</Link>
          <Link to="https://github.com/yunji0387" target="_blank" rel="noopener noreferrer" className="contact-content-text">GitHub : yunji0387</Link>
          <Link className="contact-content-text-unavailable">Twitter : Currently Unavailable</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
