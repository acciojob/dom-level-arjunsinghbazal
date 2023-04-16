//your JS code here. If required.
// Get the element with id "level"
const levelElement = document.getElementById("level");

// Set the initial level to 0
let level = 0;

// Traverse up the DOM tree and count the number of levels
let parent = levelElement.parentNode;
while (parent != null) {
  level++;
  parent = parent.parentNode;
}

// Display the level in an alert
alert("The level of the element is: " + level);
