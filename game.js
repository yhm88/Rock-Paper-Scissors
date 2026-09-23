// apply the random num to make computer randomly return "rock", "papper", "scissors"
function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3)

  if (randomInt === 0) {
    return "rock";
  } else if (randomInt === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

let humanScore = 0;
let computerScore = 0;
const roundResultDiv = document.querySelector("#round-result");
const scoreBoardDiv = document.querySelector("#score-board");

// 2. 你的单局对局函数（保留了所有的 console.log）
function playRound(humanChoice, computerChoice) {

    if (humanScore === 5 ||computerScore === 5) {
      return;
    }
    // 统一转换为小写，防止大小写不匹配
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        roundResultDiv.textContent = `It's a tie game, your choices are both ${humanChoice}.`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        roundResultDiv.textContent = `You win, your choice ${humanChoice} beat computer's ${computerChoice}.`;
    } else {
        computerScore++;
        roundResultDiv.textContent = `You lose, computer's ${computerChoice} beat your ${humanChoice}.`;
    }

    // 每一局打完，在控制台实时打印当前的总比分
    scoreBoardDiv.textContent = `Current score -> You: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {
      roundResultDiv.textContent = `You win the game, you reaches the 5 points first.`
    } else if (computerScore === 5) {
      roundResultDiv.textContent = `You lose the game, computer reaches the 5 points first.`
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener('click', () => {

    const humanSelection = button.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection); 
  })
})