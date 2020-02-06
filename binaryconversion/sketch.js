//binary conversion representation

let num = "10101001";
let byt = [];
let bytlen = num.length;
let dec;

console.log("starting...");
console.log("input: "+ num);

function mousePressed() {
  console.log("mousepress")
  for (let i = 0; i<bytlen; i++) {
    byt[i].toggle(mouseX, mouseY);
  }
}

function setup() {
  createCanvas(400,100);
  binaryconversion(num);
  dec = createDiv("");

  let w = width / bytlen;
  for (let i = 0; i<bytlen; i++) {
    byt.push(new Bit(i*w, 50, w));
    byt[i].setState(num.charAt(i));
    }
}

function draw() {
  background(220);
  num ="";
  for (let i = 0; i<bytlen; i++) {
    byt[i].show();
    num += byt[i].state ? "1" : "0";
  }

  dec.html(binaryconversion(num));
}

function binaryconversion(val) {
  let sum = 0;
  for (let i =0 ; i < val.length; i++) {
    let bit = val.charAt(val.length-i-1);
    sum += parseInt(bit) * Math.pow(2,i);

  }
 
  return sum;
}





binaryconversion(num);
console.log("done");