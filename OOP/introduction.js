const tatooine =  {
    climate: "Arid",
    diameter: "10465",
    gravity: "1 standard",
    name: "Tatooine",
    orbital_period: "304",
    population: "200000",
    residents: [
      "https://www.swapi.tech/api/people/1/",
      "https://www.swapi.tech/api/people/2/",
    ],
    greet: () => console.log('Hola!')
}; // OBJECT LITERAL

// console.log(tatooine.climate);

// descripción del mundo real

// ENCAPSULACIÓN -> Datos públicos vs. Datos privados
// HERENCIA -> 
const myNewPlanet = { ...tatooine };
myNewPlanet.officialLanguage = 'asdf';

// console.log(myNewPlanet);
// POLIMORFISMO

myNewPlanet.greet = () => console.log('Hello!');

tatooine.greet();
myNewPlanet.greet();