import {memoryGameCards} from "../data/memory-game-cards.js";

export const doubleGameArray = () => {
    const firstPart = memoryGameCards.map(item => ({ ...item }));
    const secondPart = memoryGameCards.map(item => ({ ...item, id: `${item.id}a` }));

    return [...firstPart, ...secondPart];
}

export const shuffleGameArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}