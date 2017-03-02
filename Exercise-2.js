// Exercise 2

function yell(caps) {
return caps.toUpperCase();
}

console.log(yell("pizza"));


function yell10(caps10) {
for (var i = 0; i < 10; i ++) {
  console.log (yell(caps10));
  }
}

yell10("yawn");
