const prompt = require('prompt-sync')({ sigint: true });

const countLetters = "countLetters";

const generatePass = "generatePass";

const calculator = "calculator";

const findWords = "findWords";

const generateRandomNumbers = "generateRandomNumbers";

const rockPaperScissors = "rockPaperScissors";

const blackjack = "blackjack";

let selectedApp = 0;

const promptForApp = () => {
   
    const welcomeMessage = prompt(`Hola, elige una aplicación:
    1. Contar letras
    2. Generar contraseña
    3. Calculadora
    4. Encontrar palabras
    5. Generar número aleatorio
    6. Piedra, papel, tijera
    7. Blackjack
    
    `);

   return Number(welcomeMessage);
    
} 

while (selectedApp === 0 || selectedApp > 7) {
   selectedApp = promptForApp();
}

switch (selectedApp) {
    case 1:
        console.log(countLetters);
        break;
    case 2:
        console.log(generatePass);
        break;
    case 3:
        console.log(calculator);
        break;
    case 4:
        console.log(findWords);
        break;
    case 5:
        console.log(generateRandomNumbers);
        break;
    case 6:
        console.log(rockPaperScissors);
        break;
    case 7:
        console.log(blackjack);
        break;
    default:
        console.log(`Esa aplicación no existe`)


}

//El switch se puede reemplazar con if...else
// if (selectedApp === 1) {
//     console.log(countLetters);
// } else if (selectedApp === 2) {
//     console.log(generatePass);
// } else if (selectedApp === 3) {
//     console.log(calculator);
// } else if (selectedApp === 4) {
//     console.log(findWords);
// } else if (selectedApp === 5) {
//     console.log(generateRandomNumbers);
// } else if (selectedApp === 6) {
//     console.log(rockPaperScissors);
// } else if (selectedApp === 7) {
//     console.log(blackjack);
// } else {console.log(`Esa aplicación no existe`)}