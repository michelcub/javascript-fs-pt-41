const myLorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu.`;

 
let textLength = myLorem.length;

 const message = `La longitud de este texto es ${textLength}.`

const myLoremUp = myLorem.toUpperCase()
const myLoremLower = myLorem.toLowerCase()

let myLoremChange = myLorem.replaceAll('i','o');

let newArray = myLorem.split(' ');
let lengthArray = newArray.length;

 console.log(lengthArray);
