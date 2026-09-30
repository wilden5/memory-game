import {createNewElement} from "../../../utils/dom-helper.js";
import {GAME_STATE} from "../../../state/game-state.js";
import {restartGame} from "../../../main.js";
import {closeModalWindow} from "../modal-window.js";

export const createWinModalWindow = () => {
    const title = createNewElement('h2', {
        className: 'win-title'
    }, 'Congratulations!');

    const message = createNewElement('p', {
        className: 'win-message'
    }, `GGWP You won the game in ${GAME_STATE.USER_MOVES} moves!`);

    const newGameButton = createNewElement('button', {
        className: 'win-button win-restart-button'
    }, 'New Game');

    const closeButton = createNewElement('button', {
        className: 'win-button win-close-button'
    }, 'Close');

    const buttonsWrapper = createNewElement('div', {
        className: 'win-buttons-wrapper'
    }, [newGameButton, closeButton]);

    newGameButton.addEventListener('click', restartGame);
    closeButton.addEventListener('click', closeModalWindow);

    const content = createNewElement('div', {
        className: 'win-content'
    }, [title, message, buttonsWrapper]);

    return content;
}