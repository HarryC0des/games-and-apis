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
    let oneTwo = document.getElementById("rowOneTwo");
    let oneThree = document.getElementById("rowOneThree");
    let oneFour = document.getElementById("rowOneFour");
    let oneFive = document.getElementById("rowOneFive");
    let twoOne = document.getElementById("rowTwoOne");
    let twoTwo = document.getElementById("rowTwoTwo");
    let twoThree = document.getElementById("rowTwoThree");
    let twoFour = document.getElementById("rowTwoFour");
    let twoFive = document.getElementById("rowTwoFive");
    let threeOne = document.getElementById("rowThreeOne");
    let threeTwo = document.getElementById("rowThreeTwo");
    let threeThree = document.getElementById("rowThreeThree");
    let threeFour = document.getElementById("rowThreeFour");
    let threeFive = document.getElementById("rowThreeFive");
    let fourOne = document.getElementById("rowFourOne");
    let fourTwo = document.getElementById("rowFourTwo");
    let fourThree = document.getElementById("rowFourThree");
    let fourFour = document.getElementById("rowFourFour");
    let fourFive = document.getElementById("rowFourFive");
    let fiveOne = document.getElementById("rowFiveOne");
    let fiveTwo = document.getElementById("rowFiveTwo");
    let fiveThree = document.getElementById("rowFiveThree");
    let fiveFour = document.getElementById("rowFiveFour");
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
        console.log("winstatus from update UI: ", winStatus);


        if(winStatus === "win"){
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