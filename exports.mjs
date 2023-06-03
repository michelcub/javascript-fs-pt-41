// NAMED EXPORTS
/*
PRO
- Podemos hacer varios por cada archivo
CON
- Cuando yo lo importe, tengo que utilizar su nombre
SINTAXIS
- export const myFunction = () => {}
- import { namedExport1, namedExport2, ... } from 'path';
*/

export const myExample = 'Esto es un ejemplo';
export const secondExample = 'Esto es otro ejemplo';

// DEFAULT EXPORTS
/*
PRO
- No necesito llaves para importar
- Puedo importar con cualquier nombre
CONS
- Solo puedo tener uno por archivo
SINTAXIS
- export default myFunction
- import defaultExport, { namedExport1, namedExport2 } from 'path';
*/

const defaultExample = 'Este es el ejemplo por defecto';

function myFunction() {
    console.log('Este es el export default!');
};

export default myFunction;