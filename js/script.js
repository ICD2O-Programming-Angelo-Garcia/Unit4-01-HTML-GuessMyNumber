// Global variable to hold the random number
let randomNumber;

// This function will generate the random number once when the page loads
window.onload = function () {
  // Generate a random number between 1 and 10
  randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log("Random number generated: " + randomNumber); // For testing purposes
}

// This function is triggered when the user clicks "Check the results"
function checkGuess() {
  // Get the user's guess from the input field
  const userGuess = parseInt(document.getElementById("guess-input").value);

  // Validate if the guess is a valid number and within the range 1-10
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
    document.getElementById("answers").innerHTML = "Please enter a valid number between 1 and 10.";
    return; // Stop the function if the input is invalid
  }

  // Check if the user's guess is correct
  if (userGuess === randomNumber) {
    document.getElementById("answers").innerHTML = `Congratulations! You guessed the correct number: ${randomNumber}`;
  } else {
    document.getElementById("answers").innerHTML = `Oops! The correct number was ${randomNumber}. Try again!`;
  }
}
