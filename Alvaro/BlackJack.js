//VARIABLES GLOBALES
const prompt = require('prompt-sync')({ sigint: true });
let deck = {
    diamonds: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    hearts: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    spades: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
    clubs: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
};
let handCards = [];
let crupierCards = [];
let sumaCrupier = 0;
let sumaPlayer = 0;
let seguirJugando = true;
let otherCard = false;
let finalizado = false;

//DECLARACION DE FUNCIONES
//FUNCION QUE SELECCIONA UNA CARTA ALEATORIA Y LA ELIMINA DE LA BARAJA
const ramdomCard = () => {
    console.log(deck);
    let card, cardRandom;
    const randomSuit = Math.floor(Math.random() * Object.keys(deck).length);
    console.log(randomSuit);
    switch (randomSuit) {
        case 0:
            cardRandom = Math.floor(Math.random() * deck.diamonds.length);
            card = deck.diamonds[cardRandom];
            console.log("Tu carta es" + card + "de diamantes.");
            deck.diamonds.splice(cardRandom, cardRandom);
            console.log(deck);
            break;
        case 1:
            cardRandom = Math.floor(Math.random() * deck.hearts.length);
            card = deck.hearts[cardRandom];
            console.log("Tu carta es" + card + "de corazones.");
            deck.hearts.splice(cardRandom, cardRandom);
            console.log(deck);
            break;
        case 2:
            cardRandom = Math.floor(Math.random() * deck.spades.length);
            card = deck.spades[cardRandom];
            console.log("Tu carta es" + card + "de picas.");
            deck.spades.splice(cardRandom, cardRandom);
            console.log(deck);
            break;
        case 3:
            cardRandom = Math.floor(Math.random() * deck.clubs.length);
            card = deck.clubs[cardRandom];
            console.log("Tu carta es" + card + "de treboles.");
            deck.clubs.splice(cardRandom, cardRandom);
            console.log(deck);
            break;
        default:
            break;

    }
    return card;
}
// FUNCION COGER CARTA
const getCard = () => {
    if (handCards.length === 0 && crupierCards.length === 0) {
        handCards.push(ramdomCard());
        handCards.push(ramdomCard());
        crupierCards.push(ramdomCard());
        crupierCards.push(ramdomCard());
    }
    else if (crupierCards.length > 0 && sumaCrupier < 17 && crupierCards.length < 3) {
        crupierCards.push(ramdomCard());
    }
    else if (otherCard === true) {
        handCards.push(ramdomCard());
    }
    console.log(deck);
    console.log(handCards);
    console.log(crupierCards);

}


//FUNCION SUMAR MANO
const sumHand = (handCards) => {
    let as = false;
    const handNum = handCards.map(function (str) {
        if (str === "K" || str === "Q" || str === "J") {
            return 10;
        }
        else if (str === "A") {
            as = true
            return 11;
        }
        else {
            return Number(str);
        }

    });
    let suma = handNum.reduce(function (total, num) {
        return total + num;
    }, 0);

    if (as === true && suma > 21) {
        suma = suma - 10;
    }
    return suma;
}

//FUNCION BLACKJASCK
const BlackJack = (sumaPlayer, sumaCrupier) => {
    if (sumaPlayer === 21 && sumaCrupier === 21) {
        console.log("JUEGO FINALIZADO --> EMPATE");
        finalizado = true;
    }
    else if (sumaCrupier === 21) {
        console.log("EL CRUPIER GANA EL JUEGO");
        finalizado = true;
    }
    else if (sumaPlayer === 21) {
        console.log("GANAS EL JUEGO");
        finalizado = true;
    }
    else if (sumaCrupier < 17 && crupierCards.length < 3) {
        getCard();
        
    }
}

//FUNCION DECISION COGER CARTA
const decision = () => {
    do {
        console.log("TUS CARTAS SON " + handCards);
        console.log("LA CARTA BOCA ARRIBA DEL CRUPIER ES: " + crupierCards[0])
        sumaPlayer = sumHand(handCards);
        if (sumaPlayer < 21) {
            let question = prompt('OTRA CARTA(S/N):');
            question === "S" ? otherCard = true : otherCard = false;


            if (otherCard === true) {
                getCard();
                sumaPlayer = sumHand(handCards);
            }
        }
        else {
            otherCard = false;
        }

    } while (otherCard === true && sumaPlayer < 21);
    return sumHand(handCards);
}

//FUNCION GANADOR

const ganador = (sumaPlayer, sumaCrupier) => {

    if (sumaPlayer > sumaCrupier && sumaPlayer < 22) {
        console.log("TU GANAS");
    }
    else if (sumaCrupier === 21 && sumaPlayer === 21) {
        console.log("EMPATE");
    }

    else if (sumaCrupier > 21 && sumaPlayer < 22) {
        console.log("TU GANAS");
    }
    else {
        console.log("GANA EL CRUPIER");
    }
}


//inicio del programa Blackjack
do {
    getCard();
    sumaCrupier = sumHand(crupierCards);
    sumaPlayer = sumHand(handCards);
    BlackJack(sumaPlayer, sumaCrupier);
    if (crupierCards.length>2)
        {sumaCrupier = sumHand(crupierCards);}
    if (!finalizado) {
        decision();
        console.log("TUS CARTAS SON: "+ sumaPlayer);
        console.log("LAS CARTAS DEL CRUPIER SON: "+ sumaCrupier);
        ganador(sumaPlayer,sumaCrupier);
    }


    let partida = prompt('OTRA PARTIDA(S/N):');
    partida === "S" ? seguirJugando = true : seguirJugando = false;
    deck = {
        diamonds: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        hearts: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        spades: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
        clubs: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    };
    handCards = [];
    crupierCards = [];

} while (seguirJugando);