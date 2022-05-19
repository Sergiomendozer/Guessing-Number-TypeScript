// let firstName: string = "Dylan";
// console.log(firstName);
// ts-node Guess_it

// const prompt = require("prompt-sync")({ sigint: true });
// const n: number = prompt("You are going to guess a number from 0 to :");
// console.log(`Your number is from zero to ${n}.`);
function did_they_guess_it(n: number, r: number, guess: number): void {
  console.log("called");
}

function guess_it(n: number, r: number): void {
  console.log("N:" + n);
  console.log("R:" + r);
  const prompt = require("prompt-sync")({ sigint: true });
  let guess: number = prompt("Take a guess: ");
  console.log("G:" + guess);
  return did_they_guess_it(n, r, guess);
}

function random_number_generator(n: number): void {
  let random_number: number = Math.floor(Math.random() * n + 0);
  return guess_it(n, random_number);
}
//! constant n is just for testing
const n: number = 100;
random_number_generator(n);
