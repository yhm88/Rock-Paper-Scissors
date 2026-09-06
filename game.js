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

console.log(getRandomInt(3));
console.log(getComputerChoice());