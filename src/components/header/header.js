import {createNewElement} from "../../utils/dom-helper.js";

export const createHeader = () => {
    const headerTitle = createNewElement("h1", {
        className:'header-title',
    }, 'Wilden\'s Memory Game')

    const startButton = createNewElement('button', {
        className:'start-button'
    }, 'New Game');

    const leaderboardButton = createNewElement('button', {
        className:'leaderboard-button'
    }, 'Leaderboard');

    const buttonsWrapper = createNewElement('div', {
        className: 'buttons-wrapper',
    }, [
        startButton,
        leaderboardButton
    ]);

    const header = createNewElement('header', {className:'main-header'},
        [
            headerTitle,
            buttonsWrapper
        ]);

    startButton.addEventListener('click', (event) => {
        console.log('click start button');
    });

    leaderboardButton.addEventListener('click', (event) => {
        console.log('click leaderboard button');
    });

    return header;
}