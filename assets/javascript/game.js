//need to define all of the words
var words = ["riesling", "sauvignon blanc", "pinot grigio", "chardonnay", "pinot noir", "syrah", "merlot", "cabernet sauvignon", "aglianico", "albarino", "aligote", "arneis", "barbera", "blaufrankisch", "lemberger", "kekfrankos", "cabernet franc", "carignan", "carmenere", "grand vidure", "chasselas", "chenin blanc", "cinsaut", "cortese", "corvina", 
"dolcetto", "furmint", "gamay", "gewurztraminer", "grenache", "garnacha", "gruner veltliner", "lambrusco", "malbec", "cot", "auxerrois", "malvasia", "marsanne", "mavrodaphne", "melon de bourgogne", "Mourvedre", "muller-thurgau", "muscadelle", "muscat", "muscat blanc a petits", "moscato", "brown muscat", "muscat canelli", "nebbiolo", "palomino", 
"petite syrah", "petite verdot", "pinot blanc", "pinot meunier", "pinotage", "prosecco", "roussanne", "sangiovese", "brunello", "prugnolo", "scheurebe", "semillon", "sylvaner", "tannat", "tempranillo", "tinto de toro", "tinto fino", "tinta roriz", "torrontes", "touriga nacional", "trebbiano", "ugni blanc", "verdelho", "godello", "viognier", 
"viura", "macabeo", "xinomavro", "zinfandel", "primitivo"]

//Given more time I would have made the words array into an array of objects containing for example: {name: "riesling", country: "Germany", region: "Alsace", color: "white"} and then spawn this information on the left side of the game as hints to help the user guess the type of wine that is being guessed, but I ran out of time.

var computerGuess = words[Math.floor(Math.random() * words.length)];
    console.log(computerGuess);

var wins = 0;
var answerArray = [];
var guessesRemaining = 15;
var lettersGuessed = [];


for (var i = 0; i < computerGuess.length; i++) {
    answerArray[i] = "_";
  }
  console.log(answerArray.join(" "));

var remainingLetters = computerGuess.length;

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase();
    lettersGuessed.push(userGuess);

    if (userGuess !== null) {
        
        // Update the game state with the guess
        for (var j = 0; j < computerGuess.length; j++) {
            if (computerGuess[j] === userGuess && userGuess !== lettersGuessed) {
                answerArray[j] = userGuess; 
                console.log(answerArray);
                remainingLetters--;
            } else {
                console.log("false");
            }

            if (remainingLetters === 0){
                wins++;
                //console.log(wins);
                //for some reason the wins would increase by more than 1 each time the word is successfully guessed. It would increase by the number of letters in the guessed word.     
            }
  
        }
    }
    document.querySelector("#wins-text").innerHTML = wins;
    document.querySelector("#currentWord-text").innerHTML = answerArray;
    document.querySelector("#guessesRemaining-text").innerHTML = guessesRemaining;
    document.querySelector("#lettersGuessed-text").innerHTML = lettersGuessed;
}


//I could not figure out how to reset the game once a word was guessed
//I could not figure out how to get the number of guesses remaining to reduce by only 1 each time
//When a wine varietal was successfully guessed I wanted to show a picture of an example wine label of a wine of that varietal. my goal was to make this into a semi educational game.
//I did not know how to remove the "," between each letter in the current word array.





    //var guess = prompt("Guess a letter, or click Cancel to stop playing."); 
    // if (userGuess === null) {
    //     break;
    // } else if (userGuess.length !== 1) {
    //     //alert("Please enter a single letter."); 
    // } else {
    //     // Update the game state with the guess
    //     for (var j = 0; j < computerGuess.length; j++) {
    //         if (computerGuess[j] === userGuess) {
    //             answerArray[j] = userGuess; 
    //             remainingLetters--;
    //         } else {
    //             guessesRemaining--;
    //             console.log(guessesRemaining);
    //         }
    //     }
    //     lettersGuessed.push(userGuess);
    //     console.log(lettersGuessed); 
    // }
//}
    //document.querySelector("#currentWord-text").innerHTML = underScore;
//}

// Show the answer and congratulate the player
//alert(answerArray.join(" "));
//alert("Good job! The answer was " + computerGuess);

//else run a function with the random word generator in it that will run whenever the remainingLetters is = 0


// for (var j = 0; j < words.length; j++) {

//     var guessesRemaining = words[j].length;
// }
//onload event or if the word is not correctly guessed then load computerGuess



// document.onkeyup = function(event) {
    
//     // Determines which key was pressed.
//     var userGuess = event.key.toLowerCase();

//     // Randomly chooses a choice from the options array. This is the Computer's guess.
    

//     function generateUnderScore() {
//         for (var i = 0; i < computerGuess.length; i++) {
//             answer[i] = "_";
//         }
//         s = answer.join(" ");
//         //document.getElementById("currentWord-text").innerHTML = s;
//         return answer;
//     }

//         if (userGuess.length > 0) {
//             for (var i = 0; i < computerGuess.length; i++) {
//                 if (computerGuess[i] === userGuess) {
//                     answer[i] = userGuess;
//                 }
//             }
//             lettersGuessed.push(userGuess);
//         }

//     // if (computerGuess.indexOf(userGuess) > -1) {
//     //     rightWord.push(userGuess);
//     //     userGuess = underScore[computerGuess.indexOf(userGuess)];

//     //     if (underScore.join("") == computerGuess) {
//     //         alert("You win!");
//     //     }
//     // }

//   for (var i = 0; i < computerGuess.length; i++) {

//       if (userGuess == computerGuess.charAt(i) ) {
//           lettersGuessed.push(userGuess);
//           console.log(userGuess);
//       }
//   }

    
//     document.querySelector("#currentWord-text").innerHTML = generateUnderScore();
//     document.querySelector("#lettersGuessed-text").innerHTML = lettersGuessed;
// };