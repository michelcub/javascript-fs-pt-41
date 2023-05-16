
const add = (firstNumber,secondNumber) =>{
   
    return firstNumber + secondNumber;

}

const substract = () =>{
    return firstNumber - secondNumber;

}
const multiply = () => {

    return firstNumber * secondNumber;

}

const divide = () => {

    return firstNumber / secondNumber;

}




// las siguientes funciones son las mismas

function exampleFuncion (text){

    return text.toLowerCase();
}

// la primera es version function y la segunda versión arrow, pero el texto significa el mismo

const myFirstArrowFuncion = text => text.toLowerCase();

console.log(myFirstArrowFuncion('Hola'));