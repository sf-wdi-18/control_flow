// Prompt the user to give a word. Then alert back the number of vowels.

// solution A
function isVowel(letter) {
  var lletter = letter.toLowerCase();
  if (lletter === 'a' || lletter === 'e' || lletter === 'i' || lletter === 'o' || lletter === 'u')
    return true;
  else return false;
}

function numVowels() {
  var word = prompt("Please enter a word");
  var vowels = 0;
  for (var i = 0; i < word.length; i++) {
    if (isVowel(word[i]))
      vowels += 1;
  }
  alert("Your word has " + vowels + " vowels");
}

// solution B
function countVowels() {
  var numVowels = 0;
  var wordIn = prompt("Enter a word!");
  var word = wordIn.toLowerCase();
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < word.length; i++ ){
      if (vowels.indexOf(word[i]) != -1) {
          numVowels ++;
      }
  }
  alert("The number of vowels in " + wordIn + " is " + numVowels + ".");
}

// solution C
function countVowelsWithRegExp() {
  var wordIn = prompt("Enter a word!");
  var numVowels = wordIn.match(/[aeiouAEIOU]/g).length;
  alert(wordIn + " has " + numVowels + " vowels :)");
}