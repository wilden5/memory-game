import {createNewElement} from "../../../utils/dom-helper.js";
import {getLeaderboardData} from "../../../utils/leaderboard-helper.js";
import {closeModalWindow} from "../modal-window.js";

export const createLeaderboardModalWindow = () => {
    const leaderboardData = getLeaderboardData();

    const title = createNewElement('h2', {
        className: 'leaderboard-title'
    }, 'Leaderboard');

    const closeBtn = createNewElement('button', {
        className: 'leaderboard-close-button'
    }, 'Close');

    closeBtn.addEventListener('click', closeModalWindow);

    if (leaderboardData.length === 0) {
        const noResults = createNewElement('p', {
            className: 'leaderboard-empty'
        }, 'No results yet. Be the first to win!');

        const container = createNewElement('div', {
            className: 'leaderboard-wrapper'
        }, [title, noResults, closeBtn]);

        return container;
    }

    const tableHeader = createNewElement('tr', {}, [
        createNewElement('th', {}, 'Place'),
        createNewElement('th', {}, 'Moves'),
        createNewElement('th', {}, 'Date')
    ]);

    const tableRows = leaderboardData.map((data, index) => {
        return createNewElement('tr', {}, [
            createNewElement('td', {}, index + 1),
            createNewElement('td', {}, data.moves),
            createNewElement('td', {}, data.date)
        ]);
    });

    const table = createNewElement('table', {
        className: 'leaderboard-table'
    }, [tableHeader, ...tableRows]);

    const container = createNewElement('div', {
        className: 'leaderboard-wrapper'
    }, [title, table, closeBtn]);

    return container;
}