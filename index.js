var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var randomDiceImg1 = "images/dice" + randomNumber1 + ".png";
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute('src', randomDiceImg1);
document.querySelectorAll("img")[1].setAttribute('src', randomDiceImg2);

if(randomNumber1 > randomNumber2){
        document.querySelector("h2").textContent = "Player1 wins🚩";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h2").textContent = "Player2 wins🚩";
}
else{
    document.querySelector("h2").textContent = "Draw";
}
