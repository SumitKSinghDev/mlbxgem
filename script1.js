document.getElementById("fetchData").addEventListener("click", fetchMLBData);

async function fetchMLBData() {
    const gameId = document.getElementById("gameId").value.trim();
    if (!gameId) {
        alert("Please enter a valid Game ID.");
        return;
    }

    const url = `https://statsapi.mlb.com/api/v1.1/game/${gameId}/feed/live`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch data");

        const data = await response.json();
        displayData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to load game data. Please check the Game ID.");
    }
}

function displayData(data) {
    const gameInfo = data.gameData;
    const liveData = data.liveData;

    document.getElementById("gameStatus").innerText = gameInfo.status.detailedState;
    document.getElementById("homeTeam").innerText = gameInfo.teams.home.name;
    document.getElementById("awayTeam").innerText = gameInfo.teams.away.name;
    document.getElementById("score").innerText = `${liveData.linescore.teams.home.runs} - ${liveData.linescore.teams.away.runs}`;
    document.getElementById("inning").innerText = liveData.linescore.currentInning || "Not started";

    document.getElementById("gameInfo").classList.remove("hidden");
}
