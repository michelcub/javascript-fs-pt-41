const prompt = require('prompt-sync')({sigint:true});

const LEGAL_AGE = 18;

const userInputAge = prompt("Tu edad es: ");
const userAge = Number(userInputAge);

if(userAge > LEGAL_AGE){
    console.log('Aqui tienes tu entrada')
} else{
    console.log("Lo siento, no pueo vender la entrada")
}