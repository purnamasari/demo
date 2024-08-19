const mainGrid = document.getElementById('main-grid');
const secondaryGrids = document.querySelectorAll('.secondary-grid');
const textOutput = document.getElementById('text-output');
const backButton = document.querySelectorAll('.back-button');
const audioPlayer = document.getElementById("audioPlayer");

function hideAllSecondaryGrids() {
    secondaryGrids.forEach(grid => {
        grid.style.display = 'none';
    });
}

function showGrid(gridId) {
    hideAllSecondaryGrids();
    const gridToShow = document.getElementById(gridId);
    gridToShow.style.display = 'grid';
    mainGrid.style.display = 'none';
}

function appendText(message, args) {
    console.log(message, args);

    // On screen log for device testing.
    if (typeof message === 'object') {
        message = JSON.stringify(message);
    }

    const currentText = textOutput.value;
    textOutput.value = currentText + message + '\n';
}

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

backButton.forEach(button => {
    button.addEventListener('click', () => {
        mainGrid.style.display = 'grid';
        hideAllSecondaryGrids();
    });
});

Wortal.initializeAsync()
    .then(() => {
        appendText('Initialized');
        Wortal.setLoadingProgress(100);
        Wortal.startGameAsync()
            .then(() => appendText('Started'))
            .catch(error => appendText(error));
    })
    .catch(error => appendText(error));

window.addEventListener('wortal-sdk-initialized', () => {
    appendText('Wortal SDK initialized event received.');
});
