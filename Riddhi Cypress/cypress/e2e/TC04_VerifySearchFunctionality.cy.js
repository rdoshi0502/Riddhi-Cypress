describe('Test the search functionality',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      })
      it('Searches a game',()=>{
        cy.visit('https://www.unibet.co.uk/blog',setTimeout(100000));
        cy.get('#wrapper > header > div.d-flex.menu-container-header.blog-menu.px-3.w-100 > div > div.menu-items-wrapper.d-inline-flex.align-items-center.overflow-y-scroll.w-100 > span > a').click();
        
        cy.get('#searchContainer > div > form > label > input').type('Football{Enter}')
        //cy.wait(5000);
        cy.url().should('include','/Football');
    })
 
})
