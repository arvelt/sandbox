// let
let str = "外側の変数";
{
  let str = "内側の変数";
  console.log(str);
}
console.log(str);

// const
const string = "test";
// str = "re-assignment"; // SyntaxError

// class
class SampleA {
  name: string;
  constructor() {
    this.name = "arvelt";
  }

  hi() {
    console.log("Hi! " + this.name);
  }
}

// this
"use strict";
function Sample() {
  // this.name を設定する
  this.name = "arvelt";

  var func1 = function() {
    console.log("func1: " + JSON.stringify(this));
  };
  var func2 = () => {
    console.log("func2: " + JSON.stringify(this));
  };

  func1(); // func1: undefined
  func2(); // func2: {"name":"arvelt"}
}
new Sample();

let name2 = "arvelt";
let like = "cat";
console.log(`${name2} ♥ ${like}`);

function hello(word = "ECMAScript 2015") {
  console.log("Hello, " + word + "!");
}
hello(); // Hello, ECMAScript 2015!
