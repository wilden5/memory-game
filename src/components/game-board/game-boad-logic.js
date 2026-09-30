import {GAME_STATE} from "../../state/game-state.js";

export const handleGameCardClick = (event) => {
    console.log(GAME_STATE);
    const clickedCard = event.currentTarget;
    clickedCard.classList.add('card-flipped');

    if (!GAME_STATE.FIRST_CLICKED_CARD) {
        GAME_STATE.FIRST_CLICKED_CARD = clickedCard;
        return;
    }

    GAME_STATE.SECOND_CLICKED_CARD = clickedCard;

    GAME_STATE.USER_MOVES += 1;

    const isMatch = GAME_STATE.FIRST_CLICKED_CARD.dataset.name === GAME_STATE.SECOND_CLICKED_CARD.dataset.name;

    if (isMatch) {
        console.log('match');
    } else {
        console.log('unmatch');
    }
}