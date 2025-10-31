function playHighLowGame() {
  // Welcome message
  window.alert("🎮 Welcome to the High-Low Number Guessing Game!");
  window.alert("I'm thinking of a number between 1 and 100...");

  // Random Number Generator
  const targetNumber = Math.floor(Math.random() * 100) + 1;

  // Variable that tracks number of guesses
  let userGuesses = 0;

  // Variable that stores current guess
  let guess = null;

  //This loop keeps asking guesses until player wins or quits.
  while (guess !== targetNumber) {
    // Get players guess
    const input = window.prompt("Enter your guess (1-100):");
    // Cancel button input
    if (input === null) {
      window.alert("Game Cancelled. Quitter.");
      return;
    }
    guess = parseInt(input);
    userGuesses++;

    //Adds input Validation
    if (isNaN(guess) || guess < 1 || guess > 100) {
      window.alert("Enter a valid number.");
      userGuesses--; // Does not count invalid guesses
      continue;
    }

    //Compares Guess to Target Number
    if (guess < targetNumber) {
      window.alert("Too Low.");
    } else if (guess > targetNumber) {
      window.alert("Too High.")
    }
  
  } // This ends the while loop

 // Player won alert
 window.alert(`You Won. Good Job. You guessed it in ${userGuesses} ${userGuesses === 1 ? 'try' : 'tries'}.`);

 // Ask to play again
 const playAgain = window.confirm("Want to Play Again?");

 if (playAgain) {
  playHighLowGame(); //Recursive call
 } else {
  window.alert("Quitter.");
 }

}

// 🚀 Call the function to start the game
playHighLowGame();
