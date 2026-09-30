import {GAME_STATE} from "../../state/game-state.js";
import {createWinModalWindow} from "../modal-window/win/win-modal-window.js";
import {openModalWindow} from "../modal-window/modal-window.js";

export const handleGameCardClick = (event) => {
    const clickedCard = event.currentTarget;

    if (clickedCard.classList.contains('card-flipped')) return;
    if (GAME_STATE.IS_BOARD_LOCKED) return;

    clickedCard.classList.add('card-flipped');
    GAME_STATE.USER_MOVES += 1;
    updateUserMovesDisplay(GAME_STATE.USER_MOVES);

    if (!GAME_STATE.FIRST_CLICKED_CARD) {
        GAME_STATE.FIRST_CLICKED_CARD = clickedCard;
        return;
    }
    GAME_STATE.SECOND_CLICKED_CARD = clickedCard;

    const isMatch = GAME_STATE.FIRST_CLICKED_CARD.dataset.name === GAME_STATE.SECOND_CLICKED_CARD.dataset.name;
    isMatch ? handleMatch() : handleUnmatch()
}

const handleMatch = () => {
    GAME_STATE.MATCHED_PAIRS += 1;
    GAME_STATE.FIRST_CLICKED_CARD = null;
    GAME_STATE.SECOND_CLICKED_CARD = null;
    updateMatchedPairsDisplay(GAME_STATE.MATCHED_PAIRS);

    if (GAME_STATE.MATCHED_PAIRS === 8) {
        setTimeout(() => {
            const winModalWindow = createWinModalWindow();
            openModalWindow(winModalWindow);
        }, 500);
    }
}

const handleUnmatch = () => {
    GAME_STATE.IS_BOARD_LOCKED = true;

    setTimeout(() => {
        GAME_STATE.FIRST_CLICKED_CARD.classList.remove('card-flipped');
        GAME_STATE.SECOND_CLICKED_CARD.classList.remove('card-flipped');
        GAME_STATE.FIRST_CLICKED_CARD = null;
        GAME_STATE.SECOND_CLICKED_CARD = null;
        GAME_STATE.IS_BOARD_LOCKED = false;
    }, 1500)
}

const updateUserMovesDisplay = (number) => {
    document.querySelector('.moves-counter').textContent = `Moves: ${number}`;
}

const updateMatchedPairsDisplay = (number) => {
    document.querySelector('.pairs-counter').textContent = `Pairs: ${number} / 8`
}