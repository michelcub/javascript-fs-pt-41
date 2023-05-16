const promp = 'require'(prompt-sync)({sigint: true});

// ESTRUCTURAS DE CONTROL

// -CONDICIONALES: IF/ELSE

//BUCLES: FOR/WHILE



//CONDICIONALES



const LEGAL_AGE = 18;

const userInput = prompt('Edad del usuario: ');

const userAge = Number(userInput);

 if (LEGAL_AGE <= userAge) {

    console.log('Aquí tienes tu entrada');

 } else if (userAge === LEGAL_AGE) {

   console.log()


 }
 
 else{

   console.log('Lo siento, no puedo venderte la entrada');
 }