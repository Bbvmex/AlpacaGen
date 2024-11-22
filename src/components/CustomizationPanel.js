import React from 'react';

const CustomizationPanel = ({ options, onUpdate }) => {
    return (
        <div className="customization-panel">
            {Object.keys(options).map((category) => (
                <div key={category}>
                    <h3>{category}</h3>
                    {options[category].map((option) => (
                        <button
                            key={option.name}
                            onClick={() => onUpdate(category, option)}
                        >
                            {option.name}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default CustomizationPanel;
