import { updateUI } from "./ui.js";

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
    let spellThis = wordleChoices.randIndex;
    return spellThis;
}

let guessCount = 0;
let firstLetterStatus = "no";
let secondLetterStatus = "no";
let thirdLetterStatus = "no";
let fourthLetterStatus = "no";
let fifthLetterStatus = "no";

function playWordle(guess) {
    let firstLetter = spellThis[0];
    let secondLetter = spellThis[1];
    let thirdLetter = spellThis[2];
    let fourthLetter = spellThis[3];
    let fifthLetter = spellThis[4];

    function wordCheck(){
        if(guess[0] == firstLetter){
            firstLetterStatus = "yes";
            return firstLetterStatus;
        } else if (guess[0] == secondLetter || guess[0] == thirdLetter || guess[0] == fourthLetter || guess[0] == fifthLetter){
            firstLetterStatus = "maybe";
            return firstLetterStatus;
        } else firstLetterStatus = "no";

        if(guess[1] == secondLetter){
            secondLetterStatus = "yes";
            return secondLetterStatus;
        } else if (guess[1] == firstLetter || guess[1] == thirdLetter || guess[1] == fourthLetter || guess[1] == fifthLetter){
            secondLetterStatus = "maybe";
            return secondLetterStatus;
        } else secondLetterStatus = "no";

        if(guess[2] == thirdLetter){
            thirdLetterStatus = "yes";
            return thirdLetterStatus;
        } else if (guess[2] == firstLetter || guess[2] == secondLetter || guess[2] == fourthLetter || guess[2] == fifthLetter){
            thirdLetterStatus = "maybe";
            return thirdLetterStatus;
        } else thirdLetterStatus = "no";

        if(guess[3] == fourthLetter){
            fourthLetterStatus = "yes";
            return fourthLetterStatus;
        } else if (guess[3] == firstLetter || guess[3] == secondLetter || guess[3] == thirdLetter || guess[3] == fifthLetter){
            fourthLetterStatus = "maybe";
            return fourthLetterStatus;
        } else fourthLetterStatus = "no";

        if(guess[4] == fifthLetter){
            fifthLetterStatus = "yes";
            return fifthLetterStatus;
        } else if (guess[4] == firstLetter || guess[4] == secondLetter || guess[4] == thirdLetter || guess[4] == fourthLetter){
            fifthLetterStatus = "maybe";
            return fifthLetterStatus;
        } else fifthLetterStatus = "no";

        turnCount++;
    };


}

document.addEventListener("DOMContentLoaded",wordleWord());
console.log(spellThis);
