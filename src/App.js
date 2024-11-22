import React, { useState } from "react";
import Preview from "./components/Preview";
import CustomizationPanel from "./components/CustomizationPanel";
import { toPng } from "html-to-image";
import "./App.css";

// Helper function to load filenames dynamically
const importAssets = (category) => {
    const context = require.context(
        `./assets/${category}/`,
        false,
        /\.(png|jpe?g|svg)$/
    );
    return context.keys().map((file) => file.replace("./", ""));
};

const App = () => {
    // Dynamically generate options from assets
    const options = {
        background: importAssets("backgrounds"),
        body: importAssets("body"),
        head: importAssets("head"),
        eyes: importAssets("eyes"),
        mouth: importAssets("mouth"),
        accessories: importAssets("accessories"),
    };

    const [selectedParts, setSelectedParts] = useState({
        background: options.background[0],
        body: options.body[0],
        head: options.head[0],
        eyes: options.eyes[0],
        mouth: options.mouth[0],
        accessories: options.accessories[0],
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
