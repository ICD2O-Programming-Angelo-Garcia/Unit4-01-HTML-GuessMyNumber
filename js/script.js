/* Created by: Angelo Garcia
* Created on: May 6, 2025
* This file contains the CSS for index.html
*/
// Function to generate a random number between 1 and 6
function generateRandomNumber() {
  // Generate a random number between 1 and 6
  var correctGuess = Math.floor(Math.random() * 6) + 1;
  
  // Display the result
  document.getElementById("result").innerHTML = "The random number is: " + correctGuess;
}
