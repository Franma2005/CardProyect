import {Controler} from "./Controler.js";

Controler.getInstance();

Controler.instance.createDeck("Poker Deck", []);

//Esto es un poco basuron
Controler.instance.getDecks().forEach(element => {
    element.getDeck().forEach(litleElement => {
        console.log(litleElement.getNameOfCard() + " " + litleElement.getSuitOfCard())
    });
});
