import { updateUI } from "/games-and-apis/projects/wordle/ui.js";
let spellThis = "";  // Global variable to store the generated word
let wordList = new Set();  // Store words in a Set for quick lookup
let gameStatus = "play";
let guessStatus = "";

// Fetch word list and store it in `wordList`
async function wordleWord() {
    try {
        const response = await fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words');
        if (!response.ok) throw new Error('Failed to fetch word list');
        
        const text = await response.text();
        const words = text.split('\n').map(word => word.trim().toLowerCase()); // Normalize case
        wordList = new Set(words); // Store in a Set for quick lookup

        // Pick a random word
        spellThis = words[Math.floor(Math.random() * words.length)];
        console.log("Generated Word:", spellThis); // Debugging
    } catch (error) {
        console.error('Error fetching word list:', error);
    }
};

// Check if a word is valid
function isValidWord(word) {
    return wordList.has(word.toLowerCase());
};

document.addEventListener("DOMContentLoaded", async function() {
    await wordleWord();  // Initialize spellThis when DOM is ready
});

function getSpellWord(){
    console.log("spell this:", spellThis);
    return spellThis;
}


let guessCount = 0;
let firstLetterStatus = "no";
let secondLetterStatus = "no";
let thirdLetterStatus = "no";
let fourthLetterStatus = "no";
let fifthLetterStatus = "no";

  function wordCheck(guess) {
    if(!isValidWord(guess)){
        console.log("Invalid word");

    }

        let letterCount = {}; // Track how many times each letter appears in spellThis
        guessStatus = ["no", "no", "no", "no", "no"];  
    
        // Count occurrences of each letter in spellThis
        for (let letter of spellThis) {
            letterCount[letter] = (letterCount[letter] || 0) + 1;
        }
    
        // Step 1: Check exact matches first (mark "yes")
        for (let i = 0; i < 5; i++) {
            if (guess[i] === spellThis[i]) {
                guessStatus[i] = "yes";
                letterCount[guess[i]]--; // Reduce count since it's correctly used
            }
        }
    
        // Step 2: Check misplaced letters (mark "maybe" only if available)
        for (let i = 0; i < 5; i++) {
            if (guessStatus[i] === "no" && letterCount[guess[i]] > 0) {
                guessStatus[i] = "maybe";
                letterCount[guess[i]]--; // Reduce count since it's now used
            }
        }

        if(guessStatus[0]=== "yes" && guessStatus[1]=== "yes" && guessStatus[2]=== "yes" && guessStatus[3]==="yes" && guessStatus[4]==="yes"){
            gameStatus = "win";
        }
        
        console.log(guessStatus);
        console.log(guessCount);
        guessCount++;

        return [guessStatus, gameStatus];
    };

    function getStatusArray(){
        return guessStatus;
    };

export {wordCheck, getSpellWord, getStatusArray, isValidWord};
