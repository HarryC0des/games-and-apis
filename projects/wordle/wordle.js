import { updateUI } from "/games-and-apis/projects/wordle/ui.js";
let spellThis = "";  // Global variable to store the generated word

function wordleWord(){
    const wordleChoices = [
        "apple", "brave", "charm", "dance", "eager",
        "frost", "glide", "haste", "ivory", "jolly",
        "knack", "lumen", "mirth", "noble", "ocean",
        "pearl", "quilt", "risky", "spend", "torch",
        "umbra", "vivid", "witty", "xenon", "yacht",
        "zesty", "about", "dream", "flint", "ghost",
        "humor", "juice", "logic", "magic", "night",
        "power", "queen", "robot", "smile", "tiger",
        "unity", "voice", "wagon", "youth", "zebra",
        "ankle", "bloom", "cloud", "drone", "earth",
        "fungi", "grape", "heart", "igloo", "joker",
        "kiosk", "light", "maple", "novel", "onion",
        "plush", "quilt", "rover", "spoon", "truck",
        "urban", "vault", "waltz", "xenia", "yodel",
        "zoned", "angel", "beige", "chime", "drink",
        "enjoy", "focus", "guide", "hotel", "image",
        "jumbo", "kayak", "lucky", "music", "never",
        "olive", "prism", "quiet", "royal", "swift",
        "taste", "uncle", "virus", "whale", "xrays",
        "yield", "zoom", "arrow", "banjo", "coral",
        "daisy", "elbow", "fence", "glory", "hazel",
        "idiot", "jelly", "koala", "lucky", "mixer",
        "nymph", "opera", "prize", "quote", "radio",
        "space", "tango", "usher", "video", "waste",
        "xerox", "young", "zones", "abyss", "blend",
        "coast", "drape", "elder", "flick", "grasp",
        "hedge", "ivory", "jaunt", "kneel", "limbo",
        "midst", "noble", "orbit", "peace", "quest",
        "rural", "sushi", "track", "unity", "verse",
        "water", "xerox", "yacht", "zesty", "amend",
        "blink", "crash", "dwarf", "event", "frown",
        "giant", "hobby", "ideal", "judge", "kite",
        "lunar", "minor", "nudge", "oasis", "plant",
        "quake", "relax", "swarm", "table", "unify",
        "vapor", "woven", "xerox", "yield", "zoned"
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
