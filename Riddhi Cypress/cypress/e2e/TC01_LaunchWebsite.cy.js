//Test 1 : Launches the website and finds the section of Trending news and Latest news

describe('Launch website', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
    });
    
    it('Launches the blog website', () => {
       
        cy.visit('https://www.unibet.co.uk/blog');
        cy.wait(1000);
        cy.get('div[class="widget popular-posts wpp-ajax"] h2[class="border-2 border-bottom border-primary fs-4 mb-2 pb-2 ps-0"]').should('have.text','Trending News');
        cy.get('div[class="container mb-4 mt-4 news-sidebar-block card border-0 rounded-2 shadow"]').scrollIntoView();
        cy.get('div[class="container mb-4 mt-4 news-sidebar-block card border-0 rounded-2 shadow"] h2[class="border-2 border-bottom border-primary fs-4 mb-2 pb-2 ps-0"]').should('have.text','Latest News');
      })
      
  })