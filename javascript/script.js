'use strict'

const ROOT = document.querySelector(':root');

// Function for when JOIN button is clicked
const log = () => console.log('CLICKED!');

// Function to change the heights of images to be square
const squareImg = imgs => {
    for (let img of imgs) {
        const width = (getComputedStyle(img).width);
        ROOT.style.setProperty('--home-multi-img-height', width);
    }
}
