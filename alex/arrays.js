// ARRAY = LISTA

const age = 24;

const age2 = 33;

const age3 = 32;

// para hacerlo en arrays se tendria que hacer así 

const ages = [24,33,32];

console.log(ages[0]);

// total de edades

console.log(ages.length);

// const average = (age1 + age2 +age3) / 3;

let variableExample = 5;

variableExample = 10;
listExample = [1,2,3];

listExample[1] = 22; // listExample[1] es la posición de la lista, en este caso el núero 2 ( siempre se empieza contando con 0)

console.log(listExample[1]);

// .filter = coge una lista y muestra los que cumplen la condición

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

//.forEach

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

//.map

var numbers = [1, 5, 10, 15];
var doubles = numbers.map(function(x) {
   return x * 2;
});
// doubles is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(function(num) {
    return Math.sqrt(num);
});
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]

//.find

const array = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12





