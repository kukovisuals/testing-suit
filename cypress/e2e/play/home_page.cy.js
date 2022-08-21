describe('The subscription widget', () => {

  it('sings in', () => {
    cy.visit('https://fred2022.myshopify.com/?preview_theme_id=134535250171')
    

    cy.get('.modal__toggle').click()
    cy.get('#Password').type('mealta{enter}')
  })  
  
  it('#1 Has only a close button', () => {

    cy.get('button.closeEbyMembershipPopup').contains('Close')
  })  
  it('#1 Has 1 of 3', () => {

    cy.get('#bp-pagination').contains('1 of 3')
  })  

  it('#1 Says choose your box - $39', () => {

    cy.get('.modalHeader.changeMyBoxPanelTitle').contains('choose your box — $39')
  })  
  it('#1 Has 6 buttons with the name of each subscription box', () => {

    cy.get('#allPrefGroupChoice button')
      .should('have.length', 6)
      .each(($el, index, $list) => {
        console.log(index)
        switch(index){
          case 0:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('Custom Box')
              .next()
              .contains('You pick each one')
          case 1:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('Mixed Styles')
              .next()
              .contains('We curate a variety')
          case 2:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('Briefs')
              .next()
              .contains('Same styles on repeat')
          case 3:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('High Waisted')
              .next()
              .contains('Same styles on repeat')
          case 4:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('Thongs')
              .next()
              .contains('Same styles on repeat')
          case 5:
            cy.get(`.boxDescription .modalOptHeader`)
              .contains('Full Coverage')
              .next()
              .contains('A variety but no thongs')
        }
      })
  })  
})

