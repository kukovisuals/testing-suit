describe('highlight the VIP pricing on products', () => {

    it('______________________ collections/seamless-underwear ______________________', () => {
        cy.visit('https://shop.join-eby.com/products/black-cotton-bikini-panties?variant=39726779007020')
        cy.viewport(375, 667) // Set viewport to 550px x 750px
    }) 

    it(`Seamless Black Cotton Bikini - L`, () => {
        cy.get('.priceProduct.holidayPriceWrapper.standard.bfx-price')
            .should('contain','$11.20')
        cy.wait(1000)
        cy.get('#closeIconContainer').click()
        cy.get('.swatch-view.swatch-view-custom-image > li').each(($el, index, $list) => {
            cy.get($el[index]).click()
            console.log($el[0], index)
        })

    })
  

})
