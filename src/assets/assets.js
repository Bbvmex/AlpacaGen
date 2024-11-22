const accessories = [
    { name: "earrings", image: require("./accessories/earrings.png") },
    { name: "flower", image: require("./accessories/flower.png") },
    { name: "glasses", image: require("./accessories/glasses.png") },
    { name: "headphone", image: require("./accessories/headphone.png") },
];

const backgrounds = [
    { name: "blue50", image: require("./backgrounds/blue50.png") },
    { name: "blue60", image: require("./backgrounds/blue60.png") },
    { name: "blue70", image: require("./backgrounds/blue70.png") },
    { name: "darkblue30", image: require("./backgrounds/darkblue30.png") },
    { name: "darkblue50", image: require("./backgrounds/darkblue50.png") },
    { name: "darkblue70", image: require("./backgrounds/darkblue70.png") },
    { name: "green50", image: require("./backgrounds/green50.png") },
    { name: "green60", image: require("./backgrounds/green60.png") },
    { name: "green70", image: require("./backgrounds/green70.png") },
    { name: "grey40", image: require("./backgrounds/grey40.png") },
    { name: "grey70", image: require("./backgrounds/grey70.png") },
    { name: "grey80", image: require("./backgrounds/grey80.png") },
    { name: "red50", image: require("./backgrounds/red50.png") },
    { name: "red60", image: require("./backgrounds/red60.png") },
    { name: "red70", image: require("./backgrounds/red70.png") },
    { name: "yellow50", image: require("./backgrounds/yellow50.png") },
    { name: "yellow60", image: require("./backgrounds/yellow60.png") },
    { name: "yellow70", image: require("./backgrounds/yellow70.png") },
];

const ears = [
    { name: "default", image: require("./ears/default.png") },
    { name: "tilt-backward", image: require("./ears/tilt-backward.png") },
    { name: "tilt-forward", image: require("./ears/tilt-forward.png") },
];

const eyes = [
    { name: "angry", image: require("./eyes/angry.png") },
    { name: "default", image: require("./eyes/default.png") },
    { name: "naughty", image: require("./eyes/naughty.png") },
    { name: "panda", image: require("./eyes/panda.png") },
    { name: "smart", image: require("./eyes/smart.png") },
    { name: "star", image: require("./eyes/star.png") },
];

const hair = [
    { name: "bang", image: require("./hair/bang.png") },
    { name: "curls", image: require("./hair/curls.png") },
    { name: "default", image: require("./hair/default.png") },
    { name: "elegant", image: require("./hair/elegant.png") },
    { name: "fancy", image: require("./hair/fancy.png") },
    { name: "quiff", image: require("./hair/quiff.png") },
    { name: "short", image: require("./hair/short.png") },
];

const leg = [
    { name: "bubble-tea", image: require("./leg/bubble-tea.png") },
    { name: "cookie", image: require("./leg/cookie.png") },
    { name: "default", image: require("./leg/default.png") },
    { name: "game-console", image: require("./leg/game-console.png") },
    { name: "tilt-backward", image: require("./leg/tilt-backward.png") },
    { name: "tilt-forward", image: require("./leg/tilt-forward.png") },
];

const mouth = [
    { name: "astonished", image: require("./mouth/astonished.png") },
    { name: "default", image: require("./mouth/default.png") },
    { name: "eating", image: require("./mouth/eating.png") },
    { name: "laugh", image: require("./mouth/laugh.png") },
    { name: "tongue", image: require("./mouth/tongue.png") },
];

const neck = [
    { name: "bend-backward", image: require("./neck/bend-backward.png") },
    { name: "bend-forward", image: require("./neck/bend-forward.png") },
    { name: "default", image: require("./neck/default.png") },
    { name: "thick", image: require("./neck/thick.png") },
];

// Wrap nose in an array
const nose = [
    { name: "nose", image: require("./nose.png") }
];

const assets = {
    accessories,
    backgrounds,
    ears,
    eyes,
    hair,
    leg,
    mouth,
    neck,
    nose,
};

export default assets;
