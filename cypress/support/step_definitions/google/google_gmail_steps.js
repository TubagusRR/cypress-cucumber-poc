const google = require('../../../support/page_objects/google/google_gmail_page');


When(/^user click gmail$/, () => {
    google.commands.clickGmailText();
});