//Notación tradicional

const miNombre = "Dani"

function greet (name) {
    console.log(`Hello, ${name}`)
}

greet(miNombre);

//Anonymous functions (Arrow functions)

const myFirstArrowFunction = text => text.toLowerCase();

console.log(myFirstArrowFunction("HOLA!"));
