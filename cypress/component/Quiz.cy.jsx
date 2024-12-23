import { beforeEach, describe, it } from "vitest"
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

}
)