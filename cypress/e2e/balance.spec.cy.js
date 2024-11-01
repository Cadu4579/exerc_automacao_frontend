describe('Real Wordl app', () => {
  it('suficient balance', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
    cy.get('#amount').type('10')
    cy.get('#transaction-create-description-input').type('payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
  })

    //Saldo insuficiente mas o app deixa enviar dinheiro mesmo assim. Não aparece mensagem de erro  
    it('insuficient balance', () => {
      cy.visit('http://localhost:3000/')
      cy.get('#username').type('cadu7945')
      cy.get('#password').type('s3cret')
      cy.get('[data-test="signin-submit"]').click()
      cy.get('[data-test="nav-top-new-transaction"]').click()
      cy.get('[data-test="user-list-item-GjWovtg2hr"]').click()
      cy.get('#amount').type('5')
      cy.get('#transaction-create-description-input').type('payment')
      cy.get('[data-test="transaction-create-submit-payment"]').click()
    })

    
  })
