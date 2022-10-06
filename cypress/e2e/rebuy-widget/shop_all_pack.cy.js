function checkPriceExist($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)
    expect(alright).to.match(/[0-9]/)
    expect(alright).to.not.match(/[0-9]\./)
}
function checkVIP($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)
    expect(alright).to.match(/[0-9]/)
    expect(alright).to.not.match(/[0-9]\./)
}


describe('highlight the VIP pricing on Clothing products', () => {

    it('_____________________ products/spanish-riviera-pack _____________________', () => {
        cy.visit('https://shop.join-eby.com/products/spanish-riviera-pack')
    })   
    it(`products/spanish-riviera-pack should have a price`, () => {
        cy.get('.proBoxInfo .priceProduct.standardPrice.default.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    }) 
    it(`products/spanish-riviera-pack Recomendation should have a price`, () => {
        cy.get('.rebuy-widget-content span.rebuy-money.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    })

    it(`products/spanish-riviera-pack should have a VIP price`, () => {
        cy.get('.rebuy-widget-content .ebyProdTile-vipPriceWrapper').each(($el) =>{
            checkVIP($el)
        })
    }) 
    it(`products/spanish-riviera-pack Recommendation should have a VIP price`, () => {
        cy.get('.rebuy-widget-content p.bfx-price').each(($el) =>{
            checkVIP($el)
        })
    }) 

    it('_____________________ products/everyday-seamless-3-panties-pack _____________________', () => {
        cy.visit('https://shop.join-eby.com/products/everyday-seamless-3-panties-pack')
    })    
    it(`products/everyday-seamless-3-panties-pack should have a price`, () => {
        cy.get('.proBoxInfo .priceProduct.standardPrice.default.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    }) 
    it(`products/everyday-seamless-3-panties-pack Recomendation should have a price`, () => {
        cy.get('.rebuy-widget-content span.rebuy-money.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    })

    it(`products/everyday-seamless-3-panties-pack should have a VIP price`, () => {
        cy.get('.rebuy-widget-content .ebyProdTile-vipPriceWrapper').each(($el) =>{
            checkVIP($el)
        })
    }) 
    it(`products/everyday-seamless-3-panties-pack Recommendation should have a VIP price`, () => {
        cy.get('.rebuy-widget-content p.bfx-price').each(($el) =>{
            checkVIP($el)
        })
    }) 


})
