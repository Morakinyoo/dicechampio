function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = "dice" + randomNumber1 + ".png";

  let randomImageSource = "assets/images/dice/" + randomDiceImage;
  let image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  //second dice
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomDiceImage = "dice" + randomNumber2 + ".png";
  let randomImageSource2 = "assets/images/dice/" + randomDiceImage;

  let image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = playerOneName + " win 🚩!";
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = playerTwoName + " win 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
document.querySelector("button").addEventListener("click", rollDice);

let player1Name = prompt("what is your name?");
let player2Name = prompt("what is your name?");

let playerOneName = player1Name;
let playerTwoName = player2Name;
document.getElementById("player1-p").innerHTML = playerOneName;
document.getElementById("player2-p").innerHTML = playerTwoName;
