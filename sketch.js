
var tree = [];
var walkers = [];
//var r = 4;
var maxWalkers = 20;
var iterations = 200;
var radius = 6;
var hu = 0;
var shrink = 0.999;

function setup() {
  createCanvas(600, 300);
  colorMode(HSB);
  // for (var x = 0; x < width; x += r * 2) {
  //   tree.push(new Walker(x, height));
  // }


  for (var i = 0; i <= width; i++) {
    tree.push(new Walker(i, height));
  }
  radius *= shrink;
  for (var i = 0; i < maxWalkers; i++) {
    walkers[i] = new Walker();
    radius *= shrink;
  }
}

function draw() {
  background(0);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }

  for (var i = 0; i < walkers.length; i++) {
    walkers[i].show();
  }

  for (var n = 0; n < iterations; n++) {
    for (var i = walkers.length - 1; i >= 0; i--) {
      walkers[i].walk();
      if (walkers[i].checkStuck(tree)) {
        walkers[i].setHue(hu % 360);
        hu += 2;
        tree.push(walkers[i]);
        walkers.splice(i, 1);
      }
    }
  }

  var r = walkers[walkers.length - 1].r;
  while (walkers.length < maxWalkers && radius > 1) {
    radius *= shrink;
    walkers.push(new Walker());
  }
}
