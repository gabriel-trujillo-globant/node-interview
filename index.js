// run `node index.js` in the terminal

var a = 1;
var b = a;
a = 2;
console.log(b);

var c = { prop1: 1, prop2: 2 };
var d = c;
c.prop1 = 'cat';
console.log(d.prop1);

// What's the expected output to the console?
