const prompt = require('prompt-sync')({ sigint: true });

const LEGAL_AGE = 18;


const userInput = prompt('Edad del usuario: ');
const userAge = Number(userInput);



if (userAge >= LEGAL_AGE) {
    console.log("Aquí está tu entrada");
} else if (userAge === LEGAL_AGE) {
    console.log("Te vendo la entrada, pero por poco");
} else {
    console.log("No puedo venderte entrada");
}

