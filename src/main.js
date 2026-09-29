import './style.css'
import {createHeader} from "./components/header/header.js";
import {createGameBoard, renderGameCards} from "./components/game-board/game-board.js";
import {doubleGameArray, shuffleGameArray} from "./utils/shuffle-helper.js";

const initApp = () => {
    const headerElement = createHeader();
    const gameBoardElement = createGameBoard();

    document.body.appendChild(headerElement);
    document.body.appendChild(gameBoardElement);

    const initialCards = shuffleGameArray(doubleGameArray());
    renderGameCards(initialCards);
}

initApp();