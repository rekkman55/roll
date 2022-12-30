var randInt1 = Math.floor(Math.random() * 6) +1;

var ranDice = "dice-" + randInt1 + ".png";
var ranDiceImgSource = "images/" + ranDice;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ranDiceImgSource);



var randInt2 = Math.floor(Math.random() * 6) + 1;
var ranDiceImgSource2 = "images/dice-" + randInt2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", ranDiceImgSource2);



if (randInt1 > randInt2) {
    document.querySelector("h1").innerHTML = "+ + u win player 1 + +";
    
}
else if (randInt2 > randInt1) {
    document.querySelector("h1").innerHTML = "+ + player 2 u win . + + ";
}
else {
    document.querySelector("h1").innerHTML = "you gotta run dat fade again , draw !";
}