import { updateUI } from "/games-and-apis/projects/wordle/ui.js";
let spellThis = "";  // Global variable to store the generated word

async function wordleWord(){
    try {
        const response = await fetch('https://raw.githubusercontent.com/tabatkins/wordle-list/main/words');
        if (!response.ok) throw new Error('Failed to fetch word list');
        
        const text = await response.text();
        const words = text.split('\n'); // Split by new lines to get individual words
        spellThis = words[Math.floor(Math.random() * words.length)]; // Pick a random word

        console.log(spellThis); // Output the random word
        return spellThis;
    } catch (error) {
        console.error('Error fetching word list:', error);
        return null;
    }
};

document.addEventListener("DOMContentLoaded", function() {
    await wordleWord();  // Initialize spellThis when DOM is ready
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

function wordCheck(guess) {
    function wordCheck(guess) {
        let letterCount = {}; // Track how many times each letter appears in spellThis
        let guessStatus = ["no", "no", "no", "no", "no"]; // Default all to "no"
    
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
        
        console.log(guessStatus);
        guessCount++;
        return [guessStatus, gameStatus];
    };

function getStatusArray(){
    return guessStatus;
};

export {wordCheck, getSpellWord, getStatusArray};
