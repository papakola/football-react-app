export const createTableByPlayers = (players) => {

    players.sort(function(a, b) {
        return parseFloat(b.goals) - parseFloat(a.goals);
    });

    players.pop()
    return (players)
}
