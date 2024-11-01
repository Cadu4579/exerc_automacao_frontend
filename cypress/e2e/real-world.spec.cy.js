describe('Real Wordd app', () => {
  it('login - success', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('Heath93')
    cy.get('#password').type('s3cret')
    cy.get('[data-test="signin-submit"]').click()
  })

  it('login fail', () => {
    cy.visit('http://localhost:3000/')
    cy.get('#username').type('teste')
    cy.get('#password').type('test')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('.MuiAlert-message')
})

it('register new user', () => {
  cy.visit('http://localhost:3000/')
  cy.get('#username').type('teste')
  cy.get('#password').type('test')
  cy.get('[data-test="signin-submit"]').click()
  cy.get('.MuiAlert-message')
  cy.get('[data-test="signup"]').click()
  cy.get('#firstName').type('carlos')
  cy.get('#lastName').type('joaquim')
  cy.get('#username').type('cadu7945')
  cy.get('#password').type('s3cret')
  cy.get('#confirmPassword').type('s3cret')
  cy.get('[data-test="signup-submit"]').click()
})

it('error register new user', () => {
  cy.visit('http://localhost:3000/')
  cy.get('#username').type('teste')
  cy.get('#password').type('test')
  cy.get('[data-test="signin-submit"]').click()
  cy.get('.MuiAlert-message')
  cy.get('[data-test="signup"]').click()
  cy.get('#firstName').type('carlos')
  cy.get('#lastName').type('joaquim')
  cy.get('#username').type('cadu7945')
  cy.get('#password').type('s3cret')
  cy.get('#confirmPassword').type('s3c')
  cy.get('#confirmPassword-helper-text')
  //cy.get('[data-test="signup-submit"]').click()
})

 it('suficient balance', () => {
  cy.visit('http://localhost:3000/')
  cy.get('#username').type('Heath93')
  cy.get('#password').type('s3cret')
  cy.get('[data-test="signin-submit"]').click()
  cy.get('[data-test="nav-top-new-transaction"]').click()
  cy.get('.css-1idn90j-MuiGrid-root').click()
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
    cy.get('.css-1idn90j-MuiGrid-root').click()
    cy.get('#amount').type('5')
    cy.get('#transaction-create-description-input').type('payment')
    cy.get('[data-test="transaction-create-submit-payment"]').click()
  })

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