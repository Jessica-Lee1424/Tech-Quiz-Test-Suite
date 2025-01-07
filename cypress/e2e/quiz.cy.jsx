describe ('e2e quiz test', () => {
    beforeEach ( () => {
        cy.visit('/')
    });
    
    it ('should start quiz and display first question', () => {
        cy.get ('button').contains('Start Quiz').click()
        cy.get ('.card').should('not.be.empty')
    })

//This test should answer all questions. Check to see high score shows up and get through to end of test.

it ('should confirm all questions are answered', () => {
    cy.get ('button').click()
        for (let i=0; i<10; i++) {
            cy.get ('.btn').contains('1').click()
        }
    cy.get ('.alert-success').should('be.visible').and('contain', 'Your score:')    
})
// Third test can be if quiz restarts when you click reset quiz. Does it take you back to homepage?
it ('should confirm all questions are answered', () => {
cy.get ('button').click()
    for (let i=0; i<10; i++) {
        cy.get ('.btn').contains('1').click()
    }
cy.get ('.btn-primary').contains('Take New Quiz').click()
cy.get ('h2').should('be.visible').and('contain', '?')
})
    
})