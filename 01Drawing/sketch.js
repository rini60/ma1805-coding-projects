function setup() {
  createCanvas(850, 850, WEBGL); // Using WEBGL for 3D rendering
  colorMode(HSB, 360, 100, 100); 
  angleMode(DEGREES);

  stroke(71, 26, 92); // Deep purple stroke color
  strokeWeight(4); // Thicker stroke weight
}

function draw(){
  background(75, 79, 51); // Olive green background
  orbitControl(4,4); // enable 3D mouse control 

rotateX(70) ; 

  // creating points on surface of a circle using the polar coordinates
   
  beginShape(POINTS);
  for(theta = 0; theta < 60; theta += 1){ 
    for (let  phi = 0; phi < 360; phi += 2) {  
    let r = (70 * pow(abs(sin(phi * 5/2)), 1) + 250) * theta/60; //multiply phi with arbitrary value, move sin wave up to create my prefered shape, added powers to edit the sharpness of the petals, makes shape more dense and flat when multipying the radius by theta/60
    let x = r * cos (phi); 
    let y = r * sin(phi); 
    let bumpiness = 2 * pow(r/100, 2) * sin(phi * 12); //added bumpiness to make flower more natual looking
    let z = 300 * pow(Math.E, -0.15 * pow(abs(r/100), 1.5)) * pow(abs(r/100), 0.8)-200 + bumpiness; //added exponential decay and power function to create a more interesting z axis
    vertex(x, y, z) 
    }
  }
  endShape();

    }

