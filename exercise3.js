// Confirm if a user has three friends?
// Use a loop and prompt to collect the names of the friends.
// Alert back the names of the friends.

// solution A
function listFriends() {
  var friends = [];
  for(var i = 0; i < 3; i++) {
    friends.push(prompt("Enter a friend's name"));
  }
  var alertMesg = "Your friends are " + friends.join(', ');
  alert(alertMesg);
}

// solution B
function threeFriends() {
  confirm("Do you have 3 friends?");
  var allFriends = [];
  while (!confirm("Have you entered all your friends?")) {
      allFriends.push(prompt("Enter a friend's name:"));
  }
  alert("Your " + allFriends.length + " friends are: " + allFriends);
}