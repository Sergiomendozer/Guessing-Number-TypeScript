// ts-node Guess_it
function did_they_guess_it(n: number, r: number, guess: number): any {
  if (guess == r) {
    console.log("You Guess it, Congrats");
  } else if (guess > r) {
    const prompt = require("prompt-sync")({ sigint: true });
    let guess: number = prompt("Guess Lower: ");
    return did_they_guess_it(n, r, guess);
  } else {
    const prompt = require("prompt-sync")({ sigint: true });
    let guess: number = prompt("Guess Higher: ");
    return did_they_guess_it(n, r, guess);
  }
}

function guess_it(n: number, r: number): any {
  //   console.log("N:" + n); //!for testing
  //   console.log("R:" + r); //!for testing
  const prompt = require("prompt-sync")({ sigint: true });
  let guess: number = prompt("Take a guess: ");
  return did_they_guess_it(n, r, guess);
}

function random_number_generator(n: number): any {
  let random_number: number = Math.floor(Math.random() * n + 0);
  return guess_it(n, random_number);
}

const prompt = require("prompt-sync")({ sigint: true });
const n: number = prompt("You are going to guess a number from 0 to :");
// const n: number = 100; //! constant n is just for testing
random_number_generator(n);
