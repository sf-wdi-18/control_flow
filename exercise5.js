// Write a loop to solve the following riddle.
// I am a number between 2 and 100. I am even and multiple of 3. I end in 2. My digits sum to 9.

// solution A
function isEven(num) {
  return (num % 2 === 0);
}

function isMultThree(num) {
  return (num % 3 === 0);
}

function endInTwo(num) {
  return (num % 10 === 2);
}

function sumToNine(num) {
  var numStr = num.toString();
  var sum = 0;
  for (var i = 0; i < numStr.length; i++) {
    sum += parseInt(numStr[i]);
  }
  return (sum === 9);
}

function solveRiddle() {
  for (var i = 2; i <= 100; i++) {
    if (isEven(i) && isMultThree(i) && endInTwo(i) && sumToNine(i))
      console.log("The answer is " + i);
  }
}

// solution B
function riddleNum() {
  for (var i = 6; i < 101; i+=6) {
    if (i % 10 === 2) {
      // console.log(i + "'s last digit is 2");
      if ((i-2)/10 === (9-2))
        if ((i-2)/10 === 7) {
          alert("The solution is " + i + "!");
            return i;
        }
    }
  }
}

// solution C
function theRiddler() {
  for (var i = 2; i < 100; i++) {
    if (i % 2 === 0) {
      if (i % 3 === 0) {
        if (i % 10 === 2) {
          if (Math.floor(i/10) + i % 10 === 9)
            console.log("The number is " + i);
        }
      }
    }
  }
}
