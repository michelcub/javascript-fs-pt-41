const prompt = require('prompt-sync')({ sigint: true });

let userNumber = 0;
let computerNumber = 0;

const promptForUserSelection = () => {
    const userSelection = prompt(`
        Utiliza el número para seleccionar:
        1. Piedra
        2. Papel
        3. Tijera
    
    `);

    return Number(userSelection);
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

const returnResult = (userNumber, computerNumber) => {
    if (userNumber === computerNumber) {
        return '¡Es un empate!';
        
    } else if (userNumber === 1 && computerNumber === 3 || userNumber === 2 && computerNumber === 1 || userNumber === 3 && computerNumber === 2) {
        return '¡Has ganado!';

    } else {
        return '¡Has perdido!';
    }

}

while (userNumber === 0 || userNumber > 3) {
    userNumber = promptForUserSelection();
}



const generateComputerNumber = () => Math.floor((Math.random() * 3) + 1);
computerNumber = generateComputerNumber();



console.log(`Has elegido ${selectionToString(userNumber)}`);
console.log(`La máquina ha elegido ${selectionToString(computerNumber)}`);


console.log(returnResult(userNumber, computerNumber));