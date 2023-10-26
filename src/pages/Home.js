import React from 'react';
import Name from '../partials/Name';
import './Home.css';

function Home() {
    return (
        <div className="home centered">
            <div className="home-section">
                <Name />
            </div>
        </div>
    );
}


export default Home;