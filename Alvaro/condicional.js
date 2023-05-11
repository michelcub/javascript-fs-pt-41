const prompt = require('prompt-sync')({ sigint: true });
const LEGAL_AGE=18;
const userAge= Number(prompt('Edad del usuario:'));

if (LEGAL_AGE<userAge){
    console.log(userAge);
}