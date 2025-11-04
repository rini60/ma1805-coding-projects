let i = 0; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Eyes
  fill(255, 0, 0); 
  circle(50, 50, 50);
  circle(200, 50, 50);

  //Mouth
  fill(0, 255, 0, 255)
  ellipse(150, 150, 200, 20);

  // Increment i
  i = i+1; 

  //  Triangle 
  trangle (30, 75, i, 20, i, 75)
}
