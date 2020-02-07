
function conversion (decimal){
  var binary = '';
  var cond = false;

  for (var i = 50;i>=0;i--){
    var temp = Math.pow(2,i);
    if (decimal >= temp){
      cond=true;
      //console.log(decimal, temp, "1");
      binary+="1";
      decimal = decimal % temp;
    } else if(decimal < temp && cond == true){
      //console.log(decimal, temp, "0");
      binary += "0";
    }
  }

console.log(binary);
}

conversion(255);
