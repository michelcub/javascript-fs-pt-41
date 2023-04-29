const myVariable = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu.";

const textLength = myVariable.length

const message = "La longitud de este texto es " + textLength;

console.log(message);

const myString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu.";
const stringUp = myString.toUpperCase();

const stringO = myString.replaceAll('i','o');                 

console.log(stringO);

const words = myString.split("i");
const wordsLenghth = words.length
console.log(words);

const index = myString.slice(-5, -3);
console.log(index);

const lastExample = "   accumsan   ";
const exampleTrim = lastExample.trim();
console.log(exampleTrim);