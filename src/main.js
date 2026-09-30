import './style.css'
import {createHeader} from "./components/header/header.js";
import {createGameBoard, renderGameCards} from "./components/game-board/game-board.js";
import {doubleGameArray, shuffleGameArray} from "./utils/shuffle-helper.js";
import {resetGameState} from "./state/game-state.js";
import {closeModalWindow} from "./components/modal-window/modal-window.js";

export const restartGame = () => {
    resetGameState();

    const movesElement = document.querySelector('.moves-counter');
    const pairsElement = document.querySelector('.pairs-counter');

    if (movesElement) movesElement.textContent = 'Moves: 0';
    if (pairsElement) pairsElement.textContent = 'Pairs: 0 / 8';

    const newInitialCards = shuffleGameArray(doubleGameArray());
    renderGameCards(newInitialCards);
    closeModalWindow();
};

const initApp = () => {
    const headerElement = createHeader();
    const gameBoardElement = createGameBoard();

    document.body.appendChild(headerElement);
    document.body.appendChild(gameBoardElement);

    const initialCards = shuffleGameArray(doubleGameArray());
    renderGameCards(initialCards);
}

initApp();