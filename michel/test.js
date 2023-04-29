const prompt = require('prompt-sync')({sigint:true});

const name = prompt('como te llamas')
console.log(`hola, ${name}`)