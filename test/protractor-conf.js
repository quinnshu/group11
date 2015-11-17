exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['*-spec.js'],
    rootElement: 'body'
    // ^ put whatever element on where ng-app is
};
