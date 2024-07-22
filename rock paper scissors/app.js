let user = 0;
let computer = 0;
let userPoints = document.querySelector("#user-score")
let compPoints = document.querySelector("#comp-score")

let options = document.querySelectorAll(".choice")
let msg = document.querySelector('#msg');

let compChoice = () => {
  let variety = ["rock", "paper", "scissors"];

  let variIndex = Math.floor(Math.random() * 3);
  return variety[variIndex];
}

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    msg.innerHTML = `You win! your ${userChoice} beats ${computerChoice}`
    msg.style.backgroundColor = "green"
    user++;
    userPoints.innerHTML = user;
  }
  else {
    msg.innerHTML = `You lost! ${computerChoice} beats your ${userChoice}`
    msg.style.backgroundColor = "red"
    computer++;
    compPoints.innerHTML = computer;
  }
}

const playGame = (userChoice) => {
  const computerChoice = compChoice();
  if (userChoice === computerChoice) {
    msg.innerHTML = "Match is draw , Play again!"
    msg.style.backgroundColor = "#081b31"
  }

  else {
    let userWin = true;
    if (userChoice === "rock") {
      if (computerChoice == "paper") {
        userWin = false;
      }
      else {
        userWin = true;
      }
    }
    if (userChoice === "paper") {
      if (computerChoice == "scissors") {
        userWin = false;
      }
      else {
        userWin = true;
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice == "rock") {
        userWin = false;
      }
      else {
        userWin = true;
      }
    }

    showWinner(userWin, userChoice, computerChoice)
  }


}

options.forEach((choice) => {
  choice.addEventListener('click', () => {
    const userChoice = choice.getAttribute('id');
    console.log("clicked", userChoice);
    playGame(userChoice);
  })
})