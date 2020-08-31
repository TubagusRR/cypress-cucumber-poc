const googleGmail = {
    testData: {

    },
    elements: {
        gmailText: 'a[class="gb_g"]'
    },
    commands: {
        clickGmailText(){
            cy.get(googleGmail.elements.gmailText).contains('Gmail').click();
        },
    },
};

module.exports = googleGmail;