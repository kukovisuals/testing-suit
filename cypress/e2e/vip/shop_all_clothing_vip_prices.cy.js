function checkPriceExist($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)
    expect(alright).to.match(/[0-9]/)
}
function checkVIP($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)
    expect(alright).to.match(/[0-9]/)
}


describe('highlight the VIP pricing on Clothing products', () => {


    it('-------------------------- washable-eco-silk-outerwear --------------------------', () => {
        cy.visit('https://shop.join-eby.com/pages/washable-eco-silk-outerwear')
    })
    it(`pages/washable-eco-silk-outerwear should have price`, () => {
        cy.get('#shopify-section-silky-separates-collection_product .shopTheLookWrapper p.bfx-price').each(($el, i) =>{
            checkPriceExist($el)      
        })
    })
    it(`pages/washable-eco-silk-outerwear should have VIP price`, () => {
        cy.get('#shopify-section-silky-separates-collection_product .shopTheLookWrapper p.price.bfx-price').each(($el, i) =>{
            checkVIP($el)
        })
    }) 

    it('_____________________ pages/the-seamless-bra-bodysuit _____________________', () => {
        cy.visit('https://shop.join-eby.com/pages/the-seamless-bra-bodysuit')
    })   
    it(`collections/signature-bralettes should have a price`, () => {
        cy.get('.shg-category-row.stacked span[data-shg-product-target="product-compare-price"]').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/signature-bralettes should have a VIP price`, () => {
        cy.get('.shg-category-row.stacked span[data-shg-product-target="product-compare-price"]').each(($el) =>{
            checkVIP($el)
        })
    }) 


    it('_____________________ cpages/tanks_____________________', () => {
        cy.visit('https://shop.join-eby.com/pages/tanks')
    })   
    it(`pages/tanks should have a price `, () => {
        cy.get('#parisiansummer-assortment p.price.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`pages/tanks should have a VIP price `, () => {
        cy.get('#parisiansummer-assortment .ebyProdTile-vipPriceWrapper p.bfx-price').each(($el) =>{
            checkVIP($el)
        })
    }) 

})
