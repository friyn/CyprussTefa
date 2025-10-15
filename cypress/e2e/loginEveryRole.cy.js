describe('Log in', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('Login dan logout admin', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.get('input[name="email"]').type(Cypress.env('adminEmail'))
    cy.get('input[name="password"]').type(Cypress.env('adminPassword'))
    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()
    cy.url().should('include', Cypress.env('adminUrl'))
    cy.get('#drop1', { timeout: 20000 }).should('be.visible').click()
    cy.contains('Log Out').click()
  })

  it('Login dan logout student', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.get('input[name="email"]').type(Cypress.env('studentEmail'))
    cy.get('input[name="password"]').type(Cypress.env('studentPassword'))
    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()
    cy.url().should('include', Cypress.env('studentUrl'))
    cy.get('#drop1', { timeout: 20000 }).should('be.visible').click()
    cy.contains('Log Out').click()
  })

  it('Login dan logout teacher', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.get('input[name="email"]').type(Cypress.env('teacherEmail'))
    cy.get('input[name="password"]').type(Cypress.env('teacherPassword'))
    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()
    cy.url().should('include', Cypress.env('teacherUrl'))
    cy.get('#drop1', { timeout: 20000 }).should('be.visible').click()
    cy.contains('Log Out').click()
  })

  it('Login dan logout staff', () => {
    cy.visit(Cypress.env('baseUrl'))
    cy.get('input[name="email"]').type(Cypress.env('staffEmail'))
    cy.get('input[name="password"]').type(Cypress.env('staffPassword'))
    cy.get('input[type="checkbox"]').check()
    cy.get('button[type="submit"]').click()
    cy.url().should('include', Cypress.env('staffUrl'))
    cy.get('#drop1', { timeout: 20000 }).should('be.visible').click()
    cy.contains('Log Out').click()
  })
})
