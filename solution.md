# Solution

* Using prompt


	```
	alert(prompt("What's your name?"));
	```
* Using confirm

	```
	var res = confirm("Have we met before?");
	if (res) {
		alert("Nice to meet you!");
	}
	```
* Get the temp

	```
	var farenTemp = prompt("What is the temp?");
	var newTemp = (farenTemp-32)*5/9;
	alert( newTemp + "degrees in Celsius")
	```
* Iterate and Prompt

	```
	var hasThreeFriends = confirm("Do you have three friends?");
	var friends = [];
	
	if (hasThreeFriends) {
		for (var i = 0; i < 3; i = i + 1) {
			var name = prompt("What's the name of friend " + (i + 1));
			friends.push(name);
		}
		
		alert(friends.join(", "));
	}
	
	```
* Riddle me this...


	```
	var sumOfDigits;
	
	for (var i = 6; i < 100; i = i + 6) {
		sumOfDigits = Math.floor(i/10) + Math.floor(i%10);
		if (i % 10 === 2 && sumOfDigits === 9) {
			console.log("Your num is", i);
		}
	}
	```
	

* Vowel counts

  ```
  var word = prompt("What is your word?");
  var vowelCount = 0;
  var vowels = ["a", "e", "i", "o", "u" ];
  var lowerWord = word.toLowerCase();

  for (var i = 0;  i < lowerWord.length; i = i + 1 ) {
    vowelCount += vowels.indexOf(lowerWord[i]) === -1 ? 0 : 1;
  }

  alert(word + " has " + vowelCount + " vowels.");
  ```

* Hot or cold...

	```
	var randNum = Math.floor(Math.random()*100);
	var guess = prompt("What is the magic number?");
	var numGuess = parseInt(guess, 10);
	
	while (numGuess !== randNum) {
		if (numGuess < randNum) {
			alert("Higher!");
		} else  {
			alert("Lower!");
		}
		guess = prompt("What is the magic number?");
		numGuess = parseInt(guess, 10);
	}
	
	```
	
* Super random challenge... Fisher-Yates shuffle.

	```
	  var friends = [
	                "larry",
	                "moe",
	                "curly",
	                "huey",
	                "louie",
	                "dewey"
	                ];
	  
	  
	  var newFriends = friends.slice(0);
	  var length =  newFriends.length;
	  var randNum, randIndex;
	  var holderOne, holderTwo;
	  
	  for (var i = 0; i < length; i += 1) {
	  	randNum = Math.floor(Math.random()*(length - i))
	  	randIndex = randNum + i;
	  	
	  	// hold values
	  	
	  	holderOne = newFriends[i];
	  	holderTwo = newFriends[randIndex];
	  	
	  	// swap
	  	newFriends[i] = holderTwo;
	  	newFriends[randIndex] = holderOne
	  }
	
	  console.log(newFriends);
	```
