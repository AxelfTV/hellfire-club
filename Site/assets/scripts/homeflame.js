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