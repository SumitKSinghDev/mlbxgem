const teamDropdown = document.getElementById('team');
const playerDropdown = document.getElementById('player');
const fetchBtn = document.getElementById('fetchBtn');
const highlightResult = document.getElementById('highlightResult');
const loadingIndicator = document.getElementById('loadingIndicator');  // Optional: Add a loading indicator element

// Populate Team Dropdown
async function populateTeams() {
    const url = 'https://statsapi.mlb.com/api/v1/teams?sportId=1';
    try {
        const response = await fetch(url);
        const data = await response.json();
        data.teams.forEach(team => {
            const option = document.createElement('option');
            option.value = team.id;
            option.textContent = team.name;
            teamDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading teams:", error);
        highlightResult.textContent = "Failed to load teams. Please try again.";
    }
}

// Populate Player Dropdown (for selected team)
async function populatePlayers(teamId) {
    const url = `https://statsapi.mlb.com/api/v1/teams/${teamId}/roster`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        playerDropdown.innerHTML = '<option value="">Select a player</option>'; // Reset dropdown
        data.roster.forEach(player => {
            const option = document.createElement('option');
            option.value = player.person.id;
            option.textContent = player.person.fullName;
            playerDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading players:", error);
        highlightResult.textContent = "Failed to load players. Please try again.";
    }
}

// Fetch Live Game State
async function fetchHighlights() {
    const teamId = teamDropdown.value;
    const playerId = playerDropdown.value;

    if (!teamId || !playerId) {
        highlightResult.textContent = "Please select both a team and a player.";
        return;
    }

    highlightResult.innerHTML = ''; // Clear previous results
    loadingIndicator.style.display = 'block'; // Show loading indicator

    try {
        // Fetch the team's current game ID
        const scheduleUrl = `https://statsapi.mlb.com/api/v1/schedule?sportId=1&teamId=${teamId}&gameType=R&season=2024`;
        const scheduleResponse = await fetch(scheduleUrl);
        const scheduleData = await scheduleResponse.json();
        const games = scheduleData.dates?.[0]?.games;

        if (!games || games.length === 0) {
            highlightResult.textContent = "No games available for this team.";
            return;
        }

        const gamePk = games[0].gamePk; // Use the first game in the schedule
        const url = `https://statsapi.mlb.com/api/v1.1/game/${gamePk}/feed/live`;

        // Fetch game highlights
        const response = await fetch(url);
        const data = await response.json();

        // Extract important data
        const gameStatus = data.gameData.status.detailedState;
        const awayTeam = data.gameData.teams.away.teamName;
        const homeTeam = data.gameData.teams.home.teamName;
        const events = data.metaData.gameEvents || ["No events available"];

        // Create collapsible HTML for JSON display
        let highlightsHtml = `
            <h5>Game Status: ${gameStatus}</h5>
            <p><strong>${awayTeam}</strong> vs <strong>${homeTeam}</strong></p>
            <h6>Key Events:</h6>
            <ul>
                ${events.map(event => `<li>${event}</li>`).join('')}
            </ul>
            <h6>Game JSON:</h6>
            <button class="collapsible">Click to view JSON Data</button>
            <div class="content">
                <pre>${JSON.stringify(data, null, 2)}</pre>
            </div>
        `;

        highlightResult.innerHTML = highlightsHtml;

        // Add collapsible functionality to JSON
        const collapsibles = document.querySelectorAll(".collapsible");
        collapsibles.forEach(collapsible => {
            collapsible.addEventListener("click", function() {
                this.classList.toggle("active");
                const content = this.nextElementSibling;
                if (content.style.display === "block") {
                    content.style.display = "none";
                } else {
                    content.style.display = "block";
                }
            });
        });

    } catch (error) {
        console.error("Error fetching highlights:", error);
        highlightResult.textContent = "Failed to fetch highlights. Please try again.";
    } finally {
        loadingIndicator.style.display = 'none'; // Hide loading indicator
    }
}

// Event Listeners
teamDropdown.addEventListener('change', () => {
    const teamId = teamDropdown.value;
    highlightResult.innerHTML = ''; // Clear previous results
    if (teamId) populatePlayers(teamId);
});
fetchBtn.addEventListener('click', fetchHighlights);

// Initialize Teams on Page Load
populateTeams();
