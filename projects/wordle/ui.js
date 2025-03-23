import {wordCheck} from "./wordle.js";
let count = 0;

function updateUI(){
    let charOne = document.getElementById("boxOne");
    let charTwo = document.getElementById("boxTwo");
    let charThree = document.getElementById("boxThree");
    let charFour = document.getElementById("boxFour");
    let charFive = document.getElementById("boxFive");
    let wordleBtn = document.getElementById("wordleBtn");
    let oneOne = document.getElementById("rowOneOne");
    let oneTwo = document.getElementById("rowTwoOne");
    let oneThree = document.getElementById("rowThreeOne");
    let oneFour = document.getElementById("rowFourOne");
    let oneFive = document.getElementById("rowFiveOne");
    let twoOne = document.getElementById("rowOneTwo");
    let twoTwo = document.getElementById("rowTwoTwo");
    let twoThree = document.getElementById("rowThreeTwo");
    let twoFour = document.getElementById("rowFourTwo");
    let twoFive = document.getElementById("rowFiveTwo");

    wordleBtn.addEventListener("click",function(){
        let guess = charOne.value+charTwo.value+charThree.value+charFour.value+charFive.value;
        let squareOne = document.createElement("p");
        squareOne.textContent = charOne.value;
        let squareTwo = document.createElement("p");
        squareTwo.textContent = charTwo.value;
        let squareThree = document.createElement("p");
        squareThree.textContent = charThree.value;
        let squareFour = document.createElement("p");
        squareFour.textContent = charFour.value;
        let squareFive = document.createElement("p");
        squareFive.textContent = charFive.value;
        
        if (count == 0){
            oneOne.appendChild(squareOne);
            oneTwo.appendChild(squareTwo);
            oneThree.appendChild(squareThree);
            oneFour.appendChild(squareFour);
            oneFive.appendChild(squareFive);
        } else if(count ==1){
            twoOne.appendChild(squareOne);
            twoTwo.appendChild(squareTwo);
            twoThree.appendChild(squareThree);
            twoFour.appendChild(squareFour);
            twoFive.appendChild(squareFive);
        }
        console.log(guess);
        wordCheck(guess);
        count++;
    })

;}



document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};