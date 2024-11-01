describe('Real Wordl app', () => {
  it('History success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('cadu7945')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()  
   })

   it('Previous history', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('cadu7945')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-personal-tab"]').click()
    
    // os botões dates e amount all não funcionam
    cy.get('[data-test="transaction-list-filter-amount-range-button"] > .MuiChip-label').click()    
   })
  })
