// let firstName: string = "Dylan";
// console.log(firstName);
// ts-node Guess_it

// const prompt = require("prompt-sync")({ sigint: true });
// const n: number = prompt("You are going to guess a number from 0 to :");
// console.log(`Your number is from zero to ${n}.`);

function guess_it(n: number, r: number): void {
  //   let random_number: number = Math.floor(Math.random() * 100 + 0);
  //   console.log("R: " + random_number);
  console.log("N:" + n);
  console.log("R:" + r);
}

function random_number_generator(n: number): void {
  let random_number: number = Math.floor(Math.random() * n + 0);
  //   console.log("R: " + random_number); // for testing
  guess_it(n, random_number);
}
//! constant n is just for testing
const n: number = 100;
random_number_generator(n);
