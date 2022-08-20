describe('highlight the VIP pricing on products in Bralettes tab', () => {

  it('Shop All Bralettes', () => {
    cy.visit('https://shop.join-eby.com/collections/bralettes-for-women')
    
    cy.get('#filtered-prod-listing')
      .should('have.length', 11)
  })

  it('Shop All/Bralettes/pages/seamless-sheer-bralettes', () => {
    cy.visit('https://shop.join-eby.com/pages/seamless-sheer-bralettes')
    
    cy.get('#filtered-prod-listing')
      .should('have.length', 11)
  }) 
  
})

