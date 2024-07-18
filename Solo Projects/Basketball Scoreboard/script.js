function updateScore(team, counts) {
    let scoreArea = document.querySelector(`#${team} .count-area`);
    let currentScore = parseInt(scoreArea.textContent);
    currentScore += counts;
    scoreArea.textContent = currentScore;
    
    spotlightLeadingTeam();
}

function AddByOne(team) {
    updateScore(team, 1);
}

function AddByTwo(team) {
    updateScore(team, 2);
}

function AddByThree(team) {
    updateScore(team, 3);
}

function spotlightLeadingTeam() {
    const homeScore = parseInt(document.querySelector('#home .count-area').textContent);
    const guestScore = parseInt(document.querySelector('#guest .count-area').textContent);
    
    const homeBoard = document.querySelector('#home .Score-area');
    const guestBoard = document.querySelector('#guest .Score-area');

    // Remove the leading class from both sections
    homeBoard.classList.remove('Top-team');
    guestBoard.classList.remove('Top-team');

    // Add the leading class to the team with the higher score
    if (homeScore > guestScore) {
        homeBoard.classList.add('Top-team');
    } else if (guestScore > homeScore) {
        guestBoard.classList.add('Top-team');
    }
    // If the scores are tied, neither team is highlighted
}

function startAnew() {
    // Reset the home score
    document.querySelector('#home .count-area').textContent = 0;
    // Reset the guest score
    document.querySelector('#guest .count-area').textContent = 0;
    // Reset any other necessary state variables
    count = 0;
}