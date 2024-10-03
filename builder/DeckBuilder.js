import {Deck} from "../Deck.js"
import { Card } from "../Card.js";

/**
 * Esta clase es una especie de uso del patron builder pero más 
 */
export class DeckBuilder {

    /**
     * Un constructor que nos sirve para crear el array que luego vamos a devolver 
     */
    constructor() {
        this.deck = [];
    }

    /**
     * Este es el metodo que se ejecuta al final en gestion. Tras haber hecho todo usamos
     * el buil para crear la baraja
     * @returns {Deck} Devuelve la baraja que se crea en esta clase
     */
    build() {
        return new Deck(this.deck);
    }

    /**
     * 
     * @param {Object} type 
     * @returns {Object} Devuelve la propia instancia de DeckBuilder
     */
    whichType(type) {
        switch(type.name) {
            case "Spanish Deck": this.createSpanishDeck(type);
                break;
            case "Poker Deck": this.createPokerDeck(type);
                break;
            default: console.log("el tipo de baraja no encaja"); //Mirar los errores más adelante
                break;
        }

        //Este return this hace que devuelva el objeto entero. Esto se hace porque a la
        //hora de ejecutar un metodo sobre el deckBuilder tiene que devolver algo si no
        //se ejecuta pero no devuelve nada
        return this;
    }

    /**
     * Este es un metodo que se usa para quitar cartas
     * @param {Array} cardOut 
     * @returns {Object} Devuelve la propia instancia de DeckBuilder
     */
    whichCardOut(cardOut) {
        this.deck = this.deck.filter((element) => !cardOut.includes(element.nameOfCard));

        return this;
    }

    /**
     * Creamos un método para hacer una baraja española
     * @param {Object} type Este es un objeto JSON
     */
    createSpanishDeck(type) {

        let changeSuit = 0;

        for(let i = 0; i < type.number; i++) {
            this.deck.push(new Card((i % 12 + 1) + "", type.suit[changeSuit]));

            if(i % 12 == 11) {
                changeSuit++;
            }
        }

    }

    /**
     * Creamos  un método para hacer una baraja de poker
     * @param {Object} type Este es un objeto JSON
     */
    createPokerDeck(type) {

        let changeSuit = 0;
        let cardWhithNumber = type.number - (type.specialCard.length * 4);

        for(let i = 0; i < cardWhithNumber; i++) {
            this.deck.push(new Card((i % 9 + 2) + "", type.suit[changeSuit]));

            if (i % 9 == 8) {
                type.specialCard.forEach(element => {
                    this.deck.push(new Card(element, type.suit[changeSuit]));
                });
                changeSuit++;
            }
        }
    }

}