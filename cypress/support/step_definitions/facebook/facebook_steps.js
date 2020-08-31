/* global Given, When, Then */
const facebookTest = require('../../page_objects/facebook/facebook_login')

Given('Navigate to Facebook Page', () => {
    facebookTest.commands.navigateToFacebook();
});

When('Login Form is Displayed', () => {
    facebookTest.commands.loginFormDisplayed();
});

Then('Fill Credentials', () => {
    facebookTest.commands.typeCredentials();
});