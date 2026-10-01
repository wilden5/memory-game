import {createNewElement} from "../../utils/dom-helper.js";
import {restartGame} from "../../main.js";
import {createLeaderboardModalWindow} from "../modal-window/leaderboard/leaderboard-modal-window.js";
import {openModalWindow} from "../modal-window/modal-window.js";

export const createHeader = () => {
    const headerTitle = createNewElement("h1", {
        className:'header-title',
    }, 'Wilden\'s Memory Game')

    const newGameButton = createNewElement('button', {
        className:'header-button new-game-button'
    }, 'New Game');

    const leaderboardButton = createNewElement('button', {
        className:'header-button leaderboard-button'
    }, 'Leaderboard');

    const buttonsWrapper = createNewElement('div', {
        className: 'buttons-wrapper',
    }, [
        newGameButton,
        leaderboardButton
    ]);

    const header = createNewElement('header', {className:'header'},
        [
            headerTitle,
            buttonsWrapper
        ]);

    newGameButton.addEventListener('click', restartGame);

    leaderboardButton.addEventListener('click', () => {
        const leaderboardData = createLeaderboardModalWindow();
        openModalWindow(leaderboardData);
    });

    return header;
}