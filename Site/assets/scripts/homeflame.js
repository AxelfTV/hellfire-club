document.addEventListener("DOMContentLoaded", main);

function main()
{
    //add particle effects
//only apply in certain pages
try{
    particlesJS.load('particles-js1', 'assets/Data/flame.json', function() {
        console.log('Particles.js loaded - callback');
      });
}
catch
{
    console.log("this page do not have particle effect");
}
//#endregion
    loadFlame( document.getElementById("fireCanvas"));   
    loadFlame( document.getElementById("fireCanvas2"));   

}

function toggleDarkMode() 
{
    var element = document.body;
    element.classList.toggle("dark-mode");
    document.getElementById("light-header").classList.toggle("hidden");
    document.getElementById("dark-header").classList.toggle("hidden");

    if(darkMode == 1) darkMode = 0;
    else darkMode = 1;
    window.localStorage.setItem("dark-mode", darkMode);

    console.log(window.localStorage.getItem("dark-mode"));
}

function loadFlame(canvas)
{


const ctx = canvas.getContext("2d");

canvas.width =1200;
canvas.height = 600;

const frames = [];
const totalFrames = 24;
let frameIndex = 0;
const frameRate = 24;  
const frameInterval = 1000 / frameRate;  


for (let i = 1; i <= totalFrames; i++) {
    let img = new Image();
    img.src = `assets/images/flames/00${i}.png`;
    frames.push(img);
}


function playAnimation() {
    setInterval(() => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(frames[frameIndex], 0, 0, canvas.width, canvas.height);
        frameIndex = (frameIndex + 1) % totalFrames;
    }, frameInterval);
}

frames[0].onload = playAnimation;

}