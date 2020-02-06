var winwidth =600;
var winheight = 600;
var ship;
var maxasteroids = 10
var asteroids = [];
var lasers = [];

function setup() {
  createCanvas(winwidth, winheight);
  ship = new Ship(winwidth/2,winheight/2,20);
  for (var i=0;i<maxasteroids;i++){
    asteroids.push(new Asteroid());
  }
  
}

function draw() {
  background(51);
  ship.edges();
  ship.update();

  for (var i = 0; i < asteroids.length; i++){
    asteroids[i].show();
    asteroids[i].update();
    asteroids[i].edges();
  }
  
}

function keyPressed() {   //global event handler
  
  if (keyCode == RIGHT_ARROW) {
    console.log("right", ship.rotation);
    ship.setrotation(0.1);
  } else if (keyCode == LEFT_ARROW) {
    console.log("left");
    ship.setrotation(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.moving(true);
  } else if (keyCode == DOWN_ARROW){
    ship.moving(false);
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || LEFT_ARROW) {
    ship.setrotation(0);
    console.log("side released", ship.rotation);
  }
  

}
