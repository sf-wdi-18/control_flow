// Super Challenge: Given an array of friends, write a loop to alert them in some random order.

// solution A
function shuffle(myArray){
    var friends = [
                "larry",
                "moe",
                "curly",
                "huey",
                "louie",
                "dewey"
                ];
    var elementHash = {};
    var randNums = [];
    var outArray = [];
    // associate a random number with each element, and
    // put the random numbers in an array so we can sort
    for (var i = 0; i < myArray.length; i++) {
        myRand = Math.random();
        randNums.push(myRand);
        elementHash[myRand] = myArray[i];
    }
    console.log(elementHash);

    // sort the array of random numbers to get our final order
    randNums.sort(function(a,b){return a-b;});
    //console.log(randNums);

    // go through the hash in the order of the sorted random keys,
    // adding the associated value to our output array each time.
    for (var j = 0; j < myArray.length; j++) {
        outArray.push(elementHash[randNums[j]]);
    }

    return outArray;
}

// solution B
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}

function randomFriends() {
  var friends = [ "larry", "moe", "curly", "huey", "louie", "dewey" ];
  var alertedFriends = [];
  var friend;

  while (alertedFriends.length < friends.length) {
    friend = friends[randomIntFromInterval(0, 5)];
    if (alertedFriends.indexOf(friend) === -1) {
      alert(friend);
      alertedFriends.push(friend);
    }
  }
}

