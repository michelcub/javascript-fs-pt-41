const prompt = require('prompt-sync')({ sigint: true });

let userNumber = 0;
let computerNumber = 0;

const returnResult = (userNumber, computerNumber) => {
    
}

const selectionToString = (numero) => {
    switch (numero) {
        case 1:
            return "piedra";
        case 2:
            return "papel";
        case 3:
            return "tijera";
        default:
            console.log("Selección incorrecta")
    }

}


// Seleccionar piedra papel tijera
const promptForUserSelection = () => {

    const userSelection = prompt(`
        Utiliza el número para seleccionar:
        1. Piedra
        2. Papel
        3. Tijera
    
    `);

    return Number(userSelection);

}

while (userNumber === 0 || userNumber > 3) {
    userNumber = promptForUserSelection();
}



// Generar un número para la máquina
const generateComputerNumber = () => Math.floor((Math.random() * 3) + 1);

computerNumber = generateComputerNumber();

// Comparamos selección
console.log(`Has elegido ${selectionToString(userNumber)}`)
console.log(`La máquina ha elegido ${selectionToString(computerNumber)}`)


// Devolvemos resultado
returnResult(userNumber, computerNumber);
