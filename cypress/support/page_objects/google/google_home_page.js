const googleHome = {
    testData: {
        
    },
    elements: {
        googleLogo: '#hplogo'
    },
    commands: {
        navigateToGooglePage(){
            cy.visit('https://www.google.com/')
        },
        googleIconIsDisplayed(){
            if(cy.get(googleHome.elements.googleLogo).length > 0){
                return true;
            }
        },
    },
};

module.exports = googleHome;