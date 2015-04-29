//JS Primitives Exercises

//Exercise #4
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
var sortedFriends = friends.split(',').sort();

console.log(sortedFriends);

//Exercise #5
var friends = "Moe,Larry,Curly,Jane,Emma,Elizabeth,Elinor,Mary,Darcy,Grey,Lydia,Harriet";
var revSortedFriends = friends.split(',').sort().reverse();
console.log(revSortedFriends);

//Exercise #6
var myFriends = [
                  'Rickon',
                  'Meera',
                  'Hodor',
                  'Jojen',
                  'Osha',
                  'Rickard',
                  'Maester',
                  'Rodrik',
                  'Jory',
                  'Septa',
                  'Jon'
                ];

var yourFriends = [
                    'Bilbo',
                    'Boromir',
                    'Elrond',
                    'Faramir',
                    'Frodo',
                    'Gandalf',
                    'Legolas',
                    'Pippin'
                  ];

var ourFriends = (myFriends + yourFriends).split(',').sort();

//Exercise #7
var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

function getFavorite() {
	var getFood = prompt("Enter the food you want to rank");
	console.log("That food is ranked number " + (foods.indexOf(getFood) + 1));
}

//Exercise #8
var foods = [
              'Popcorn',
              'Potato chips',
              'Shrimp',
              'Chicken rice',
              'Poutine',
              'Tacos',
              'Toast',
              'French Toast',
              'Crab',
              'Pho',
              'Lasagna',
              'Brownie',
              'Lobster',
              'Donuts',
              'Ice cream',
              'Hamburger',
              'Sushi',
              'Chocolate',
              'Pizza'
            ];

var newFoods = foods.splice(foods.indexOf('Donuts'), 1);
console.log(foods);

//Exercise #9
for (var i=4; i<9; i++) {
	console.log(foods[i]);
}

//Exercise #10


//Intro To JavaScript, Control Flow HW - https://github.com/sf-wdi-18/control_flow

//#1 a)
var getName = prompt("Please enter your name");
alert(getName);

//#1 b)
var haveMet = window.confirm("Have we met?");

if (haveMet) {
	alert("Nice to meet you " + getName);
};

//#2
var getTempInF = prompt("Enter the temperature in Farenheit");
alert("The temperature in Celsius is " + (Math.floor(getTempInF) - 32) * (5/9));


//#3
var hasThreeFriends = window.confirm("Do you have 3 friends?");

if (hasThreeFriends) {
	var threeFriends = [];
	while (threeFriends.length < 3) {
		var getFriends = prompt("Enter a friends name")

		threeFriends.push(getFriends);
	}
	alert(threeFriends);
}

//#4
function countVow(){
var getWord = prompt("Please enter a word!");
var vowels = '';

for (i=0; i < getWord.length; i++){
	if (getWord[i] === "a" || getWord[i] == "e" || getWord[i] == "o" || getWord[i] == "u" || getWord[i] == "i") {
		vowels += getWord[i];
		console.log(vowels.length);
	}
} if (vowels.length > 1){
	alert(vowels.length);
} else {
	alert("there were no vowels");
	}
}

countVow()

//#5
for (var i=2; i<=100; i++) {
	if ((i % 2 == 0) && (i % 3 == 0) && (i % 10 == 2)) {
	   if (parseInt(i.toString()[0]) + parseInt(i.toString()[1]) === 9) {
	       alert(i);
	   }
    }
}

var randomNum = Math.floor(100 * Math.random());
var guessNum = prompt("Guess a number");

while (randomNum != guessNum) {
    if (guessNum < randomNum){
        alert("Too Low");
        guessNum = prompt("Guess Again")
    } else if (guessNum > randomNum){
        alert("Too High");
        guessNum = prompt("Guess Again")        
    }
}
alert("Got it!");