import React, { useState } from 'react';
import './Name.css';
import TsuyuIcon from '../assets/images/tsuyuFace.png';
import CrownIcon from '../assets/images/crown.png';

const Name = () => {
    const fontFamilies = [
        "Holtwood One SC, serif",
        "Piedra, cursive",
        "Racing Sans One, cursive",
        "Rock Salt, cursive"
    ];
    const fontSizes = [
        "100px",
        "130px",
        "130px",
        "75px"
    ];

    const [currentFontFamilyIndex, setCurrentFontFamilyIndex] = useState(0);
    const [currentFontSizeIndex, setCurrentFontSizeIndex] = useState(0);

    const handleNameTextClick = () => {
        setCurrentFontFamilyIndex((prevIndex) =>
            (prevIndex + 1) % fontFamilies.length
        );
        setCurrentFontSizeIndex((prevIndex) =>
            (prevIndex + 1) % fontSizes.length
        );
    };

    return (
        <div className="name">
            <div className="name-section">
                <div className="greed-text-section">
                    <p className="greed-text">Hi, I am</p>
                    <div className="mini-icon-section">
                    <img src={TsuyuIcon} alt="Tsuyu Icon" className="tsuyu-icon" />
                    <img src={CrownIcon} alt="Crown Icon" className="crown-icon" />
                    </div>
                </div>
                <div className="name-text-section">
                    <p
                        className="name-text"
                        style={{ fontFamily: fontFamilies[currentFontFamilyIndex], fontSize: fontSizes[currentFontSizeIndex] }}
                        onClick={handleNameTextClick}
                    >
                        Yun Ji How
                    </p>
                </div>
                <p className="small-info-text">&#x2022; Recent Graduate &#x2022; Open to work &#x2022; Interested in Coding &#x2022;</p>
            </div>
        </div>
    );
};

export default Name;
