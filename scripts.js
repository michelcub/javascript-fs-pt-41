// FUNCIONES


// Notación tradicional



const name = 'Hola'

function greet (name) {
    console.log(`Hello, ${name}!`);
}

// console.log(name);

// greet('Otro ejemplo');

// greet();

// return

// function sum (firstNumber, secondNumber) {
//     const result = firstNumber + secondNumber;
//     return result;
// }

// sum(1, 1) // 2
2

// const firstSumResult = sum(1, 2);
// const secondSumResult = sum(12,323);
// const thirdSumResult = sum(79, 1561);
// const fourthSumResult = sum(firstSumResult, secondSumResult);

// console.log(firstSumResult + secondSumResult + thirdSumResult)



function textToLowerCase (text) {
    return text.toLowerCase();
}

const myText = 'LOREM IPSUM';
const anotherText = 'ipsum LOREM';

const result = textToLowerCase(myText)

console.log(result);


// EC6 -> Arrow function

function exampleFuncion (text) {
    return text.toLowerCase();
}

const arrow = text => text.toLowerCase();


// const myFirstArrowFunction = text => text.toLowerCase();

console.log(myFirstArrowFunction('HOLA!'));