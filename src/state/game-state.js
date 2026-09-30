export const GAME_STATE = {
    USER_MOVES: 0,
    MATCHED_PAIRS: 0,
    FIRST_CLICKED_CARD: null,
    SECOND_CLICKED_CARD: null,
}

export const resetGameState = () => {
    GAME_STATE.USER_MOVES = 0
    GAME_STATE.MATCHED_PAIRS = 0
    GAME_STATE.FIRST_CLICKED_CARD = null
    GAME_STATE.SECOND_CLICKED_CARD = null
}