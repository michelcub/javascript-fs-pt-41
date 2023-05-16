// const templateLiteral = `This is a
// string!`;

// const myWebPage = `
// <html>
//     <head>
//         <title>This is my homepage!</title>
//     </head>
//     <body>
//         <h1>This homepage...</h1>
//         <p>...is made with JavaScript!</p>
//     </body>
// </html>
// `;

// const javaScript = 'world';

const titleText = 'Este es mi título';
const subtitleText = 'Ejemplo de componentes';
const mainText = `La clave de los componentes es que podemos reutilizarlos.
Además, podemos insertarles contenido en JS, de modo que cada vez que los utilicemos pueden ser "diferentes"!
`;
const secondaryText = `Esta es la clave de los sistemas como React`;

const createTitle = (text) => `<h1>${text}</h1>`;
const createSubtitle = (text) => `<h2>${text}</h2>`;
const createParagraph = (text) => `<p>${text}</p>`;
const createButton = (text, action, classes) => `
<button class='btn ${classes}' onclick="${action}">
    ${text}
</button>
`;

const createWebpage = (
    head = '',
    body = ''
) => `
<! DOCTYPE html>
<html>
    <head>
        ${head}
    </head>
    <body>
        ${body}
    </body>
</html>
`;

// SPREAD OPERATOR


// POINTER

const compositeBody = (...components) => {
    const result = components.join('\n');
    return `<main class="container">${result}</main>`;
};

const myWebpage = createWebpage(null, compositeBody(
    createTitle(titleText),
    createSubtitle(subtitleText),
    createParagraph(mainText),
    createParagraph('<strong>Esto es importante!</strong>')
));

// console.log(myWebpage);