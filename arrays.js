// ARRAY = LISTA


const ages = [18, 19, 23, 17];
const names = ['Raspas', 'Chillin'];
const lists = [ [1, 'a'], [ 2, 'b'], ages ];


// console.log(ages[ages.length - 1]);

// const average = (age + age2 + age3 + age4) / 4;


const listExample = [ 1, 'ejemplo', 3 ];

let exampleListCopy = listExample;

exampleListCopy = 2;
// exampleListCopy.push('Otro elemento');

// console.log(listExample);
// console.log(exampleListCopy);


// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const countLetters = (word) => {
//     console.log(word.length)
// }

// words.forEach(countLetters);

const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const duplicate = (integer) => {
    console.log(integer * 2);
}

const newList = integers.map((integer) => integer * 2);

console.log(newList);

// .forEach
// .filter
// .map
// .find
