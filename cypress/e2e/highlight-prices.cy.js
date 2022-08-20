describe('highlight the VIP pricing on products', () => {

    it('#1 Home Page', () => {
        cy.visit('https://shop.join-eby.com/')
    }) 
    it('#1 Hompage should display 11 products', () => {
        cy.get('.pcsContainer > div').should(($elem) => {
            expect($elem).to.have.length(11)
        })
    })  
    it('#1 Hompage products should have a button Add to Cart', () => { 
        cy.get('.text').should(($span) => {
            expect($span).to.contain('Add to Cart')
            // console.log($span)
        })
    }) 
    it('#1 Hompage products should display price of products --> $48,$50,$22,$50,$21,$48,$20,$45,$16,$45,$19', () => {
        let arr = []
        let getAllPrices = ''
        
        cy.get('.prodTilePriceWrapper > p ').each(($el) => {
            const price = $el.text()
            expect($el).to.have.class('price')
            expect($el).to.have.class('bfx-price')
            
            arr.push(price)
            getAllPrices = arr.join(',')
            // console.log(getAllPrices)
        })
        
    }) 

    it('#1 Hompage products should display VIP price of products $42,$44,$19,$44,$19,$42,$19,$39,$14,$39,$17', () => {
        let arr = []
        let getAllPrices = ''

        cy.get('.ebyProdTile-vipPriceWrapper.bfx-remove-element > p').each(($el) => {
            const price = $el.text()
            expect($el).to.have.class('bfx-price')
           
            arr.push(price)
            getAllPrices = arr.join(',')
            // console.log(getAllPrices)
        })
        
    })


    it('-------------------------- open Shop All collections/seamless-underwear -----------------------------------', () => {

        cy.visit('https://shop.join-eby.com/collections/seamless-underwear')
    })  

    it('#2 Shop All Should display 204 products', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 204)
    })

    const SLIP = 75
    const SLIPVIP = 64 

    const BIKINI = '$16'
    const BIKINIVIP = '$14'

    const BLOUSE = 58
    const BLOUSEVIP = 49

    const TANKS = 48
    const TANKSVIP = 42

    const SCARF = 15
    const SCARFVIP = 13

    const SHORTS = 42
    const SHORTSVIP = 36

    const BODYSUIT = 75
    const BODYSUITVIP = 65

    const BRALETTES = 50
    const BRALETTESVIP = 44

    const BRALETTES_CORE = 45
    const BRALETTES_COREVIP = 39

    const COTTON_PANTIES = '$16'
    const COTTON_PANTIES_VIP = '$14'

    const BRIEF = '$16'
    const BRIEFVIP = '$14'

    const THONG = '$16'
    const THONG_VIP = '$14'

    const HIGHWAISTED = '$17'
    const HIGHWAITEDVIP = '$16'

    const PANTHER = '$20'
    const PANTHER_VIP = '$19'

    const PANTHER_BIKINI = '$19'
    const PANTHER_BIKINI_VIP = '$17'

    const HIGHWAISTED_THONG = '$17'
    const HIGHWAITED_THONG_VIP = '$16'

    const HIGHWAISTED_SEAMLESS = '$20'
    const HIGHWAISTED_SEAMLESS_VIP = '$19'

    const CHEEKY = '$16'
    const CHEEKYVIP = '$14'

    const SHEER_MESH = '$21'
    const SHEER_MESH_VIP = '$19'
    

    function typeofProduct(name){

        const slip = name.includes('Slip') ? 'Slip' : '' 
        const tanks = name.includes('Tank') ? 'Tank' : '' 
        const blouse = name.includes('Blouse') ? 'Blouse' : ''
        const shorts = name.includes('Shorts') ? 'Shorts' : ''
        const scarf = name.includes('Scarf') ? 'Scarf' : ''
        const bodysuit = name.includes('Bodysuit') ? 'Bodysuit' : ''
        const bralette = name.includes('Bralette') ? 'Bralette' : ''
        const brief = name.includes('Brief') ? 'Brief' : ''
        const thong = name.includes('Thong') ? 'Thong' : ''
        const bikini = name.includes('Bikini') ? 'Bikini' : ''
        const highwaisted = name.includes('Highwaisted') ? 'Highwaisted' : ''
        const cheeky = name.includes('Cheeky') ? 'Cheeky' : ''

        return [slip, tanks, blouse, shorts, scarf, bodysuit, bralette, brief, thong, bikini, highwaisted, cheeky].join('')
    }

    function casesProduct(type){
        switch(type){
                case 'Slip':
                    expect(SLIP).to.equal(SLIP)
                    expect(SLIPVIP).to.equal(SLIPVIP)
                    break;
                case 'Tank':
                    console.log('tank--- ', type)
                    expect(TANKS).to.equal(TANKS)
                    expect(TANKSVIP).to.equal(TANKSVIP)
                    break;
                case 'Blouse':
                    expect(BLOUSE).to.equal(BLOUSE)
                    expect(BLOUSEVIP).to.equal(BLOUSEVIP)
                    console.log('blouse--- ', type)
                    break;
                case 'Shorts':
                    expect(SHORTS).to.equal(SHORTS)
                    expect(SHORTSVIP).to.equal(SHORTSVIP)
                    console.log('shorts--- ', type)
                    break;
                case 'Scarf':
                    expect(SCARF).to.equal(SCARF)
                    expect(SCARFVIP).to.equal(SCARFVIP)
                    console.log('scarf--- ', type)
                    break;
                case 'Bodysuit':
                    expect(BODYSUIT).to.equal(BODYSUIT)
                    expect(BODYSUITVIP).to.equal(BODYSUITVIP)
                    console.log('bodysuit--- ', type)
                    break;
                case 'Bralette':
                    expect(BRALETTES).to.equal(BRALETTES)
                    expect(BRALETTESVIP).to.equal(BRALETTESVIP)
                    console.log('--Bralette- ', type)
                    break;
                case 'Brief':
                    expect(BRIEF).to.equal(BRIEF)
                    expect(BRIEFVIP).to.equal(BRIEFVIP)
                    console.log('slip--Brief- ', type)
                    break;
                case 'Thong':
                    expect(THONG).to.equal(THONG)
                    expect(THONGVIP).to.equal(THONGVIP)
                    console.log('slip-Thong-- ', type)
                    break;
                case 'Bikini':
                    expect(BIKINI).to.equal(BIKINI)
                    expect(BIKINIVIP).to.equal(BIKINIVIP)
                    console.log('slip-Bikini-- ', type)
                    break;
                case 'Highwaisted':
                    expect(HIGHWAISTED).to.equal(HIGHWAISTED)
                    expect(HIGHWAITEDVIP).to.equal(HIGHWAITEDVIP)
                    console.log('slip--Highwaisted- ', type)
                    break;
                case 'Cheeky':
                    expect(BODYSUIT).to.equal(BODYSUIT)
                    expect(BODYSUITVIP).to.equal(BODYSUITVIP)
                    console.log('slip---Cheeky ', productsArr)
                    break;
                default:
                    console.log('-------- :*) --------- ', type)
                    break;
            }
            
    }

    it('#2 Shop All Should display price of $32', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            const name = $el.attr('data-prodtitle')
            // const productsArr = typeofProduct(name)
            // casesProduct(productsArr)

        })
    })

    it('-------------------------- Panties collections/seamless-panties --------------------------', () => {
        cy.visit('https://shop.join-eby.com/collections/seamless-panties')

        cy.get('#filtered-prod-listing div')
            .should('have.length', 192)
    })       
    function testBikini(type){
        switch(type){
            
            case 'Bikini':
                expect(BIKINI).to.equal(BIKINI)
                expect(BIKINIVIP).to.equal(BIKINIVIP)
                console.log('slip-Bikini-- ', type)
                break;
            default:
                console.log('-------- :*) --------- ', type)
                break;
        } 
    }
    it('############# ShopAll/Panties/Bikini-panties ##############', () => {
        cy.visit('https://shop.join-eby.com/collections/bikini-panties')
    }) 
    it('Bikini Panties Should have length of 194 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 194)
    }) 
    it('should have a data-prodtitle attribute that says Bikini', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Bikini/)
        })
    }) 




    it(`should have a price of ${BIKINI}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el, i) =>{
            const alright = $el.first().text()
            const check =  Cypress.$('#filtered-prod-listing > div').eq(i)
                .attr('data-prodtitle')
            console.log('CHEKY',check)

                expect(alright).to.equal(BIKINI)
            
        })
    })
    it(`should have a VIP price of ${BIKINIVIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el, i) =>{
            const alright = $el.first().text()
            const check =  Cypress.$('#filtered-prod-listing > div').eq(i)
                .attr('data-prodtitle')
            console.log('VIP',alright)

   
                expect(alright).to.equal(BIKINIVIP)
          
        })
    }) 




    it('############# Shop All/collections/Panties/brief-panties #############', () => {
        cy.visit('https://shop.join-eby.com/collections/brief-panties')
    })   
    it('Brief Panties Should have length of 194 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 194)
    }) 
    it('should have a data-prodtitle attribute that says Brief', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Brief/)
        })
    }) 
    it(`should have a price of ${BRIEF}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('PRICe',alright)
            expect(alright).to.equal(BRIEF)
        })
    })
    it(`should have a VIP price of ${BRIEFVIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('VIP',alright)
            expect(alright).to.equal(BRIEFVIP)
        })
    }) 


    it('############# Shop All/collections/Panties/cheeky-underwear #############', () => {
        cy.visit('https://shop.join-eby.com/collections/cheeky-underwear')
    })   
    it('Cheeky Underware should have length of 162 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 162)
    }) 
    it('should have a data-prodtitle attribute that says Cheeky', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Cheeky/)
        })
    }) 
    it(`should have a price of ${CHEEKY}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(CHEEKY)
        })
    })
    it(`should have a VIP price of ${CHEEKYVIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(CHEEKYVIP)
        })
    }) 


    it('############# Shop All/collections/Panties/high-waisted-panties #############', () => {
        cy.visit('https://shop.join-eby.com/collections/high-waisted-panties')
    })   
    it('High Waisted Panties should have length of 194 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 194)
    }) 
    it('should have a data-prodtitle attribute that says Highwaisted ', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Highwaisted/)
        })
    }) 
    it(`should have a price of ${HIGHWAISTED}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
 
                expect(alright).to.equal(HIGHWAISTED)

        })
    })
    it(`should have a VIP price of ${HIGHWAITEDVIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()

                expect(alright).to.equal(HIGHWAITEDVIP)
        })
    }) 


    it('############# Shop All/collections/Panties/high-waisted-thong #############', () => { 
        cy.visit('https://shop.join-eby.com/collections/high-waisted-thong')
    })   
    it('High waisted thong should have length of 96 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 96)
    }) 
    it('should have a data-prodtitle attribute that says Highwaisted Thong ', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Highwaisted Thong/)
        })
    }) 
    it(`should have a price of ${HIGHWAISTED_THONG}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(HIGHWAISTED_THONG)
        })
    })
    it(`should have a VIP price of ${HIGHWAITED_THONG_VIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(HIGHWAITED_THONG_VIP)
        })
    }) 



    it('############# Shop All/collections/Panties/thong-panties #############', () => {
        cy.visit('https://shop.join-eby.com/collections/thong-panties')
    })   
    it('Cheeky Underware should have length of 194 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 192)
    })
    it('should have a data-prodtitle attribute that says Highwaisted ', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Thong/)
        })
    }) 
    it(`should have a price of ${THONG}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(THONG)
        })
    })
    it(`should have a VIP price of ${THONG_VIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(THONG_VIP)
        })
    }) 


    it('############# Shop All/collections/Panties//high-cut-high-waisted-panties-1 #############', () => {     
        cy.visit('https://shop.join-eby.com/collections/high-cut-high-waisted-panties-1')
    })   
    it('High cut high waited panties - 1 should have length of 80 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 80)
    }) 
    it('should have a data-prodtitle attribute that says Highwaisted ', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
            expect($el.attr('data-prodtitle')).to.match(/Highwaisted/)
        })
    }) 
    it(`should have a price of ${HIGHWAISTED_SEAMLESS}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(HIGHWAISTED_SEAMLESS)
        })
    })
    it(`should have a VIP price of ${HIGHWAISTED_SEAMLESS_VIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(HIGHWAISTED_SEAMLESS_VIP)
        })
    }) 


    it('############# Shop All/collections/Panties/invisible-cotton-panties #############', () => { 
        cy.visit('https://shop.join-eby.com/collections/invisible-cotton-panties')
    })   
    it('Cotton Panties should have length of 192 items', () => {
        cy.get('#filtered-prod-listing div')
            .should('have.length', 192  )
    }) 
    it('should have a data-prodtitle attribute that contains Cotton ', () => {
        cy.get('#filtered-prod-listing > div').each(($el,index,$list) => {
             expect($el.attr('data-prodtitle')).to.match(/Cotton/)
        })
    }) 
    it(`should have a price of ${COTTON_PANTIES}`, () => {
        cy.get('#filtered-prod-listing .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(COTTON_PANTIES)
        })
    })
    it(`should have a VIP price of ${COTTON_PANTIES_VIP}`, () => {
        cy.get('#filtered-prod-listing .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(COTTON_PANTIES_VIP)
        })
    }) 



    it('############# Shop All/collections/Panties/seamless-sheer-mesh #############', () => {  
        cy.visit('https://shop.join-eby.com/pages/seamless-sheer-mesh')
    })   
    it('Seamless sheer mesh should have length of 104 items', () => {
        cy.get('.collection_group_list div')
            .should('have.length', 104  )
    }) 
    it('should have an image with attribute that has the word mesh ', () => {
        cy.get('.collection_group_list > div').each(($el,index,$list) => {
            expect($el.find('.img-responsive').attr('alt')).to.match(/Mesh/)
        })
    }) 
    it(`should have a price of ${SHEER_MESH}`, () => {
        cy.get('.collection_group_list .prodTilePriceWrapper > p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEKY',alright)
            expect(alright).to.equal(SHEER_MESH)
        })
    })
    it(`should have a VIP price of ${SHEER_MESH_VIP}`, () => {
        cy.get('.collection_group_list .ebyProdTile-vipPriceWrapper p').each(($el) =>{
            const alright = $el.first().text()
            console.log('CHEEKY VIP',alright)
            expect(alright).to.equal(SHEER_MESH_VIP)
        })
    }) 


})