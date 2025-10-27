//reference https://medium.spatialpixel.com/sounds-bd05429aba38
let mic; //delcare mic variable 

function setup() {  
  createCanvas(400, 400) ;    
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  background(0);

  let volume = mic.getLevel();
  let circleSize = map(volume, 0, 1, 20, 400);
  ellipse(width / 2, height / 2, circleSize, circleSize); 
  //create circle based on volume

  if (volume > 0.1) {
    background (255, 0, 0); 
  } else { 
    background (0);
  }

  
}
