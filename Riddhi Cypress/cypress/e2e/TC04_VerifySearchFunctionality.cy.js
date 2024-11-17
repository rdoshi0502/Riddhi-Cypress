describe('Test the search functionality',() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      })
      it('Searches a game',()=>{
        cy.visit('https://www.unibet.co.uk/blog',setTimeout(100000));
        cy.get('svg#searchIcon').click();






    })
 
})