/*
    Las VARIABLES son nuestra forma de almacenar la
    información con la que vamos a trabajar.

    - Funcionan como "cajas", que guardan datos dentro.
    - Tienen un nombre, que funciona como las etiquetas
    de las cajas cuando nos mudamos: nos permiten saber
    qué hay dentro.
*/

// Lo primero que debemos hacer con una variable es declararla.
// Al declarar una variable, hacemos que el programa sea
// consciente de que existe:

var oldVariable; // Variable "antigua". Ya no las utilizamos

let newVariable; // Esta es la sintaxis actual

// Podemos ASIGNAR valores a nuestras variables. Esta es la forma
// en que les metemos contenido dentro

newVariable = 'Hello, world!';

// Y podemos REASIGNAR valores, cambiando el valor viejo por el nuevo

newVariable = 'Ahora ya no contengo "Hello, world!"'

// También podemos ASIGNAR valores a la vez que DECLARAMOS la variable.
// De hecho, normalmente declaramos y asignamos en la misma línea

let anotherVariable = 'Hello, world!';

// Esta sintaxis nos permite utilizar constantes, que son como variables
// pero está prohibido cambiarles el valor

const myFirstConstant = 'Hello, world!';

/*
    Como ves, las constantes son más limitadas que las variables, ya que
    no podemos declararlas sin asignarles un valor ni reasignar valores
    una vez asignado el primero.

    Aunque esto pueda parecer negativo, como programadores nos interesa
    ponernos límites: reduce nuestras posibilidades de errar.

    De modo que siempre son preferibles las constantes a las variables.
*/