const randomnumber = Math.floor(Math.random()*99+1);
const userGuess = document.querySelector("#input");
const resultDiv = document.querySelector(".result");
const historyDiv = document.querySelector(".history");
const chanceDiv = document.querySelector(".chance");



historyDiv.innerHTML = "";

let chances = 5;

let isWin = false;

function game() {
    let result;
    let guess = userGuess.value;
    if (guess > 100 || guess < 1) {
        result = "Guess a number between 1 and 100";
        resultDiv.innerHTML = `<h4>${result}</h4>`;
    }else if (chances && !isWin) {
        let guess = userGuess.value;
        if (randomnumber == guess) {
            result = "You won!";
            isWin = true;
        } else if (randomnumber < guess) {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomnumber}`;
            }else {
                result = "You too high";
            }
        }else {
            if (chances == 1) {
                result = `Game Over!<br>The Number is ${randomnumber}`;
            }else {
                result = "You too low!";
            }
        }
    function re(){
        if (chances < 6 ) {
            chanceDiv.innerHTML = `<h4>Still you have 4 chances</h4>`;
        }
        if (chances < 5 ) {
            chanceDiv.innerHTML = `<h4>Still you have 3 chances</h4>`;
        }
        if (chances < 4 ) {
            chanceDiv.innerHTML = `<h4>Still you have 2 chances</h4>`;
        }
        if (chances < 3 ) {
            chanceDiv.innerHTML = `<h4>Still you have 1 chances</h4>`;
        }
        if (chances < 2 ) {
            chanceDiv.innerHTML = `<h4>Still you have 0 chances</h4>`;
        }
    }
    re()
        chances--;
        historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`;
        return resultDiv.innerHTML = `<h4>${result}</h4>`;
    }
    
    
}

function reload() {
    if (!chances || isWin) {
        location.reload();
    }
    
}