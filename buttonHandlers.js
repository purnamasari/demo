////////////////////////////////////
// Grids
////////////////////////////////////
document.getElementById('core').addEventListener('click', () => {
    showGrid('grid-core');
});

document.getElementById('achievements').addEventListener('click', () => {
    showGrid('grid-achievements');
});

document.getElementById('ads').addEventListener('click', () => {
    showGrid('grid-ads');
});

document.getElementById('analytics').addEventListener('click', () => {
    showGrid('grid-analytics');
});

document.getElementById('context').addEventListener('click', () => {
    showGrid('grid-context');
});

document.getElementById('iap').addEventListener('click', () => {
    showGrid('grid-iap');
});

document.getElementById('leaderboard').addEventListener('click', () => {
    showGrid('grid-leaderboard');
});

document.getElementById('notifications').addEventListener('click', () => {
    showGrid('grid-notifications');
});

document.getElementById('player').addEventListener('click', () => {
    showGrid('grid-player');
});

document.getElementById('session').addEventListener('click', () => {
    showGrid('grid-session');
});

document.getElementById('stats').addEventListener('click', () => {
    showGrid('grid-stats');
});

document.getElementById('tournament').addEventListener('click', () => {
    showGrid('grid-tournament');
});

////////////////////////////////////
// Achievements
////////////////////////////////////
document.getElementById('achievements-getAchievementsAsync').addEventListener('click', () => {
    achievementsGetAchievementsAsync();
});

document.getElementById('achievements-unlockAchievementAsync').addEventListener('click', () => {
    achievementsUnlockAchievementAsync();
});

////////////////////////////////////
// Ads
////////////////////////////////////
document.getElementById('ads-isBlocked').addEventListener('click', () => {
    adsIsBlocked();
});

document.getElementById('ads-showInterstitial').addEventListener('click', () => {
    adShowInterstitial();
});

document.getElementById('ads-showRewarded').addEventListener('click', () => {
    adShowRewarded();
});

document.getElementById('ads-showBanner').addEventListener('click', () => {
    adShowBanner();
});

document.getElementById('ads-hideBanner').addEventListener('click', () => {
    adHideBanner();
});

////////////////////////////////////
// Analytics
////////////////////////////////////
document.getElementById('analytics-logLevelUp').addEventListener('click', () => {
    analyticsLogLevelUp();
});

document.getElementById('analytics-logScore').addEventListener('click', () => {
    analyticsLogScore();
});

////////////////////////////////////
// Context
////////////////////////////////////
document.getElementById('context-getId').addEventListener('click', () => {
    contextGetId();
});

document.getElementById('context-getType').addEventListener('click', () => {
    contextGetType();
});

document.getElementById('context-getPlayersAsync').addEventListener('click', () => {
    contextGetPlayersAsync();
});

document.getElementById('context-inviteAsync').addEventListener('click', () => {
    contextInviteAsync();
});

document.getElementById('context-shareAsync').addEventListener('click', () => {
    contextShareAsync();
});

document.getElementById('context-shareLinkAsync').addEventListener('click', () => {
    contextShareLinkAsync();
});

document.getElementById('context-updateAsync').addEventListener('click', () => {
    contextUpdateAsync();
});

document.getElementById('context-chooseAsync').addEventListener('click', () => {
    contextChooseAsync();
});

document.getElementById('context-switchAsync').addEventListener('click', () => {
    contextSwitchAsync();
});

document.getElementById('context-createAsync').addEventListener('click', () => {
    contextCreateAsync();
});

document.getElementById('context-isSizeBetween').addEventListener('click', () => {
    contextIsSizeBetween();
});

////////////////////////////////////
// Core
////////////////////////////////////
document.getElementById('core-authenticateAsync').addEventListener('click', () => {
    coreAuthenticateAsync();
});

document.getElementById('core-linkGameAsync').addEventListener('click', () => {
    coreLinkAccountAsync();
});

document.getElementById('core-onPause').addEventListener('click', () => {
    coreOnPause();
});

document.getElementById('core-performHapticFeedbackAsync').addEventListener('click', () => {
    corePerformHapticFeedbackAsync();
});

document.getElementById('core-getSupportedAPIs').addEventListener('click', () => {
    coreGetSupportedAPIs();
});

document.getElementById('core-authenticateEmailAsync').addEventListener('click', () => {
    coreAuthenticateEmailAsync();
});

document.getElementById('core-authenticatePhoneAsync').addEventListener('click', () => {
    coreAuthenticatePhoneAsync();
});

document.getElementById('core-authenticateConfirmEmailAsync').addEventListener('click', () => {
    coreAuthenticateConfirmEmailAsync();
});

document.getElementById('core-authenticateConfirmPhoneAsync').addEventListener('click', () => {
    coreAuthenticateConfirmPhoneAsync();
});

////////////////////////////////////
// IAP
////////////////////////////////////
document.getElementById('iap-isEnabled').addEventListener('click', () => {
    iapIsEnabled();
});

document.getElementById('iap-getCatalogAsync').addEventListener('click', () => {
    iapGetCatalogAsync();
});

document.getElementById('iap-getPurchasesAsync').addEventListener('click', () => {
    iapGetPurchasesAsync();
});

document.getElementById('iap-makePurchaseAsync').addEventListener('click', () => {
    iapMakePurchaseAsync();
});

document.getElementById('iap-consumePurchaseAsync').addEventListener('click', () => {
    iapConsumePurchaseAsync();
});

document.getElementById('iap-getSubscribableCatalogAsync').addEventListener('click', () => {
    iapGetSubscribableCatalogAsync();
});

document.getElementById('iap-purchaseSubscriptionAsync').addEventListener('click', () => {
    iapPurchaseSubscriptionAsync();
});

document.getElementById('iap-getSubscriptionsAsync').addEventListener('click', () => {
    iapGetSubscriptionsAsync();
});

document.getElementById('iap-cancelSubscriptionAsync').addEventListener('click', () => {
    iapCancelSubscriptionAsync();
});

////////////////////////////////////
// Leaderboard
////////////////////////////////////
document.getElementById('leaderboard-getLeaderboardAsync').addEventListener('click', () => {
    leaderboardGetLeaderboardAsync();
});

document.getElementById('leaderboard-sendEntryAsync').addEventListener('click', () => {
    leaderboardSendEntryAsync();
});

document.getElementById('leaderboard-getEntriesAsync').addEventListener('click', () => {
    leaderboardGetEntriesAsync();
});

document.getElementById('leaderboard-getPlayerEntryAsync').addEventListener('click', () => {
    leaderboardGetPlayerEntryAsync();
});

document.getElementById('leaderboard-getEntryCountAsync').addEventListener('click', () => {
    leaderboardGetEntryCountAsync();
});

document.getElementById('leaderboard-getConnectedPlayersEntriesAsync').addEventListener('click', () => {
    leaderboardGetConnectedPlayersEntriesAsync();
});

////////////////////////////////////
// Notifications
////////////////////////////////////
document.getElementById('notifications-scheduleAsync').addEventListener('click', () => {
    notificationsScheduleAsync();
});

document.getElementById('notifications-getHistoryAsync').addEventListener('click', () => {
    notificationsGetHistoryAsync();
});

document.getElementById('notifications-cancelAsync').addEventListener('click', () => {
    notificationsCancelAsync();
});

document.getElementById('notifications-cancelAllAsync').addEventListener('click', () => {
    notificationsCancelAllAsync();
});

////////////////////////////////////
// Player
////////////////////////////////////
document.getElementById('player-getID').addEventListener('click', () => {
    playerGetID();
});

document.getElementById('player-getName').addEventListener('click', () => {
    playerGetName();
});

document.getElementById('player-getPhoto').addEventListener('click', () => {
    playerGetPhoto();
});

document.getElementById('player-isFirstPlay').addEventListener('click', () => {
    playerIsFirstPlay();
});

document.getElementById('player-getDataAsync').addEventListener('click', () => {
    playerGetDataAsync();
});

document.getElementById('player-setDataAsync').addEventListener('click', () => {
    playerSetDataAsync();
});

document.getElementById('player-flushDataAsync').addEventListener('click', () => {
    playerFlushDataAsync();
});

document.getElementById('player-getConnectedPlayersAsync').addEventListener('click', () => {
    playerGetConnectedPlayersAsync();
});

document.getElementById('player-getSignedPlayerInfoAsync').addEventListener('click', () => {
    playerGetSignedPlayerInfoAsync();
});

document.getElementById('player-getASIDAsync').addEventListener('click', () => {
    playerGetASIDAsync();
});

document.getElementById('player-getSignedASIDAsync').addEventListener('click', () => {
    playerGetSignedASIDAsync();
});

document.getElementById('player-canSubscribeBotAsync').addEventListener('click', () => {
    playerCanSubscribeBotAsync();
});

document.getElementById('player-subscribeBotAsync').addEventListener('click', () => {
    playerSubscribeBotAsync();
});

document.getElementById('player-getTokenAsync').addEventListener('click', () => {
    playerGetTokenAsync();
});

document.getElementById('player-onLogin').addEventListener('click', () => {
    playerOnLogin();
});

////////////////////////////////////
// Session
////////////////////////////////////
document.getElementById('session-getEntryPointData').addEventListener('click', () => {
    sessionGetEntryPointData();
});

document.getElementById('session-getEntryPointAsync').addEventListener('click', () => {
    sessionGetEntryPointAsync();
});

document.getElementById('session-setSessionData').addEventListener('click', () => {
    sessionSetSessionData();
});

document.getElementById('session-getLocale').addEventListener('click', () => {
    sessionGetLocale();
});

document.getElementById('session-getTrafficSource').addEventListener('click', () => {
    sessionGetTrafficSource();
});

document.getElementById('session-getPlatform').addEventListener('click', () => {
    sessionGetPlatform();
});

document.getElementById('session-getDevice').addEventListener('click', () => {
    sessionGetDevice();
});

document.getElementById('session-getOrientation').addEventListener('click', () => {
    sessionGetOrientation();
});

document.getElementById('session-onOrientationChange').addEventListener('click', () => {
    sessionOnOrientationChange();
});

document.getElementById('session-onAudioStatusChange').addEventListener('click', () => {
    sessionOnAudioStatusChange();
});

document.getElementById('session-isAudioEnabled').addEventListener('click', () => {
    sessionIsAudioEnabled();
});

document.getElementById('session-switchGameAsync').addEventListener('click', () => {
    sessionSwitchGameAsync();
});

document.getElementById('session-happyTime').addEventListener('click', () => {
    sessionHappyTime();
});

document.getElementById('session-gameplayStart').addEventListener('click', () => {
    sessionGameplayStart();
});

document.getElementById('session-gameplayStop').addEventListener('click', () => {
    sessionGameplayStop();
});

document.getElementById('session-gameLoadingStart').addEventListener('click', () => {
    sessionGameLoadingStart();
});

document.getElementById('session-gameLoadingStop').addEventListener('click', () => {
    sessionGameLoadingStop();
});

////////////////////////////////////
// Stats
////////////////////////////////////
document.getElementById('stats-getStatsAsync').addEventListener('click', () => {
    statsGetStatsAsync();
});

document.getElementById('stats-postStatsAsync').addEventListener('click', () => {
    statsPostStatsAsync();
});

////////////////////////////////////
// Tournament
////////////////////////////////////
document.getElementById('tournament-getCurrentAsync').addEventListener('click', () => {
    tournamentGetCurrentAsync();
});

document.getElementById('tournament-getAllAsync').addEventListener('click', () => {
    tournamentGetAllAsync();
});

document.getElementById('tournament-postScoreAsync').addEventListener('click', () => {
    tournamentPostScoreAsync();
});

document.getElementById('tournament-createAsync').addEventListener('click', () => {
    tournamentCreateAsync();
});

document.getElementById('tournament-shareAsync').addEventListener('click', () => {
    tournamentShareAsync();
});

document.getElementById('tournament-joinAsync').addEventListener('click', () => {
    tournamentJoinAsync();
});
