const prompt = require('prompt-sync')({ sigint: true });
const countLetters= "countLetters";
const generatePass="generatePass";
const calculator="calculator";
const findWords="findWords";
const generateRamdomNumbers="generateRamdomNumbers";
const rockPaperScissors= "rockPaperScissors";
const blackjack="blackjack";

let selectedApp=0;
const promptForApp=()=>{
    const welcomeMessage=prompt (`Hola, elige una aplicacion:
    1. Contar letras.
    2. Generar contraseña.
    3. Calculadora.
    4. Encontrar palabras.
    5. Generar numeros aleatorios.
    6. Piedra papel tijera.
    7. Blackjack.`);

return Number(welcomeMessage);
}




while(selectedApp===0||selectedApp>7)
{
    selectedApp=promptForApp();
    switch(selectedApp){

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
        console.log(generateRamdomNumbers);
        break;
        case 6:
        console.log(rockPaperScissors);
        break;
        case 7:
        console.log(blackjack);
        break;
        default:
            console.log("Seleccion incorrecta.");
            break;
    }
}