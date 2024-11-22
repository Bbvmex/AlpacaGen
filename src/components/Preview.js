import React from 'react';
import './Preview.css';

const Preview = ({ selectedParts }) => {
    return (
        <div id="alpaca-preview" className="alpaca-preview">
            <img src={`${selectedParts.backgrounds.image}`} alt="Background" />
            <img src={`${selectedParts.neck.image}`} alt="Neck" />
            <img src={`${selectedParts.hair.image}`} alt="Hair" />
            <img src={`${selectedParts.leg.image}`} alt="Leg" />
            <img src={`${selectedParts.ears.image}`} alt="Ears" />
            <img src={`${selectedParts.accessories.image}`} alt="Accessories" />
            <img src={`${selectedParts.eyes.image}`} alt="Eyes" />
            <img src={`${selectedParts.nose.image}`} alt="Nose" />
            <img src={`${selectedParts.mouth.image}`} alt="Mouth" />
            
        </div>
    );
};

export default Preview;
