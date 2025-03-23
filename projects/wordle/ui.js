import {wordCheck} from "./wordle.js";

function updateUI(){
    let charOne = document.getElementById("boxOne");
    let charTwo = document.getElementById("boxTwo");
    let charThree = document.getElementById("boxThree");
    let charFour = document.getElementById("boxFour");
    let charFive = document.getElementById("boxFive");
    let wordleBtn = document.getElementById("wordleBtn");
    let oneOne = document.getElementById("rowOneOne");
    let oneTwo = document.getElementById("rowOneTwo");
    let oneThree = document.getElementById("rowOneThree");
    let oneFour = document.getElementById("rowOneFour");
    let oneFive = document.getElementById("rowOneFive");

    wordleBtn.addEventListener("click",function(){
        let guess = charOne.value+charTwo.value+charThree.value+charFour.value+charFive.value;
        console.log(guess);
        wordCheck(guess);
    })

;}



document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};