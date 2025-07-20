const rockButton = document.getElementById("rock_button")
const sissorButton = document.getElementById('sissor_button')
const paperButton = document.getElementById('paper_button')
const form = document.getElementById('form')
const guess = document.getElementById('compGuess')
let userInput = document.getElementById('user-input')
let randomNumberGen
let userResult
let userFinalAnswer
//Math.random allows for a random number to generate
// I gave each input a value | rock = 1 , sissor = 2 , paper = 3

form.addEventListener('submit', (e) => { //Converts user input into a value that can be checked within the if statments
    e.preventDefault()
    console.log(userInput.value)
    if (userInput.value == 'rock' || userInput.value == 'Rock') {
        rockChoice()

    }
    else if (userInput.value == "sissors" || userInput.value == "Sissors") {
        sissorChoice()

    }
    else if (userInput.value == "paper" || userInput.value == "Paper") {
        paperChoice()
    }
    else {
        console.log("input valid submission")
    }

})


guess.addEventListener('click', (e) => {
    randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    e.preventDefault()
})


rockButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    rockChoice()

});

sissorButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    sissorChoice()

});

paperButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    paperChoice()

});

function rockChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + Number(rockButton.value) == 2) { //Rock vs Rock 
        console.log("Tie")
    }
    else if (randomNumberGen + Number(rockButton.value) == 3) { //Rock vs Sissors
        console.log('You Win')
    }
    else if (randomNumberGen + Number(rockButton.value) == 4) ( //Rock vs Paper
        console.log('You Lose')
    )
}
function sissorChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + 2 == 3) { // Sissors vs Rock 
        console.log("You Lose")
    }
    else if (randomNumberGen + 2 == 4) { // Sissors vs Sissors
        console.log('Tie')
    }
    else if (randomNumberGen + 2 == 5) ( // Sissors vs Paper
        console.log('You Win')
    )
}

function paperChoice() {
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;

    if (randomNumberGen + 3 == 4) { // Paper vs Rock 
        console.log("You Win")
    }
    else if (randomNumberGen + 3 == 5) { // Paper vs Sissors
        console.log('You Lose')
    }
    else if (randomNumberGen + 3 == 6) (// Paper vs Paper
        console.log('Tie')
    )
}