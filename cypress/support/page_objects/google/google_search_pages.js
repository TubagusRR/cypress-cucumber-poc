const googleSearchPages = {
    testData: {
        googleTitlePage: 'test - Google Search'
    },
    elements : {
        textBoxGoogle: 'input[name="q"]',
        queryResult: '#result-stats',
    },
    commands: {
        typeSomeQuery(){
            cy.get(googleSearchPages.elements.textBoxGoogle).clear().type('test')
            cy.get(googleSearchPages.elements.textBoxGoogle).type('{enter}')
        },
        queryResultAppear(){
            if(cy.get(googleSearchPages.elements.queryResult) > 0){
                return true
            }
        },
        verifyTitlePage(){
            cy.title().should('eq', googleSearchPages.testData.googleTitlePage)
        },
    },
};

module.exports = googleSearchPages;