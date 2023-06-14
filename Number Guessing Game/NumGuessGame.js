//Number Guessing Game

const ans = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButn").onclick = function(){

    let guess = document.getElementById("myGuess").value;
    guesses += 1;

    if(guess == ans){
        alert(`${ans} is the #. It took you ${guesses} guesses`);
        console.log(`${ans} is the #. It took you ${guesses} guesses`);
    }
    else if(guess < ans){
        alert("Too Small !!");
    }
    else{
        alert("Too Large !!");
    }
}