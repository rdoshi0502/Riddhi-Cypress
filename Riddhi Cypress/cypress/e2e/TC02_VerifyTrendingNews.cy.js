// Test 2 : Click on the first trending news and verify that the pages loads with the same news 


describe('Find trending news', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
  });
    it('Clicks on first trending news', () => {
    cy.visit('https://www.unibet.co.uk/blog',setTimeout(100000));
    cy.get("#widget-area > div.widget.popular-posts.wpp-ajax > ol > li:nth-child(1) > div > h3 > a").click();
   
    let t1;
    let t2;
    t1= cy.get("#widget-area > div.widget.popular-posts.wpp-ajax > ol > li:nth-child(1) > div > h3 > a").invoke('text').toString();
    t2=cy.get('div[class="entry-meta"]').invoke('text').toString();
    expect(t1).to.eq(t2);
    //cy.screenshot();
    
  })
})
