import {wordCheck, getSpellWord, getCheckStatus, getStatusArray} from "/games-and-apis/projects/wordle/wordle.js";
let count = 0;

function updateUI(){
    let handler = document.getElementById("wordleHandler");
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
    let threeOne = document.getElementById("rowOneThree");
    let threeTwo = document.getElementById("rowTwoThree");
    let threeThree = document.getElementById("rowThreeThree");
    let threeFour = document.getElementById("rowFourThree");
    let threeFive = document.getElementById("rowFiveThree");
    let fourOne = document.getElementById("rowOneFour");
    let fourTwo = document.getElementById("rowTwoFour");
    let fourThree = document.getElementById("rowThreeFour");
    let fourFour = document.getElementById("rowFourFour");
    let fourFive = document.getElementById("rowFiveFour");
    let fiveOne = document.getElementById("rowOneFive");
    let fiveTwo = document.getElementById("rowTwoFive");
    let fiveThree = document.getElementById("rowThreeFive");
    let fiveFour = document.getElementById("rowFourFive");
    let fiveFive = document.getElementById("rowFiveFive");
    let status = document.getElementById("statusMessage");

    let theWord = getSpellWord();
    let winStatus = getCheckStatus();
    console.log(theWord);


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
        } else if(count ==2){
            threeOne.appendChild(squareOne);
            threeTwo.appendChild(squareTwo);
            threeThree.appendChild(squareThree);
            threeFour.appendChild(squareFour);
            threeFive.appendChild(squareFive);
        } else if (count == 3){
            fourOne.appendChild(squareOne);
            fourTwo.appendChild(squareTwo);
            fourThree.appendChild(squareThree);
            fourFour.appendChild(squareFour);
            fourFive.appendChild(squareFive);
        } else if (count == 4){
            fiveOne.appendChild(squareOne);
            fiveTwo.appendChild(squareTwo);
            fiveThree.appendChild(squareThree);
            fiveFour.appendChild(squareFour);
            fiveFive.appendChild(squareFive);
            handler.style.display = "none";
        }
        
        console.log(guess);
        wordCheck(guess);

        function updateColors(){
            console.log('updateColors called');
            console.log('Current count:', count);

            let yesMaybeNo = getStatusArray();
            console.log('getStatusArray returned:', yesMaybeNo);

    
            const rowLabels = ["One","Two","Three","Four","Five"];
    
            for (let i = 0; i < 5; i++) { // Loop through each letter (column)
                // This will create IDs like "rowOneOne", "rowOneTwo", etc.
                let cellID = `row${rowLabels[count]}${rowLabels[i]}`;
                let cell = document.getElementById(cellID);

            console.log('Cell found:', cell);
    
                if(cell){
                    if(yesMaybeNo[i]==="yes"){
                        cell.style.backgroundColor = "green";
                        console.log("background color green");
                    } else if(yesMaybeNo[i] === "maybe"){
                        cell.style.backgroundColor = "yellow";
                        console.log("background color yellow");
                    } else console.log("no background color");
                }
            }
        };
        
        updateColors();


        if(winStatus == "win"){
            handler.style.display = "none";
            let winMessage = document.createElement("h2");
            winMessage.textContent = "You guessed It!";
            status.appendChild(winMessage);
        };

        count++;

        charOne.value = "";
        charTwo.value = "";
        charThree.value = "";
        charFour.value = "";
        charFive.value = "";
    })

;}



document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};