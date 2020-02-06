class Ship {
  constructor(x, y, r=10){
    this.pos = createVector(x, y);
    this.r = r;
    this.direction = 0;  //p5 thinks in radians
    this.rotation = 0;
    this.vel = createVector(0,0);
    this.ismoving = false;
    this.breaking = 0.994;
    this.dampening = 0.992;
    this.forcemult = 0.14;

  }

  edges(){
    if (this.pos.x > height + this.r){
      this.pos.x = -this.r;
    } else if (this.pos.x < -this.r){
      this.pos.x = height + this.r;
    }
    if (this.pos.y > height + this.r){
      this.pos.y = -this.r;
    } else if (this.pos.y < -this.r){
      this.pos.y = height + this.r;
    }
  }

  setrotation(angle) {
    this.rotation = angle;
  }

  moving(b){
    this.ismoving=b;
  }

  acceleration() {
    var force = p5.Vector.fromAngle(this.direction);
    force.mult(this.forcemult);
    this.vel.add(force);
  }

  update() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.direction + HALF_PI);
    noFill();
    stroke(255);
    triangle(-this.r+this.r/2, this.r, this.r-this.r/2, this.r, 0, -this.r);
    pop();

    if (this.ismoving){
      this.acceleration();
      
    } else {
     
      this.vel.mult(this.breaking);
      
    }

    this.pos.add(this.vel);
    this.vel.mult(this.dampening);

    this.direction += this.rotation;
  }



}