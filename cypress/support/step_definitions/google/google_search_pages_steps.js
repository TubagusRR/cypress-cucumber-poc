const google = require('../../../support/page_objects/google/google_search_pages');

When(/^user fill the textbox$/, () => {
    google.commands.typeSomeQuery();
});

Then(/^user will see query result$/, () => {
    google.commands.queryResultAppear();
});

Then(/^verify title page$/, () => {
    google.commands.verifyTitlePage();
});