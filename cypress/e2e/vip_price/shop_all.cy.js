function checkPriceExist($el){
    const alright = $el.first().text()

    console.log('VIP',alright)
    expect(alright).to.match(/[0-9]/)
    expect(alright).to.not.match(/[0-9]\./)
}


describe('highlight the VIP pricing on products', () => {


    it('______________________ collections/seamless-underwear ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/seamless-underwear')
    }) 

    it(`collections/seamless-underwear should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/seamless-underwear should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/seamless-panties ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/seamless-panties')
    }) 

    it(`collections/seamless-panties should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/seamless-panties should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/bralettes-for-women ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/bralettes-for-women')
    }) 

    it(`collections/bralettes-for-women should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/bralettes-for-women should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/eby-seamless-clothing ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/eby-seamless-clothing')
    }) 

    it(`collections/eby-seamless-clothing should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/eby-seamless-clothing should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/shop-fabrics ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/shop-fabrics')
    }) 

    it(`collections/shop-fabrics should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/shop-fabrics should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/seamless-panties-packs ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/seamless-panties-packs')
    }) 

    it(`collections/seamless-panties-packs should have price`, () => {
        cy.get('.item.ebyProdTile div.priceProduct.bfx-price').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`collections/seamless-panties-packs should have a VIP price`, () => {
        cy.get('.item.ebyProdTile .ebyProdTile-vipPriceWrapper p.bfx-price').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 





})
