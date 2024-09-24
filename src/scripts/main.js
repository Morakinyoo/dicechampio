function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber1 + ".png";

  var randomImageSource = "images/" + randomDiceImage;
  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);

  //second dice
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDiceImage = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomDiceImage;

  var image2 = document.querySelectorAll("img")[1];
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
