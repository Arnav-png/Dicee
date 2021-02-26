
var randomNumber1 = Math.ceil(Math.random()*6)      //random no. bw 1-6
var randomDiceImages = "dice"+randomNumber1 +".png"; 
var randomImageSource = "images/" + randomDiceImages
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource)


var randomNumber2 = Math.ceil(Math.random() * 6)
var randomDiceImages2 = "dice" + randomNumber2+".png";
var randomImageSource2 = "images/"+randomDiceImages2
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2)



//checking which player wins and replacing h1
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
