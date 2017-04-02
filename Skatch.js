var s;
var scl = 20;
var food;

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  if (food.x === this.x && food.y === this.y){
    pickLocation();
  }
    if (s.on_snake(food)){
      pickLocation();
  }
}

function draw() {
  background(51);

  if (s.eat(food)) {
    pickLocation();
    background (255, 0, 0);
  }
  s.death();
  s.update();
  s.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode == DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }else if (keyCode === SPACE_BAR) {
    s.dir(0, 0);
  }
}