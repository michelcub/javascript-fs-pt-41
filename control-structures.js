const prompt = require ("prompt-sync") ({sigint: true});
// Estructuras de control
// - condicionales: if / else
// bucles: for / while

// CONDICIONALES

const LEGAL_AGE = 18;

const userInput = prompt("Edad del usuario:");
const userAge = Number(userInput);


if (userAge >= LEGAL_AGE) {
    console.log("Aqui tienes tu entrada");
} else if (userAge === LEGAL_AGE){
    console.log("Te vendo la entrada, por poco");
} 
else {
    console.log("Lo siento, no puedo venderte una entrada");
}