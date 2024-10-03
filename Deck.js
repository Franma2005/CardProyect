/**
 * Le creamos un builder a Deck. Hay que añadir que no es un builder exactamente ya que
 * es más sencillo. La clase baraja almacena baraja
 */
export class Deck {

    /**
     * Constructor de la clase baraja. Se crea en la instancia unica de Gestión
     * @param {Array} deck es un array de baraja
     */
    constructor(deck) {
        this.deck = deck;
    }

    /**
     * Devuelve la baraja
     * @returns {Array} deck es un array de baraja
     */
    getDeck() {
        return this.deck;
    }
}