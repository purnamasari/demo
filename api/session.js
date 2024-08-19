const gameID_Viber = "mock.id";
const gameID_Facebook = "mock.id";

function sessionGetEntryPointData() {
    const entryPointData = Wortal.session.getEntryPointData();
    appendText(entryPointData);
}

function sessionGetEntryPointAsync() {
    Wortal.session.getEntryPointAsync()
        .then(result => appendText(JSON.stringify(result)))
        .catch(error => appendText(error));
}

function sessionSetSessionData() {
    Wortal.session.setSessionData({test: "test"});
}

function sessionGetLocale() {
    const locale = Wortal.session.getLocale();
    appendText(locale);
}

function sessionGetPlatform() {
    const platform = Wortal.session.getPlatform();
    appendText(platform);
}

function sessionGetTrafficSource() {
    const trafficSource = Wortal.session.getTrafficSource();
    appendText(trafficSource);
}

function sessionGetDevice() {
    const device = Wortal.session.getDevice();
    appendText(device);
}

function sessionGetOrientation() {
    const orientation = Wortal.session.getOrientation();
    appendText(orientation);
}

function sessionOnOrientationChange() {
    Wortal.session.onOrientationChange((orientation) => {
        appendText(orientation);
    });
}

function sessionOnAudioStatusChange() {
    Wortal.session.onAudioStatusChange((status) => {
        appendText(status);
    });
}

function sessionIsAudioEnabled() {
    const isAudioEnabled = Wortal.session.isAudioEnabled();
    appendText(isAudioEnabled);
}

function sessionSwitchGameAsync() {
    const platform = Wortal.session.getPlatform();
    let gameID = "";
    if (platform === "viber") {
        gameID = gameID_Viber;
    } else if (platform === "facebook") {
        gameID = gameID_Facebook;
    }
    const data = {
        "referral_bonus": "100",
    };
    Wortal.session.switchGameAsync(gameID, data)
        .catch(error => appendText(error));
}

function sessionHappyTime() {
    Wortal.session.happyTime();
}

function sessionGameplayStart() {
    Wortal.session.gameplayStart();
}

function sessionGameplayStop() {
    Wortal.session.gameplayStop();
}

function sessionGameLoadingStart() {
    Wortal.session.gameLoadingStart();
}

function sessionGameLoadingStop() {
    Wortal.session.gameLoadingStop();
}
