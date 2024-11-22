import React, { useState } from "react";
import Preview from "./components/Preview";
import CustomizationPanel from "./components/CustomizationPanel";
import assets from "./assets/assets";
import { toPng } from "html-to-image";
import "./App.css";



const App = () => {
    // Access options dynamically
    const options = assets;

    const [selectedParts, setSelectedParts] = useState({
        accessories: options.accessories[0],  
        backgrounds: options.backgrounds[0],
        ears: options.ears[0],
        eyes: options.eyes[0],
        hair: options.hair[0],
        leg: options.leg[0],
        mouth: options.mouth[0],
        neck: options.neck[0],
        nose: options.nose[0],
    });

    const updatePart = (category, option) => {
        setSelectedParts((prevState) => ({
            ...prevState,
            [category]: option,
        }));
    };

    const randomize = () => {
        const randomSelection = {};
        Object.keys(options).forEach((category) => {
            const categoryOptions = options[category];
            randomSelection[category] =
                categoryOptions[Math.floor(Math.random() * categoryOptions.length)];
        });
        setSelectedParts(randomSelection);
    };

    const downloadImage = () => {
        const previewElement = document.getElementById("alpaca-preview");
        toPng(previewElement)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "alpaca.png";
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error("Error downloading image:", error);
            });
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Alpaca Image Generator</h1>
            </header>
            <main>
                <Preview selectedParts={selectedParts} />
                <CustomizationPanel options={options} onUpdate={updatePart} />
                <div className="controls">
                    <button onClick={randomize} className="btn">
                        Randomize Alpaca
                    </button>
                    <button onClick={downloadImage} className="btn">
                        Download Alpaca
                    </button>
                </div>
            </main>
        </div>
    );
};

export default App;
