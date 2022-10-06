const EBY_URL = 'https://8clf0tp6yp8ny1ak-31340625964.shopifypreview.com/'
const PDP_URI = [
    'products/black-bikini-panties?variant=34463110430764'
]

const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  // Cypress yields jQuery element, which has the real
  // DOM element under property "0".
  // From the real DOM iframe element we can get
  // the "document" element, it is stored in "contentDocument" property
  // Cypress "its" command can access deep properties using dot notation
  // https://on.cypress.io/its
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  // automatically retries until body is loaded
  .its('body').should('not.be.undefined')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  .then(cy.wrap)
}

// save the color swatches

let newColor = ['black', 'castorgrey', 'grey', 'nude', 'fallenrock', 'poppyred', 'keepsakelilac', 'limepunch', 'provincialblue', 'blueopal', 'white']
let newPrintColor = ['picnicrose', 'spottedpanther', 'sleektiger']

        
const CDN = 'https://cdn.shopify.com/s/files/1/0313/4062/5964/products/PROD---'
const rest_CDN = '--seamless--bikini--missy---prod_lf.jpg'


describe('Check Colors in Bikini', () => {

    it('____________ products/nude-bikini-panties ____________', () => {
        cy.visit(EBY_URL + PDP_URI[0])
        
        getIframeBody().find('#closeIconContainer').should('have.class', 'css-upw05v').click()
        
        cy.get('[option-name="Color"]')
            .invoke('attr', 'type-group')
            .should('eq', 'true')
        
        let newColorStr = []
        let newPrintStr = []
        cy.get('[option-name="Color"] ul.swatch-view > li').each(($el, i) => {
        
            cy.get($el).invoke('attr','data-value').then( value => {
                newColorStr.push(value.replace('_',''))
                console.log('---------colors-------------')
                console.log(newColorStr )
                console.log('----------------------')     
            }) 
        })  
        cy.get('[option-name="Print"] ul.swatch-view > li').each(($el, i) => {
        
            cy.get($el).invoke('attr','data-value').then( value => {
                newPrintStr.push(value.replace('_',''))
                console.log('---------Prints-------------')
                console.log(newPrintStr )
                console.log('----------------------')     
            }) 
        })  

    }) 

    for(const color of newColor){
        
        it(`Should return 200 -> PROD---${color}${rest_CDN}`, () => {

                cy.request(`${CDN}${color}${rest_CDN}`)
                    .then((resp) => {
                        // redirect status code is 302
                        expect(resp.status).to.eq(200)
                    })
        })
    } 


              
})

describe('Check Print Colors in Bikini', () => {
    for(const color of newPrintColor){
        
        const CDN = 'https://cdn.shopify.com/s/files/1/0313/4062/5964/products/PROD---'
        const rest_CDN = '--seamless--bikini--missy---prod_lf.jpg'
        
        it(`Should return 200 -> PROD---${color}${rest_CDN}`, () => {

                cy.request({ url: `${CDN}${color}${rest_CDN}`})
                    .then((resp) => {
                        // redirect status code is 302
                        expect(resp.status).to.eq(200)
                    })
        })
    }  
})