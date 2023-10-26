import React from 'react';
import './SubTitle.css';

const SubTitle = (props) => {
    return (
        <div className="subtitle">
            <p className="subtitle-title">
                {props.title}
            </p>
        </div>
    );
};

export default SubTitle;
