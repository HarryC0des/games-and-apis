import { updateUI } from "/games-and-apis/projects/wordle/ui.js";
let spellThis = "";  // Global variable to store the generated word

function wordleWord(){
    const wordleChoices = [
        "apple", "brave", "charm", "dance", "eager",
        "frost", "glide", "haste", "ivory", "jolly",
        "knack", "lumen", "mirth", "noble", "ocean",
        "pearl", "quilt", "risky", "spend", "torch",
        "umbra", "vivid", "witty", "xenon", "yacht",
        "zesty"
    ];

const randIndex = Math.floor(Math.random()*wordleChoices.length);
spellThis = wordleChoices[randIndex];
console.log(spellThis);
return spellThis;
};

document.addEventListener("DOMContentLoaded", function() {
    wordleWord();  // Initialize spellThis when DOM is ready
});

function getSpellWord(){
    return spellThis;
}


let guessCount = 0;
let firstLetterStatus = "no";
let secondLetterStatus = "no";
let thirdLetterStatus = "no";
let fourthLetterStatus = "no";
let fifthLetterStatus = "no";
let gameStatus = "play";

function wordCheck(guess) {
    let firstLetter = spellThis[0];
    let secondLetter = spellThis[1];
    let thirdLetter = spellThis[2];
    let fourthLetter = spellThis[3];
    let fifthLetter = spellThis[4];
    console.log("word check happened");

        if(guess[0] == firstLetter){
            firstLetterStatus = "yes";
        } else if (guess[0] == secondLetter || guess[0] == thirdLetter || guess[0] == fourthLetter || guess[0] == fifthLetter){
            firstLetterStatus = "maybe";
        } else firstLetterStatus = "no";

        console.log("First Letter is "+firstLetterStatus);

        if(guess[1] == secondLetter){
            secondLetterStatus = "yes";
        } else if (guess[1] == firstLetter || guess[1] == thirdLetter || guess[1] == fourthLetter || guess[1] == fifthLetter){
            secondLetterStatus = "maybe";
        } else secondLetterStatus = "no";

        console.log("Second Letter is "+secondLetterStatus);

        if(guess[2] == thirdLetter){
            thirdLetterStatus = "yes";
        } else if (guess[2] == firstLetter || guess[2] == secondLetter || guess[2] == fourthLetter || guess[2] == fifthLetter){
            thirdLetterStatus = "maybe";
        } else thirdLetterStatus = "no";

        if(guess[3] == fourthLetter){
            fourthLetterStatus = "yes";
        } else if (guess[3] == firstLetter || guess[3] == secondLetter || guess[3] == thirdLetter || guess[3] == fifthLetter){
            fourthLetterStatus = "maybe";
        } else fourthLetterStatus = "no";

        if(guess[4] == fifthLetter){
            fifthLetterStatus = "yes";
        } else if (guess[4] == firstLetter || guess[4] == secondLetter || guess[4] == thirdLetter || guess[4] == fourthLetter){
            fifthLetterStatus = "maybe";
        } else fifthLetterStatus = "no";

        checkStatus = checkStatusFunction();

        guessCount++;
        checkStatusFunction();

    console.log(gameStatus);
    console.log(guessCount);

    function checkStatusFunction(){
        if(firstLetterStatus == "yes" && secondLetterStatus == "yes" && thirdLetterStatus == "yes" && fourthLetterStatus == "yes" && fifthLetterStatus == "yes"){
            gameStatus = "win";
            console.log(gameStatus);
            return gameStatus;
        } else if (guessCount == 5 ){
            gameStatus = "over";
            return gameStatus;
        } else gameStatus = "play";
    };

};

function getCheckStatus(){
    return checkStatus;
};

function getStatusArray(){
    return [firstLetterStatus, secondLetterStatus, thirdLetterStatus, fourthLetterStatus,fifthLetterStatus];
};

export {wordCheck, getSpellWord, getCheckStatus, getStatusArray};
