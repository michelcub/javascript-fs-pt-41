



    function countFunction () {
const prompt = require('prompt-sync')({ sigint: true });

const text = prompt('Insert text here');

const words = text.split(" ");

console.log(`La frase "${text}" contiene ${text.length} letras y ${words.length} palabras.`)
} 

countFunction();




// const prompt = require('prompt-sync')({ sigint: true });
// const text = prompt('Insert text here');

// const words = text.split(" ");

// console.log(`${text.length} ${words.length}`)


