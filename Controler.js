import {Type} from "./components/Type.js"
import {DeckBuilder} from "./builder/DeckBuilder.js"

/**
 * Esta clase controla todas las barajas
 * En el main solo interactuamos con esta clase
 * @author Francisco Manuel de Céspedes Díaz
 */
export class Controler {
    /**
     * Array de barajas.
     */
    decks = [];

    /**
     * Constructor vacio con el patron Singleton para solo poder crear una instancia de la clase
     */
    constructor() {
        if (Controler.instance) {
            throw new Error("No se puede crear más de una instancia de Gestion. Usa getInstance().");
        }
    }

    /**
     * Patron singleton
     * @returns {Controler} Devuelve una unica instancia de Controler
     */
    static getInstance() {
        if (!Controler.instance) {
            Controler.instance = new Controler();
        }
        return this.instance
    }

    /**
     * Uso del patron de diseño facade
     */
    createDeck(type, cardOut) {
        this.#setType(type);

        this.#setCardOut(cardOut);  //Tiene que ser un array de cartas

        this.decks.push(new DeckBuilder().whichType(this.#getType()).whichCardOut(this.#getCardOut()).build());
    }

    modifyDatas() {

    }

    /**
     * Uso del patron de diseño facade
     */
    startGame() {
        this.#shuffle();
        this.#distribute();
    }

    /**
     * Obtenemos las barajas
     */
    getDecks() {
        return this.decks;
    }

    /**
     * Devuelve un objeto del Array type
     * @returns {Object} Objeto json.
     */
    #getType() {
        return this.type;
    }

    /**
     * Rellenamos con datos
     * @param {String} type El parametro mandado por el cliente. Para elegir un tipo de baraja
     */
    #setType(type) {
        this.type = Type.find(element => (element.name === type));
    }

    /**
     * Esto retorna el valor de cardOut
     * @returns {Array} Es un Array de los números que se van para fuera
     */
    #getCardOut() {
        return this.cardsOut;
    }

    /**
     * 
     * @param {Array} cardOut Es el número que se va fuera
     */
    #setCardOut(cardOut) {
        this.cardsOut = cardOut;
    }

    /**
     * Este método es para barajar las cartas 
     */
    #shuffle() {

    }
    /**
     * Este método es para distribuir
     * @param {Integer} number Seleccionas el número de cartas  
     */
    #distribute() {

    }
}