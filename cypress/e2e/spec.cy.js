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

  it('should')

})
//* Write a test that checks that when data is put into the form, the value is reflected in that form input.



//* Write a test to check the user flow of adding a new reservation to the page.