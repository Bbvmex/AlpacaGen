import React from 'react';
import './Preview.css';

const Preview = ({ selectedParts }) => {
    return (
        <div id="alpaca-preview" className="alpaca-preview">
            <img src={`./assets/backgrounds/${selectedParts.background}`} alt="Background" />
            <img src={`./assets/ears/${selectedParts.ears}`} alt="Ears" />
            <img src={`./assets/eyes/${selectedParts.eyes}`} alt="Eyes" />
            <img src={`./assets/hair/${selectedParts.hair}`} alt="Hair" />
            <img src={`./assets/leg/${selectedParts.leg}`} alt="Leg" />
            <img src={`./assets/mouth/${selectedParts.mouth}`} alt="Mouth" />
            <img src={`./assets/accessories/${selectedParts.accessories}`} alt="Accessories" />
        </div>
    );
};

export default Preview;
