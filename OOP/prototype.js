const cat = {
    legs: 4,
    meow(){
        console.log('meeeeow!');
    }
};

// const zari = Object.create(cat);
// const raspas = Object.create(cat);

// console.log(zari);
// console.log(zari.__proto__);

// zari.legs = 8;

// zari.name = 'Zarigüeya';

// console.log(zari);

// console.log(zari.__proto__);

// zari.meow()

// Classes

class Animal {
    constructor(name) {
        this.name = name;
        this.talk = function () {
            console.log('...')
        }
    }
}

const randomAnimal = new Animal('Random Animal!');

randomAnimal.talk();

class Cat extends Animal {
    constructor(name) {

        super(name);

        this.talk = function () {
            console.log('meeeeow');
        }
    }
}

const zari = new Cat('Zarigüeya');

console.log(zari.name)