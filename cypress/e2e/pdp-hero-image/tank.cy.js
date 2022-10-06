
const getIframeDocument = () => {
  return cy
  .get('iframe#attentive_creative')
  .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
  // get the document
  return getIframeDocument()
  .its('body').should('not.be.undefined')
  .then(cy.wrap)
}

const EBY_URL = 'https://8clf0tp6yp8ny1ak-31340625964.shopifypreview.com/'
const PDP_URI = 'products/fallen-rock-seamless-tank-top?variant=39470371143724'

let newColor = ['fallenrock', 'black', 'blueopal', 'white']
let newPrintColor = ['']

        
const pdpType = 'tank'
const CDN = 'https://cdn.shopify.com/s/files/1/0313/4062/5964/products/PROD---'
const rest_CDN = `--seamless--${pdpType}--missy---prod_lf.jpg`;

describe(`Check Colors in ${pdpType}`, () => {

    it(`____________ products/${pdpType}____________`, () => {
        cy.visit(EBY_URL + PDP_URI)
        
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

    }) 

    for(const color of newColor){
        
        it(`[Color] should return 200 -------> ${color}${rest_CDN}`, () => {

                cy.request(`${CDN}${color}${rest_CDN}`)
                    .then((resp) => {
                        // redirect status code is 302
                        expect(resp.status).to.eq(200)
                    })
        })
    } 
               
})
