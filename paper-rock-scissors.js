const prompt = require('prompt-sync')({ sigint: true });

let userNumber = 0;
let computerNumber = 0;

const returnResult = (userNumber, computerNumber) => {
    if (userNumber === computerNumber) {
        console.log('Es un empate!!')
    } else if (userNumber === 1 && computerNumber === 2) {
        console.log('Perdiste!!')
    } else if (userNumber === 1 && computerNumber === 3) {
        console.log('Ganastes!!')
    } else if (userNumber === 2 && computerNumber === 3) {
        console.log('Perdiste!!')
    } else if (userNumber === 2 && computerNumber === 1) {
        console.log('Ganastes!!')
    } else if (userNumber === 3 && computerNumber === 1) {
        console.log('Perdiste!!')
    } else if (computerNumber === 3 && userNumber === 2) {
        console.log('Ganastes!!')

    }
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



const generateComputerNumber = () => Math.floor((Math.random() * 3) + 1);
computerNumber = generateComputerNumber();



console.log(`Has elegido ${selectionToString(userNumber)}`)
console.log(`La máquina ha elegido ${selectionToString(computerNumber)}`)


returnResult(userNumber, computerNumber);