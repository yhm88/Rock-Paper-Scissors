// creat getRandomInt using Math.random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
// creat getComputerChoice which return the random value
function getComputerChoice() {
  let randomInt = getRandomInt(3);
  if (randomInt === 0) {
    return "rock";    // if getRandomInt(3) = 0, getComputerChoice returns "rock"
  } else if (randomInt === 1) {
    return "paper";   // if getRandomInt(3) = 1, getComputerChoice returns "paper"
  } else {
    return "scissors" // if getRandomInt(3) = 2, getComputerChoice returns "scissors"
  }
}

// get the user choice
function getHumanChoice() {
  let humanChoice = prompt("Please enter your choice.");
  return humanChoice;
}





function playGame() {
  //initilize the human score and computer score
  humanScore = 0;
  computerScore = 0;

  // play a round
  function playRound(humanChoice, computerChoice) {
    // make humanChoice case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // Determine the winner, log the message, and increment score
    if (humanChoice === computerChoice) {
      console.log(`It's a tie, your choices are both ${humanChoice}.`)
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "papper") ||
      (humanChoice === "papper" && computerChoice === "rock")
    ) {
      humanScore++; // human wins, increment humanScore
      console.log(`You win, your ${humanChoice} beat computer's ${computerChoice}!`);
    } else {
      computerScore++; // computer wins, increment computerScore
      console.log(`You lose, computer's ${computerChoice} beat your ${humanChoice}!`);
    }
  }

  // play the game five times
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(`Current score - You: ${humanScore}, Computer:${computerScore}`)
  }

  // declare the winner
  console.log("Final results");
  if (humanScore > computerScore) {
    console.log(`Congratulations!, you win the entire game! (${humanScore} vs ${computerScore})`);
  } else if (humanScore < computerScore) {
    console.log(`You lose, computer win the entire game! (${humanScore} vs ${computerScore})`);
  } else {
    console.log(`It's a grand tie game! (${humanScore} vs ${computerScore})`);
  }
}

playGame();