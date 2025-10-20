let rgb = [ 255,0, 0,] ;
let select = 0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  fill (rgb);
  if (select == 1) {
    rgb = [0, 255, 0]
  }else{
    rgb = [255, random(255), 0]
  }

  for(let i=0; i<=100; i=i+3) {
    r = random(10)
    circle(120+r+mouseX,30+i,i) ;

  }
  let words = {"a", "list", "of", "words"}
  textSize (30)
  text(words[3],10,50)
  }

  function mouseClicked () {
    if (select == 1)
  }

