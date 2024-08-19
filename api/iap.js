let productID = "mock.product.123";
let token = "mock.purchase.123";
let subscriptionProductID = "subscription.test";
let subscriptionToken = "mock.subscriptionPurchase.123";
let purchase = null;

function iapIsEnabled() {
    appendText(Wortal.iap.isEnabled());
}

function iapGetCatalogAsync() {
    Wortal.iap.getCatalogAsync()
        .then(result => appendText(JSON.stringify(result)))
        .catch(error => appendText(error));
}

function iapGetPurchasesAsync() {
    Wortal.iap.getPurchasesAsync()
        .then(result => {
            appendText(JSON.stringify(result));
            if (result.length > 0) {
                token = result[0].purchaseToken;
            }
        })
        .catch(error => appendText(error));
}

function iapMakePurchaseAsync() {
    const productID = window.prompt("Enter product ID", "mock.product.123");
    Wortal.iap.makePurchaseAsync({productID})
        .then(result => {
            purchase = result;
            token = purchase.purchaseToken;
            appendText(JSON.stringify(result))
        })
        .catch(error => appendText(error));
}

function iapConsumePurchaseAsync() {
    const token = window.prompt("Enter product token", "mock.purchase.123");
    Wortal.iap.consumePurchaseAsync(token)
        .then("Purchase consumed")
        .catch(error => appendText(error));
}

function iapGetSubscribableCatalogAsync() {
    Wortal.iap.getSubscribableCatalogAsync()
        .then(result => appendText(JSON.stringify(result)))
        .catch(error => appendText(error));
}

function iapPurchaseSubscriptionAsync() {
    Wortal.iap.purchaseSubscriptionAsync(subscriptionProductID)
        .then(result => {
            subscriptionToken = result.purchaseToken;
            appendText(JSON.stringify(result))
        })
        .catch(error => appendText(error));
}

function iapGetSubscriptionsAsync() {
    Wortal.iap.getSubscriptionsAsync()
        .then(result => appendText(JSON.stringify(result)))
        .catch(error => appendText(error));
}

function iapCancelSubscriptionAsync() {
    Wortal.iap.cancelSubscriptionAsync(subscriptionToken)
        .then("Subscription cancelled")
        .catch(error => appendText(error));
}
