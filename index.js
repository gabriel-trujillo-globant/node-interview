// run `node index.js` in the terminal

function Animal(type) {
  this.type = type;
}

const ani1 = new Animal('spider');
const ani2 = Animal('wolf');
const ani3 = Object.create(/* What's needed here to create an instance of Animal? */);

console.log({ ani1, ani2, ani3 });  // What's the output?
