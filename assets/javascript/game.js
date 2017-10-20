$(document).ready(function(){

// hides an element on html
$("#hide").hide();

var numberToGuess = Math.floor(Math.random() * (100-30)) + 30;
$('#number-to-guess').text(numberToGuess);
var buttonGen;
var gemsArr = [];
var winCounter = 0;
var lossCounter = 0;

for (var i = 0; i < 4; i++) {
	buttonGen = 1 + Math.floor(Math.random() * (20));
	gemsArr.push(buttonGen);
	//console.log(gemsArr);

}
console.log(gemsArr);

function isEven(num) {
    return num % 2 == 0;
}

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
    numberToGuess = Math.floor(Math.random() * (100-30)) + 30;
    $('#number-to-guess').text(numberToGuess);

    gemsArr = [];
    for (var i = 0; i < 4; i++) {
    buttonGen = 1 + Math.floor(Math.random() * (20));
    gemsArr.push(buttonGen);
    //console.log(gemsArr);
    }
    console.log(gemsArr);
    yourScore = 0;
    $("#display").text(yourScore);

    // Assigns the values of the gems
    blueGem = $("#blue-gem");
    blueGem.attr("data-gem", gemsArr[0]);

    clearGem = $("#clear-gem");
    clearGem.attr("data-gem", gemsArr[1]);

    redGem = $("#red-gem");
    redGem.attr("data-gem", gemsArr[2]);

    greenGem = $("#green-gem");
    greenGem.attr("data-gem", gemsArr[3]);
}

// Gets values of gems
function start() {
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
 
// ----------------------------------------------------    
    if (yourScore > numberToGuess) {
        console.log("your score has passed the number you're guessing.");
        lossCounter++;
        // checks if losses is even
        if (isEven(lossCounter)){
            $("#result").text("You took too many! CRACK! The cave comes"
            +" crashing down. Rocks spilling from the cave ceiling. You"
            + " can barely hear large boulders scrape against one another."
            + " and took your life with it. A giant rock ball comes from"
            + " behind and flattens you. As you fall unconscious, you see"
            + " a faint light. 'You must try again...'");
        } else {
            $("#result").text("You took too many! The cave rumbles."
            + " You hear a SNAP above you. As you look up, you are"
            + " impaled by a falling crystal shard. As your vision blacks out"
            + " a chilling voice whispers 'You still owe me money...'");
        }
        $("#losses").text(lossCounter);
        $("#hide").show();
        reset();
    } else if (yourScore === numberToGuess){
        console.log("your score is equal to the number you're guessing.");
        winCounter++;
        // checks if wins is even
        if (isEven(lossCounter)){
            $("#result").text("You did it! You retrieved the crystals from"
            + " the Crystal Cavern, or as it is commonly called by the locals,"
            + " The Cavern of Death. As you exit the cave you expect to be"
            + " greeted by cheering crowds. What an acheivement! As soon as"
            + " your eyes adjust to the sunlight you see a man dressed in a"
            + " black suit waiting for you. \"Not this again...\" you mutter."
            + " \"You still owe the boss millions\" said the man. \"We'll hold"
            + " onto this while you go in and get some more...\"");
        } else {
            $("#result").text("You can't go back out the front... THEY will get"
            + " you. If they get to you, bad things could happen. You search for"
            + " another way out of this forsaken cavern. You see an archway with"
            + " a glow casting light through into the cave. Excitedly you rush"
            + " through. \"Oh sunlight, never have I been so happy to see you--\""
            + " This was no sunlight. It is another magic crystal room, and to"
            + " get out, you have to collect more crystals...");
        }
        $("#wins").text(winCounter);
        $("#hide").show();
        reset();
    }
    })
}

start();

});