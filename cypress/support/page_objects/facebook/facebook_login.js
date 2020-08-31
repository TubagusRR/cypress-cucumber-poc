const facebookVerify = {
    testData: {
        facebookUsername: 'Revi'
    },
    elements : {
        email: '#email',
        pass: '#pass',
        loginbtn: '#u_0_f',
        usernameElement: 'oi732d6d ik7dh3pa d2edcug0 qv66sw1b c1et5uql a8c37x1j muag1w35 enqfppq2 jq4qci2q a3bd9o3v lrazzd5p oo9gr5id ni8dbmo4 stjgntxs ltmttdrg g0qnabr5'
    },
    commands: {
        navigateToFacebook(){
            cy.visit('https://www.facebook.com/')
        },
        loginFormDisplayed(){
            if(cy.get(facebookVerify.elements.email).length > 0){
                return true
            }
        },
        typeCredentials(){
            cy.get(facebookVerify.elements.email).clear().type('tb.radhiyya@gmail.com')
            cy.get(facebookVerify.elements.pass).clear().type('Kentut2003')
        }
    }
}

module.exports = facebookVerify;