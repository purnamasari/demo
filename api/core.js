let email = "";
let phone = "";

function coreAuthenticateAsync() {
    Wortal.authenticateAsync()
        .then(result => appendText("Auth result: " + result.status))
        .catch(error => appendText(error));
}

function coreAuthenticateEmailAsync() {
    email = window.prompt("Enter email");

    const payload = {
        email: email,
        requestType: "login",
        method: "email",
    }

    Wortal.authenticateAsync(payload)
        .then(result => appendText("Auth result: " + result.status))
        .catch(error => appendText(error));
}

function coreAuthenticatePhoneAsync() {
    phone = window.prompt("Enter phone");

    const payload = {
        phone: phone,
        requestType: "login",
        method: "phone",
    }

    Wortal.authenticateAsync(payload)
        .then(result => appendText("Auth result: " + result.status))
        .catch(error => appendText(error));
}

function coreAuthenticateConfirmEmailAsync() {
    const code = window.prompt("Enter code");
    const payload = {
        email: email,
        code: code,
        requestType: "confirmation",
        method: "email",
    }

    Wortal.authenticateAsync(payload)
        .then(result => appendText("Auth result: " + result.status))
        .catch(error => appendText(error));
}

function coreAuthenticateConfirmPhoneAsync() {
    const code = window.prompt("Enter code");
    const payload = {
        phone: phone,
        code: code,
        requestType: "confirmation",
        method: "phone",
    }

    Wortal.authenticateAsync(payload)
        .then(result => appendText("Auth result: " + result.status))
        .catch(error => appendText(error));
}

function coreLinkAccountAsync() {
    Wortal.linkAccountAsync()
        .then(result => appendText("Link account result: " + result))
        .catch(error => appendText(error));
}

function coreOnPause() {
    Wortal.onPause(() => appendText('Paused'));
}

function corePerformHapticFeedbackAsync() {
    Wortal.performHapticFeedbackAsync()
        .then(result => appendText(JSON.stringify(result)))
        .catch(error => appendText(error));
}

function coreGetSupportedAPIs() {
    const supportedAPIs = Wortal.getSupportedAPIs();
    appendText(supportedAPIs);
}
