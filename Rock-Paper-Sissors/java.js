const rockButton = document.getElementById("rock_button")
const sissorButton = document.getElementById('sissor_button')
const paperButton = document.getElementById('paper_button')
const form = document.getElementById('form')
const guess = document.getElementById('compGuess')
let randomNumberGen
//Math.random allows for a random number to generate


guess.addEventListener('click', (e) => {
    randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)
    e.preventDefault()
})

rockButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen === 1) { //Rock vs Rock 
        console.log("Tie")
    }
    else if (randomNumberGen === 2) { //Rock vs Sissors
        console.log('You Win')
    }
    else if (randomNumberGen === 3) ( //Rock vs Paper
        console.log('You Lose')

    )

    console.log("Rock" + rockButton.value)
});

sissorButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen === 1) { // Sissors vs Rock 
        console.log("You Lose")
    }
    else if (randomNumberGen === 2) { // Sissors vs Sissors
        console.log('Tie')
    }
    else if (randomNumberGen === 3) ( // Sissors vs Paper
        console.log('You Win')

    )
});

paperButton.addEventListener('click', (e) => {
    e.preventDefault()
    randomNumberGen = randomNumberGen = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumberGen)

    if (randomNumberGen === 1) { // Paper vs Rock 
        console.log("You Win")
    }
    else if (randomNumberGen === 2) { // Paper vs Sissors
        console.log('You Lose')
    }
    else if (randomNumberGen === 3) (// Paper vs Paper
        console.log('Tie')

    )
});


// } else if (rockButton + randomNumberGen == 3) {



