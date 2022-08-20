describe('highlight the VIP pricing on products', () => {

  it('#1 Home Page', () => {
    cy.visit('https://shop.join-eby.com/')
  }) 
  it('#1 Hompage should display 11 products', () => {
    cy.get('.productQuickAdd')
      .should('have.length', 11)
  })  
  it('#1 Hompage products should have a price and VIP price', () => {
    cy.get('.prodTilePriceWrapper').each(($el,index, $list) => {
        console.log(index)
        switch(index){
          case 0:
            cy.get(`.price.bfx-price`)
              .contains('$48')
                cy.get('.bfx-price')
                .contains('$42')
        }
    })
  })

  it('#2 Shop All', () => {
    
    cy.visit('https://shop.join-eby.com/collections/seamless-underwear')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 204)
  }) 

  it('#3 Panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/seamless-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 192)
  })   

  it('#3 Shop All/Panties/Bikini-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/bikini-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 194)
  }) 

  it('#3 Shop All/Panties/brief-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/brief-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 194)
  })   

  it('#3 Shop All/Panties/cheeky-underwear', () => {
    
    cy.visit('https://shop.join-eby.com/collections/cheeky-underwear')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 162)
  }) 

  it('#3 Shop All/Panties/high-waisted-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/high-waisted-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 194)
  }) 

  it('#3 Shop All/Panties/high-waisted-thong', () => {
    
    cy.visit('https://shop.join-eby.com/collections/high-waisted-thong')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 96)
  }) 

  it('#3 Shop All/Panties/high-cut-high-waisted-panties-1', () => {
    
    cy.visit('https://shop.join-eby.com/collections/high-cut-high-waisted-panties-1')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 80)
  })   

  it('#3 Shop All/Panties/thong-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/thong-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 192)
  }) 

  it('#3 Shop All/Panties/high-waisted-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/high-waisted-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 194)
  }) 

  it('#3 Shop All/Panties/seamless-sheer-mesh', () => {
    
    cy.visit('https://shop.join-eby.com/pages/seamless-sheer-mesh')

    cy.get('.collection_group_list div')
      .should('have.length', 104  )
  }) 

  it('#3 Shop All/Panties/invisible-cotton-panties', () => {
    
    cy.visit('https://shop.join-eby.com/collections/invisible-cotton-panties')

    cy.get('#filtered-prod-listing div')
      .should('have.length', 192  )
  }) 
})

