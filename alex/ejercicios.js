const loremIpsumText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam sit amet magna nec dictum. Ut viverra mollis purus vel porta. Aenean ut sem fermentum enim viverra interdum vehicula eu nibh. Nullam accumsan tortor eu turpis egestas, et maximus mauris elementum. Vivamus varius vel lacus non tincidunt. Aenean vel arcu arcu.'
const stringUp = loremIpsumText.toLocaleUpperCase();
const stringDown = loremIpsumText.toLocaleLowerCase();

const changeChars = loremIpsumText.replaceAll("i", "O");

console.log(changeChars);

const splitLorem = loremIpsumText.split(' ')
const wordsLorem = splitLorem.length;

console.log(wordsLorem);

const sliceLorem = loremIpsumText.slice(-5, -3);

console.log(sliceLorem);

const lastExample = "       accumsan       "
const exampleTrim = lastExample.trim();

console.log(exampleTrim);