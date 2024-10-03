/**
 * Esta clase es el objeto carta.
 */
export class Card {

    /**
     * Este es el constructor de la clase card
     * @param {String} nameOfCard 
     * @param {Array} suitOfCard 
     */
    constructor(nameOfCard, suitOfCard) {
        this.nameOfCard = nameOfCard;
        this.suitOfCard = suitOfCard;
    }

    /**
     * Método que devuelve el nombre / número de la carta
     * @returns {String} nombre de la carta
     */
    getNameOfCard() {
        return this.nameOfCard;
    }

    /**
     * Método que devuelve el palo de la carta
     * @returns {String} palo de la carta
     */
    getSuitOfCard() {
        return this.suitOfCard;
    }

}