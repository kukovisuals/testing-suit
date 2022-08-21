function checkPriceExist($el){
    const alright = $el.first().text()

    console.log('VIP',alright)
    expect(alright).to.match(/[0-9]/)
}


describe('highlight the VIP pricing on products', () => {


    it('______________________ collections/bikini-panties ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/bikini-panties')
    }) 

    it(`collections/bikini-panties should have price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            checkPriceExist($el)
            
        })
    })
    it(`should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            checkPriceExist($el)
        })
    }) 

    it('______________________ collections/brief-panties ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/brief-panties')
    })   
    it(`collections/brief-panties should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/brief-panties should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/cheeky-underwear ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/cheeky-underwear')
    })   
    it(`collections/cheeky-underwear should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/cheeky-underwear should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/high-waisted-panties ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/high-waisted-panties')
    })   
    it(`collections/high-waisted-panties should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/high-waisted-panties should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ Shop All/collections/Panties/high-waisted-thong ______________________', () => { 
        cy.visit('https://shop.join-eby.com/collections/high-waisted-thong')
    })   
    it(`collections/high-waisted-panties should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/high-waisted-panties should have a VIP price`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 



    it('______________________ collections/thong-panties ______________________', () => {
        cy.visit('https://shop.join-eby.com/collections/thong-panties')
    })   
    it(`collections/thong-panties should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/thong-panties should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 


    it('______________________ collections/high-cut-high-waisted-panties-1 ______________________', () => {     
        cy.visit('https://shop.join-eby.com/collections/high-cut-high-waisted-panties-1')
    })   
    it(`collections/high-cut-high-waisted-panties-1 should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/high-cut-high-waisted-panties-1 should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 

    it('______________________ collections/invisible-cotton-panties ______________________', () => { 
        cy.visit('https://shop.join-eby.com/collections/invisible-cotton-panties')
    })   
    it(`collections/invisible-cotton-panties should have a price`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`collections/invisible-cotton-panties should have a VIP price `, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 

    it('______________________ pages/seamless-sheer-mesh ______________________', () => {  
        cy.visit('https://shop.join-eby.com/pages/seamless-sheer-mesh')
    })   
    it(`pages/seamless-sheer-mesh should have a price`, () => {
        cy.get('.collection_group_list .prodTilePriceWrapper > p').each(($el) =>{
            checkPriceExist($el)
        })
    })
    it(`pages/seamless-sheer-mesh should have a VIP price `, () => {
        cy.get('.collection_group_list .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            checkPriceExist($el)
        })
    }) 


})
