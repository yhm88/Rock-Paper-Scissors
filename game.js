// apply the random num to make computer randomly return "rock", "papper", "scissors"
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3)

  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "papper";
  } else {
    return "scissors";
  }
}

// get human choice
function getHumanChoice() {
  let humanChoice = prompt(`What is your choice?`);
  return humanChoice;
}

function playGame() {
  // initialize the score of the user and computer
  let humanScore = 0;
  let computerScore = 0;

  // paly a round
  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie game, your choices are both ${humanChoice}.`)
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "papper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "papper")
    ) {
      humanScore++;
      console.log(`You win, your choice ${humanChoice} beat computer's ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose, computer's ${computerChoice} beat your ${humanChoice}.`);
    }
  }

  // play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Current score: Your score is ${humanScore}, computer's score is ${computerScore}`)
  }

  // final result
  console.log(`Final result`)
  if (humanScore > computerScore) {
    console.log(`Congratulation! You win. ${humanScore} vs ${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lose. ${humanScore} vs ${computerScore}`);
  } else {
    console.log(`It's a brand tie game. ${humanScore} vs ${computerScore}`);
  }
}

playGame();