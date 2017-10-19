$(document).ready(function(){

var numberToGuess = Math.floor(Math.random() * (100-30)) + 30;
$('#number-to-guess').text(numberToGuess);
var buttonGen;
var gemsArr = [];

for (var i = 0; i < 4; i++) {
	buttonGen = 1 + Math.floor(Math.random() * (.5*numberToGuess));
	gemsArr.push(buttonGen);
	//console.log(gemsArr);

}
console.log(gemsArr);

var yourScore = 0;
$("#display").text(yourScore);

// Assigns the values of the gems
var blueGem = $("#blue-gem");
blueGem.attr("data-gem", gemsArr[0]);

var clearGem = $("#clear-gem");
clearGem.attr("data-gem", gemsArr[1]);

var redGem = $("#red-gem");
redGem.attr("data-gem", gemsArr[2]);

var greenGem = $("#green-gem");
greenGem.attr("data-gem", gemsArr[3]);

function reset() {
        null
}

// Gets values of gems
$("#blue-gem").on("click", function() {
    yourScore = yourScore + parseInt(blueGem.attr("data-gem"));
    $("#display").text(yourScore);
    console.log(blueGem.attr("data-gem"));
});

$("#clear-gem").on("click", function() {
    yourScore = yourScore + parseInt(clearGem.attr("data-gem"));
    $("#display").text(yourScore);
    console.log(clearGem.attr("data-gem"));
});

$("#red-gem").on("click", function() {
    yourScore = yourScore + parseInt(redGem.attr("data-gem"));
    $("#display").text(yourScore);
    console.log(redGem.attr("data-gem"));
});

$("#green-gem").on("click", function() {
    yourScore = yourScore + parseInt(greenGem.attr("data-gem"));
    $("#display").text(yourScore);
    console.log(greenGem.attr("data-gem"));
});

$(".gem-buttons").on("click", function() {
if (yourScore > numberToGuess) {
    $("#result").text("You lost the last game! Try again.");
    reset();
    console.log("your score has passed the number you're guessing.");
}
})


});