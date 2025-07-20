const rockButton = document.getElementById("rock_button") //Rock image input on screen 2
const sissorButton = document.getElementById('sissor_button')//Sissor image input on screen 2
const paperButton = document.getElementById('paper_button')//Paper image input on screen 2
const form = document.getElementById('form')//Links to the form
const scoreReset = document.getElementById('scoreReset')//Links to the reset button
let userInput = document.getElementById('user-input') //Links to use form
let computerChoice = document.getElementById('computerChoice')//Links to computer's choice
let winValue = document.getElementById('winValue')//Win value on score board
let winCount = 0
let tieValue = document.getElementById('tieValue')//Tie value on score board
let tieCount = 0
let lossValue = document.getElementById('lossValue')//Loss value on score board
let lossCount = 0
let randomNumberGen //gernates random number
let message = [] //Displays messages to the user

// I gave each input a value | rock = 1 , sissor = 2 , paper = 3
//Form validation for the user text input on Screen 1
form.addEventListener('submit', (e) => { //Converts user input into a value that can be checked within the if statments
    e.preventDefault()
    if (userInput.value == 'rock' || userInput.value == 'Rock') {
        rockChoice() //Function for if their is a rock input
        computerChoice.innerText = message
    }
    else if (userInput.value == "sissors" || userInput.value == "Sissors") {
        sissorChoice() //Function for if there is a sissors input
        computerChoice.innerText = message
    }
    else if (userInput.value == "paper" || userInput.value == "Paper") {
        paperChoice()//Function for if there is a paper input
        computerChoice.innerText = message
    }
    else { //If the correct input isn't inputed
        computerChoice.innerText = 'Input valid submissions of rock, paper, or sissors'
    }

})

scoreReset.addEventListener('click', (e) => { //Resets Score Board, Computer Choice, and User Input
    window.location.reload()
})

//When the rock, paper, or sissors image is clicked it will generate a random number. The function adds the value of the user's choice and the random number to 
// Decide if the user wins, looses, or ties
rockButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1; //Math.random allows for a random number to generate Math.floors rounds the value down 
    // The *3 gives the max value of the random number and + 1 allows for the random number to not have a 0 value
    rockChoice()
    computerChoice.innerText = message
});

sissorButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    sissorChoice()
    computerChoice.innerText = message

});

paperButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    paperChoice()
    computerChoice.innerText = message

});




//Adds the random number value + the rock, paper, and sissors value. The value is compared and adds 1 to either the the winCount, tieCount, lossCount based on the computer's
//choice. Then the contents of the __count is assigned to the score board's value
function rockChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + Number(rockButton.value) == 2) { //Rock vs Rock 
        message = "Tie, I Picked Rock Too"
        tieCount++;
        tieValue.textContent = tieCount;
    }
    else if (randomNumberGen + Number(rockButton.value) == 3) { //Rock vs Sissors
        message = 'You Win, I Picked Sissors'
        winCount++;
        winValue.textContent = winCount;
    }
    else if (randomNumberGen + Number(rockButton.value) == 4) { //Rock vs Paper
        message = 'You Lose, I Picked Paper'
        lossCount++;
        lossValue.textContent = lossCount;
    }
}
function sissorChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + 2 == 3) { // Sissors vs Rock 
        message = "You Lose, I Picked Rock"
        lossCount++;
        lossValue.textContent = lossCount;
    }
    else if (randomNumberGen + 2 == 4) { // Sissors vs Sissors
        message = 'Tie, I Picked Sissors Too'
        tieCount++;
        tieValue.textContent = tieCount;
    }
    else if (randomNumberGen + 2 == 5) { // Sissors vs Paper
        message = 'You Win, I Picked Paper'
        winCount++;
        winValue.textContent = winCount
    }
}

function paperChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + 3 == 4) { // Paper vs Rock 
        message = "You Win, I picked rock"
        winCount++;
        winValue.textContent = winCount
    }
    else if (randomNumberGen + 3 == 5) { // Paper vs Sissors
        message = 'You Lose, I Picked Sissors'
        lossCount++;
        lossValue.textContent = lossCount;
    }
    else if (randomNumberGen + 3 == 6) {// Paper vs Paper
        message = 'Tie, I Picked Paper Too'
        tieCount++;
        tieValue.textContent = tieCount;
    }
}