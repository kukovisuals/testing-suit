describe('Subscription widget Skeleton', () => {

    it('sings in', () => {
        cy.visit('http://127.0.0.1:9292/')
            
    })  
    
    it('#1 Has only a close button after activating active-widget', () => {

        cy.get('#Password').type('owhayt{enter}')
        cy.get('#custom_box').click()
        cy.get('.subscription-widget-button').contains('Close')
    })  

    it('#1 Has all the subscription boxes, Custom Box, Mixed Styles', () => {

        cy.get('.bg-custom-choose').each(($el, index, $list) =>{
            console.log($list[0])
            cy.get($list[0]).contains('Custom Box')
            cy.get($list[1]).contains('Mixed Styles')            
        })
    })  

    it('#1 Has a size property with two buttons backward and forward', () => {

        cy.get('#bg-small-carousel-controller #subscription-widget-goback').contains('<')
        cy.get('#bg-small-carousel-controller #subscription-widget-gofoward').contains('>')
        cy.get('#bg-small-carousel-controller .carouselSizeTitle').contains('size')
    })  

    it('#1 Has all sizes XS,S,M,L,XL,2XL,3XL,4X ', () => {

        cy.get('.subscription-widget-span').each(($el, index, $list) =>{
            console.log($list[7])
            cy.get($list[0]).contains('XS')
            cy.get($list[1]).contains('S')
            cy.get($list[2]).contains('M')
            cy.get($list[3]).contains('L')
            cy.get($list[4]).contains('XL')
            cy.get($list[5]).contains('2XL')
            cy.get($list[6]).contains('3XL')
            cy.get($list[7]).contains('4XL')            
        })
    })  

 
})

describe('Subscription Widget event listeners', () => {

    it('#1 Close the widget after hitting close and removing active-widget ', () => {
        cy.get('#subscription-wdiget-close').click()
        cy.get('.subscription-widget')
            .should('not.have.class', 'active-widget')
    })
})
