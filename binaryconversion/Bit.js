class Bit {
  constructor(x, y, dia) {
      this.x = x + dia/2;
      this.y = y;
      this.dia = dia-4;
      this.state = false;
  }

  show() {
    stroke(255);
    if (this.state) {
      fill(0);
    }  else {
      fill(255);
    }

    //fill(255 -255 * this.state);
    ellipse(this.x, this.y, this.dia);

  }

  setState(state){
    this.state = Boolean(parseInt(state));
  }

  toggle(x,y){
    let d = dist(x,y,this.x,this.y);
    console.log("toggle", d , this.dia/2)

    if (d < this.dia/2){
      this.state = !this.state;
      console.log(this.state)
    }
  }

}
