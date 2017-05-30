// comple
//   script.js -o script-compiled.js
//   node script-compiled.js
// watch
//   script.js -w -o script-compiled.js

let Promise = require('promise');

// let
let foo = [1, 2, 3];
{
    let foo = [4, 5, 6];
    console.log(foo); //4, 5, 6
}
console.log(foo) //1, 2, 3

// const
{
  const PI = 3.14;
  const circleArea = function (radius) {
    return radius * radius * PI;
  };

  try {
      Pi = 3.141421356;
  } catch (e) {
      console.log(e)
  }
  console.log(circleArea(3));  // => 28.26
}

// class
class Human {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('My name is ' + this.name);
  }
}

// function
let plus1 = function(x, y = 2) {
  return x + y;
};
console.log("plus1", plus1(1)); // 3

let plus2 = (x, ...numbers) => {
  let _x = x;
  numbers.forEach((y) => {
      _x = _x + y
  })
  return _x;
};
console.log("plus2", plus2(1, 1, 1, 1, 1)) // 5


let plus3 = (x, y) => x + y;
console.log("plus3", plus3(1, 1)) // 2


// Promise
function timeout(duration = 0) {
    console.log("duration", duration)
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
