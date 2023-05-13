/*
    En cualquier lenguaje de programación existen diferentes
    tipos de datos, que también conocemos como ESTRUCTURAS
    DE DATOS.

    La clave es que cada tipo de dato nos permite hacer unas
    operaciones diferentes. Por ejemplo, podemos contar las
    letras de una palabra (string) o sumar dos números
    decimales (number)
*/

// EN JS HAY 5 TIPOS DE DATOS PRIMITIVOS BÁSICOS

// 1. BOOLEAN
// Sus valores son true y false y los utilizamos para gestionar
// estructuras de control (se verán más adelante)

const isLoggedIn = true;
const isLoading = false;

// 2. STRING
// Son cadenas de texto y solemos utilizarlas para darle feedback
// al usuario o hacer transformaciones (comparar, buscar texto,
// convertir a mayúsculas, sustituir caracteres, añadir prefijos...)

const doubleQuote = "Hello!" // Podemos declararlas con comillas dobles...
const singleQuote = 'World!' // ...o simples

// Cada tipo de dato tiene sus propias propiedades nativas:

const numberOfCharacters = doubleQuote.length;

// Y también sus métodos nativos:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

doubleQuote.toLowerCase();
doubleQuote.endsWith('!');
doubleQuote.includes('world');

// 3. NUMBER
// Nos permiten hacer operaciones aritméticas

const positiveInteger = 1; // Pueden ser enteros
const negativeInteger = -1; // También negativos
const exampleFloat = 1.1; // Y decimales

const weirdExample = Infinity; // JS también acepta el infinito...
const anotherWeirdExample = NaN; // Y números que no son números!

// 4. UNDEFINED
// Implica que una variable existe, pero todavía no tiene un valor
// definido

let thisIsUndefined;

// 5. NULL
// Implica que una variable existe y que no tiene valor

const thisIsNull = null;

// También tenemos otro dato primitivo, el BigInt, que nos permite almacenar
// números de "preción arbitraria": https://en.wikipedia.org/wiki/Arbitrary-precision_arithmetic 

// Por último, hay otro dato primitivo, el Symbol, pero no lo veremos
// en clase -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol