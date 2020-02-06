class Asteroid {
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.r = random(5,40);
    this.maxV = floor(random(5,15));
    this.offset = [];
    for (var i=0;i<this.maxV;i++){
      this.offset[i] = random(-8,8);
    }
    this.vel = p5.Vector.random2D()
  }

  show(){
    push();
    fill(51);
    stroke(255);
    translate(this.pos.x, this.pos.y);
    //ellipse(0, 0, this.r * 2)

    beginShape();
    
    for(var i=0; i<this.maxV; i++){
      var r = this.r + this.offset[i];
      var angle = map(i,0,this.maxV,0,TWO_PI);
      var x = r * cos(angle);
      var y = r * sin(angle);  
      vertex(x,y);
    }
    endShape(CLOSE);


    pop();
  }

  update(){
    this.pos.add(this.vel);
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
}