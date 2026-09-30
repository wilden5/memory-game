import {createNewElement} from "../../utils/dom-helper.js";
import {handleGameCardClick} from "./game-boad-logic.js";

export const createGameBoard = () => {
    const movesCounter = createNewElement("div", {
        className:'moves-counter',
    }, 'Moves: 0');

    const pairsCounter = createNewElement("div", {
        className:'pairs-counter',
    }, 'Pairs: 0 / 8');

    const countersWrapper = createNewElement("div", {
        className:'counters-wrapper',
    }, [
        movesCounter,
        pairsCounter
    ]);

    const cardsGrid = createNewElement("div", {
        className:'cards-grid',
    })

    const main = createNewElement('main', {className:'main'},
        [
            countersWrapper,
            cardsGrid
        ]);

    return main;
}

const createGameCard = (card) => {
    const gameCardFront = createNewElement("div", {
        className:'game-card__front',
    });

    const gameCardImage = createNewElement("img", {
        className:'game-card__image',
        src: card.image,
        alt: card.name
    });

    const gameCardBack = createNewElement("div", {
        className:'game-card__back',
    }, [
        gameCardImage
    ]);

    const gameCard = createNewElement("div", {
        className:'game-card',
        dataset: { name: card.name }
    }, [
        gameCardFront,
        gameCardBack
    ]);

    gameCard.addEventListener('click', handleGameCardClick);

    return gameCard;
}

export const renderGameCards = (shuffledCards) => {
    const cardsGrid = document.querySelector('.cards-grid');

    if (!cardsGrid) return;

    cardsGrid.textContent = '';

    shuffledCards.forEach((card) => {
        const cardElement = createGameCard(card);
        cardsGrid.append(cardElement);
    })
}