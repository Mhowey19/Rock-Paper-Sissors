const rockButton = document.getElementById("rock_button")
const sissorButton = document.getElementById('sissor_button')
const paperButton = document.getElementById('paper_button')
const form = document.getElementById('form')
const guess = document.getElementById('compGuess')
let userInput = document.getElementById('user-input')
let randomNumberGen
let userResult
//Math.random allows for a random number to generate
// I gave each input a value | rock = 1 , sissor = 2 , paper = 3

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if (userInput.value == 'rock') {
        const userResult = 1
        console.log(userResult)
    }
    else {
        console.log('burber')
    }

})

console.log(Number(Number(rockButton.value)))


guess.addEventListener('click', (e) => {
    randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    e.preventDefault()
})

rockButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen + Number(rockButton.value) == 2) { //Rock vs Rock 
        console.log("Tie")
    }
    else if (randomNumberGen + Number(rockButton.value) == 3) { //Rock vs Sissors
        console.log('You Win')
    }
    else if (randomNumberGen + Number(rockButton.value) == 4) ( //Rock vs Paper
        console.log('You Lose')
    )
});


sissorButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen + Number(sissorButton.value) == 3) { // Sissors vs Rock 
        console.log("You Lose")
    }
    else if (randomNumberGen + Number(sissorButton.value) == 4) { // Sissors vs Sissors
        console.log('Tie')
    }
    else if (randomNumberGen + Number(sissorButton.value) == 5) ( // Sissors vs Paper
        console.log('You Win')

    )
});

paperButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen + Number(paperButton.value) == 4) { // Paper vs Rock 
        console.log("You Win")
    }
    else if (randomNumberGen + Number(paperButton.value) == 5) { // Paper vs Sissors
        console.log('You Lose')
    }
    else if (randomNumberGen + Number(paperButton.value) == 6) (// Paper vs Paper
        console.log('Tie')

    )
});
