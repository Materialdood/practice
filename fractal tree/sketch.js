var angle = 0;
var dampening = 0.7;
var slider;
var sliderd;



function setup(){
  createCanvas(400, 400);
  slider = createSlider(0,TWO_PI , PI/4 , 0.01);
  sliderd = createSlider(0.3, 0.7, 0.6, 0.01);
}


function draw(){
  background(51);
  angle = slider.value();
  dampening = sliderd.value();
  stroke(255);
  translate(200, height);
  branch(100);
  
  
}


function branch(len){
  line(0, 0, 0, -len);
  translate(0,-len);
  

  if(len>2){
    push();
    rotate(angle);
    branch(len*dampening);
    pop();
    push();
    rotate(-angle);
    branch(len*dampening);
    pop();
  }
  
}