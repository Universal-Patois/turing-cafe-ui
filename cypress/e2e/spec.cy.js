describe('cafe test', () => {
  
  // it('passes', () => {
  //   cy.visit('http://localhost:3000')
  // })

  beforeEach (() => {
    cy.intercept(
      {
        method: 'GET',
        url: 'https://rancid-tomatillos.herokuapp.com/api/v2/movies',
      },{
        fixture: 'sampleReservation'
      }
    )
    cy.visit('http://localhost:3000')
  })

  it('should display reservations on page load', () => {
    cy.get('h2').contains('Christie')
    cy.get('h3').contains("12/29")
  })

  it('should display a new reservation after it is made', () => {
   cy.get('[placeholder="Name"]').type('Andrew').should('have.value', 'Andrew')
   cy.get('[placeholder="Date(mm/dd)"]').type('10/16').should('have.value', '10/16')
   cy.get('[placeholder="Time"]').type(730).should('have.value', '730')
   cy.get('[type="number"]').type(2).should('have.value', 2)
   cy.get('.form-button').click()
   cy.get('h2').contains('Andrew')
   cy.get('h3').contains('10/16')
    
  })

})
//* Write a test that checks that when data is put into the form, the value is reflected in that form input.
