const google = require('../../../support/page_objects/google/google_home_page');

Given(/^user is at Google Home Page$/, () =>{
    google.commands.navigateToGooglePage();
});

Then(/^user will see Google Icon$/, () => {
    google.commands.googleIconIsDisplayed();
});