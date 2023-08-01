let temporizadorInterval;
let cronometroInterval;
let cronometroInicio = 0;

function incrementScore(teamNumber) {
    const teamScoreElement = document.getElementById(`team${teamNumber}Score`);
    let currentScore = parseInt(teamScoreElement.textContent);
    currentScore++;
    teamScoreElement.textContent = currentScore;
}

function decrementScore(teamNumber) {
    const teamScoreElement = document.getElementById(`team${teamNumber}Score`);
    let currentScore = parseInt(teamScoreElement.textContent);
    if (currentScore > 0) {
        currentScore--;
        teamScoreElement.textContent = currentScore;
    }
}

document.getElementById('team1Name').addEventListener('input', function () {
    const teamName = this.value;
    document.getElementById('team1Score').textContent = teamName ? teamName : '0';
});

document.getElementById('team2Name').addEventListener('input', function () {
    const teamName = this.value;
    document.getElementById('team2Score').textContent = teamName ? teamName : '0';
});

function iniciarTemporizador() {
    // Resto del código del temporizador...
}

function detenerTemporizador() {
    // Resto del código del temporizador...
}

function iniciarCronometro() {
    // Resto del código del cronómetro...
}

function detenerCronometro() {
    // Resto del código del cronómetro...
}

function updateCurrentDateTime() {
    // Resto del código para mostrar la fecha y hora actual...
}

setInterval(updateCurrentDateTime, 1000);

function changeToLightTheme() {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
}

function changeToDarkTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
}
