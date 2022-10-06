function checkPriceExist($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)[0-9]\.
    expect(alright).to.match(/[0-9]/)
    expect(alright).to.not.match(/[0-9]\./)
}
function checkVIP($el){
    const alright = $el.text()

    // console.log($el,'VIP',alright)
    expect(alright).to.match(/[0-9]/)
}


describe('highlight the VIP pricing on Bralette products', () => {


    it('_____________________ collections/seamless-panties _____________________', () => {
        cy.visit('https://shop.join-eby.com/pages/seamless-sheer-bralettes')
    })
    it(`pages/seamless-sheer-bralettes should have price`, () => {
        cy.get('#product_listing_section .collection_group_list p.bfx-price').each(($el, i) =>{
            checkPriceExist($el)      
        })
    })
    it(`pages/seamless-sheer-bralettes should have VIP price`, () => {
        cy.get('#product_listing_section .collection_group_list p.vipHighlight.bfx-price').each(($el, i) =>{
            checkVIP($el)
        })
    }) 


    it('_____________________ collections/invisible-cotton-bralettes _____________________', () => {
        cy.visit('https://shop.join-eby.com/collections/invisible-cotton-bralettes')
    })   
    it(`collections/invisible-cotton-bralettes should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/invisible-cotton-bralettes should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkVIP($el)
        })
    }) 


    it('_____________________ collections/signature-bralettes _____________________', () => {
        cy.visit('https://shop.join-eby.com/collections/signature-bralettes')
    })   
    it(`collections/signature-bralettes should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/signature-bralettes should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkVIP($el)
        })
    }) 


    it('_____________________ collections/adjustable-strap-bralettes-for-women_____________________', () => {
        cy.visit('https://shop.join-eby.com/collections/adjustable-strap-bralettes-for-women')
    })   
    it(`collections/adjustable-strap-bralettes-for-women should have a price `, () => {
        cy.get('.ebyProdTileListWrapper .vipPdpPriceWrapper .priceProduct.bfx-price').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/adjustable-strap-bralettes-for-women should have a VIP price `, () => {
        cy.get('.ebyProdTileListWrapper .ebyProdTile-vipPriceWrapper p.bfx-price').each(($el) =>{
            checkVIP($el)
        })
    }) 


    it('_____________________ collections/collections/high-waisted-thong _____________________', () => { 
        cy.visit('https://shop.join-eby.com/collections/all-fabric-bralettes-for-women')
    })   
    it(`collections/all-fabric-bralettes-for-women should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/all-fabric-bralettes-for-women should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkVIP($el)
        })
    }) 
})
