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


describe('highlight the VIP pricing on Bralette products', () => {


    it('__________________________ pages/seamless-sheer-bralettes _____________________________', () => {
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

    it('__________________________ collections/signature-seamless-underwear __________________________', () => { 
        cy.visit('https://shop.join-eby.com/collections/signature-seamless-underwear')
    })   

    it(`ollections/signature-seamless-underwear should have a price `, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)    
        })
    })
    it(`ollections/signature-seamless-underwear should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkVIP($el)
        })
    }) 



    it('__________________________ collections/invisible-cotton__________________________', () => { 
        cy.visit('https://shop.join-eby.com/collections/invisible-cotton')
    })   
    it(`/collections/invisible-cotton should have a price `, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el) 
        })
    })
    it(`/collections/invisible-cotton should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
           checkVIP($el)
        })
    }) 


    it('__________________________ washable-eco-silk-outerwear __________________________', () => {
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


})
