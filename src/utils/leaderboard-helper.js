const getFormattedDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear());

    return `${day}.${month}.${year}`;
}

export const updateLeaderboardData = (moves) => {
    const data = localStorage.getItem('leaderboardData');
    const parsedData = data ? JSON.parse(data) : [];

    const winResult = {
        moves: moves,
        date: getFormattedDate(),
        timestamp: Date.now(),
    }

    parsedData.push(winResult);

    parsedData.sort((a, b) => {
        if (a.moves !== b.moves) {
            return a.moves - b.moves;
        }
        return a.timestamp - b.timestamp;
    });

    const topScores = parsedData.slice(0, 10);
    localStorage.setItem('leaderboardData', JSON.stringify(topScores));
}

export const getLeaderboardData = () => {
    const data = localStorage.getItem('leaderboardData');
    return data ? JSON.parse(data) : [];
}