// Clicks on the menu item Football and checks if the page is loaded and if sub menu is present'

describe('Clicks on the menu item Football and checks if the page is loaded and if sub menu is present', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
  });
  it('Click on menu item',()=>{
    cy.visit('https://www.unibet.co.uk/blog',setTimeout(100000));
    cy.contains('a[data-toggle="submenu-61102"]',"Football");
    cy.get('a[data-toggle="submenu-61102"]').click();
    cy.url().should('include','/football');
    cy.get('ul[class="submenu submenu-61102 list-unstyled p-2 position-absolute"').invoke('show');
    cy.wait(1000);
    cy.get('ul[class="submenu submenu-61102 list-unstyled p-2 position-absolute"').should('be.visible');

  })
   
})