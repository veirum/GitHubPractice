let x = 0
function setup() {
  createCanvas(800, 400);
  background(0);
}

function draw() {
  x+=10
  background(0,20);
  fill(255)
  noStroke()
  ellipse(x%width,200,100,100);
}