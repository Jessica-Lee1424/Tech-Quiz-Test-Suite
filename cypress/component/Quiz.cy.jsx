import Quiz from "../../client/src/components/Quiz"

describe ('quiz component', () => {
    beforeEach ( () => {
         cy.intercept (
                {
                    method: 'GET', 
                    url: '/api/questions/random',
                },
                {
                    fixture: 'questions.json',
                    statusCode: 200,
                }
            
            ).as('getRandomQuestion')
    })

    it ('should start quiz and display first question', () => {
        cy.mount (<Quiz/>)
        cy.get ('button').contains('Start Quiz').click()
        cy.get ('.card').should('not.be.empty')

    } )
//This test should answer all questions. Check to see high score shows up and get through to end of test.

    it ('should confirm all questions are answered', () => {
        cy.mount (<Quiz/>)
        cy.get ('button').click()
            for (let i=0; i<20; i++) {
                cy.get ('.btn').contains('1').click()
            }
        cy.get ('.alert-success').should('be.visible').and('contain', 'Your score:')    
    })
// Third test can be if quiz restarts when you click reset quiz. Does it take you back to homepage?
it ('should confirm all questions are answered', () => {
    cy.mount (<Quiz/>)
    cy.get ('button').click()
        for (let i=0; i<20; i++) {
            cy.get ('.btn').contains('1').click()
        }
    cy.get ('.btn-primary').contains('Take New Quiz').click()
    cy.get ('h2').should('be.visible').and('contain', '?')
})
    
}
)