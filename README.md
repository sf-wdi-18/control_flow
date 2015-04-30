# Intro JavaScript
## Control Flow

| Objectives |
| :--- |
| Apply knowledge of methods and types to solve small exercises |
| Play with control flow structures |

Please try the following exercises in the Chrome console.

First complete all exercises from the [**JS Primitives**](https://github.com/sf-wdi-18/notes/tree/master/lectures/week-01/day_2_intro_js/dawn_js_primitives) lesson.


## Exercises

* Practice using `prompt`, `confirm`, and `alert` try the following. You may want to look them up on **MDN**.
  * Ask the user for the their `firstName`. Then `alert` it.
  * Ask the `user` `"have we met before?"`. If `true` then respond `"nice to meet you"`.
* Get the temperature from the user and alert it back in Celsius.
* Confirm if a user has three friends? Use a loop and `prompt` to collect the names of the `friends`. Alert back the names of the `friends`.
* Prompt the user to give a word. Then alert back the number of vowels.
* Write a loop to solve the following riddle. I am a number between `2` and `100`. I am even and a multiple of 3. I end in `2`. My digits sum to `9`.
* Hard: Generate a random number between 1 and 100, an integer and not a float. Prompt the user to guess the number. Continue prompting the user for a guess using a loop, telling them each time if the number is lower or higher. Alert correct when they guess the number.
* Super Challenge: Given an array of friends

  ```
  var friends = [
                  "larry",
                  "moe",
                  "curly",
                  "huey",
                  "louie",
                  "dewey"
                  ]
  ```

  write a loop to alert them in some random order. 
````
var firstName = prompt("What is your first name?");
alert(firstName);
var haveMet = prompt("Have we met before?");
 if (haveMet){
    console.log("nice to see you again!");
 }
  else {
  console.log("nice to meet you!");
  }


var degreesInFar = prompt("what is the temperature in farenheight right now?");
var degreesInCel = alert("The temperature in Celcius is " + (degreesInFar-30)/2);


var friends = [];
for(i=0; i<3; i++){
console.log("You have " + i + " friends. Get some friends, loser!")
friends.push(prompt("what's the name of one of your friends?"));
}
alert(friends);

var str = prompt("gimme a word, man");
var matches = str.match(/[aeiou]/gi);
    var count = matches ? matches.length : 0;
alert("There are " +count+ " vowels in that word!");


for(i=1; i<=100; i++){
    if(i%6===0){
       if(i%10 ===2){
         if(Math.floor((i%10)+(i/10))===9){
       console.log(i)}
 }}}


var num = Math.floor(Math.random()*10);
var guess;
while (guess !== num){
    guess = prompt("Guess the number between 1 and 10!");
    if (guess > num){
    alert("The number is lower than that!");
}
    else if(guess < num){
    alert("The number is higher than that!");
}
    else{
     alert("Correct!");
     break;
}}


````
