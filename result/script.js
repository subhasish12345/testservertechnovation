// Sample event data
const techEvents = [
    { name: 'WEB DESIGN', result: 'Winner: Team DECODE SYNDICATE' },
    { name: 'PIXLATE', result: 'Winner: Team ROCK' },
    { name: 'MUN', result: 'Winner: Team ANGELS' },
    { name: 'CRYPTIC HUNT', result: 'Winner: Team TOJI' },
    { name: 'Best Anime', result: 'Winner: Jujutsu Kaisan' },
    { name: 'Best Visual', result: 'Winner: Demon Slayer' },
    { name: 'Tech Event 7', result: 'Winner: Team A' },
    { name: 'Tech Event 8', result: 'Winner: Team B' },
    { name: 'Tech Event 9', result: 'Winner: Team C' },
    { name: 'Tech Event 10', result: 'Winner: Team A' },
    { name: 'Tech Event 11', result: 'Winner: Team B' },
    { name: 'Tech Event 12', result: 'Winner: Team C' },
    { name: 'Tech Event 13', result: 'Winner: Team A' },
    { name: 'Tech Event 14', result: 'Winner: Team B' },
    { name: 'Tech Event 15', result: 'Winner: Team C' },
    { name: 'Tech Event 16', result: 'Winner: Team A' },
    { name: 'Tech Event 17', result: 'Winner: Team B' },
    { name: 'Tech Event 18', result: 'Winner: Team C' },
    { name: 'Tech Event 19', result: 'Winner: Team A' },
    { name: 'Tech Event 20', result: 'Winner: Team B' },
    { name: 'Tech Event 21', result: 'Winner: Team C' },
    { name: 'Tech Event 22', result: 'Winner: Team A' },
    { name: 'Tech Event 23', result: 'Winner: Team B' },
    { name: 'Tech Event 24', result: 'Winner: Team C' },
    { name: 'Tech Event 25', result: 'Winner: Team A' },
    { name: 'Tech Event 26', result: 'Winner: Team B' },
    { name: 'Tech Event 27', result: 'Winner: Team C' },
    { name: 'Tech Event 28', result: 'Winner: Team A' },
    { name: 'Tech Event 29', result: 'Winner: Team B' },
    { name: 'Tech Event 30', result: 'Winner: Team C' },
    // ... Add up to 30 tech events
];

const nonTechEvents = [
    { name: 'NON-Tech Event 1', result: 'Winner: Team X' },
    { name: 'NON-Tech Event 2', result: 'Winner: Team Y' },
    { name: 'NON-Tech Event 3', result: 'Winner: Team Z' },
    { name: 'NON-Tech Event 4', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 5', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 6', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 7', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 8', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 9', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 10', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 11', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 12', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 13', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 14', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 15', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 16', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 17', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 18', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 19', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 20', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 21', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 22', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 23', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 24', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 25', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 26', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 27', result: 'Winner: Team C' },
    { name: 'NON-Tech Event 28', result: 'Winner: Team A' },
    { name: 'NON-Tech Event 29', result: 'Winner: Team B' },
    { name: 'NON-Tech Event 30', result: 'Winner: Team C' },
    // ... Add up to 30 non-NON-tech events
];

// Function to display events
function displayEvents(eventsArray, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous events if any

    eventsArray.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event');

        const eventTitle = document.createElement('h3');
        eventTitle.innerText = event.name;

        const eventResult = document.createElement('p');
        eventResult.innerText = event.result;

        eventCard.appendChild(eventTitle);
        eventCard.appendChild(eventResult);
        container.appendChild(eventCard);
    });
}

// Display tech and non-NON-tech events on page load
displayEvents(techEvents, 'tech-events');
displayEvents(nonTechEvents, 'non-tech-events');

// Search functionality
function searchEvent() {
    const query = document.getElementById('search-bar').value.toLowerCase();

    const filteredTechEvents = techEvents.filter(event =>
        event.name.toLowerCase().includes(query)
    );
    const filteredNonTechEvents = nonTechEvents.filter(event =>
        event.name.toLowerCase().includes(query)
    );

    displayEvents(filteredTechEvents, 'tech-events');
    displayEvents(filteredNonTechEvents, 'non-tech-events');
}
