// Generate a random number between 1 and 100, an integer and not a float.
// Prompt the user to guess the number. Continue prompting the user for a
// guess using a loop, telling them each time if the number is lower or higher.
// Alert correct when they guess the number.

// solution A
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function guessNum() {
  var x = randomIntFromInterval(1,100);
  var guess = parseInt(prompt("Guess a number between 1 and 100!"));
  while (guess !== x) {
    if (guess < x)
      guess = parseInt(prompt("Guess higher!"));
    else guess = parseInt(prompt("Guess lower!"));
  }
  alert("You got it!");
}

// solution B
function guessNumber() {
  var randPart = Math.random();
  while (randPart < 0.01) {
      randPart = Math.random();
  }
  num = Math.floor(randPart*100);
  var guess = prompt("Guess what number I'm thinking of! (1 to 100)");
  while (guess != num) {
      if (guess < num) {
           alert("higher");
      } else {
           alert("lower");
      }
      guess = prompt("Guess what number I'm thinking of! (1 to 100)");
  }
  alert ("You guessed it: " + guess + "!");
}