# Riddhi-Cypress
## Cypress test 
### Pre-requisite :
1) Node.js installation
2) Cypress installation ( https://docs.cypress.io/app/get-started/install-cypress )
3) IDE (VS Code ,IntelliJ )
4) Set viewport configurations as given in cypress.config.js

### Clone the repository to download the tests and install dependencies
git clone (https://github.com/rdoshi0502/Riddhi-Cypress.git)


### Tests written :
TC01 : 
Verify that the website opens and the page loads and doesnt throw an error.

TC02 :
Verify that when you click on the first trending news the news page is loaded.

TC03 :
Verify when I click on the menu item the submenu is loaded and also the new URL page is loaded 

### How to run the tests:
1. Open terminal (bash or node cmd)
2. Check if node is installed ,run `node -v`
3. Check if npm installed `npm -v`
 

If you are running it through node cmd :
1. Go to the terminal  type command 
    `npx cypress open`
2. This should open a Cypress window -> Select E2E ->Select browser as chrome -> Select the test you want to run 

### You can also run the tests in the cmd :
1. Run in powershell through command 
	`node_modules\.bin\cypress.cmd run --headed -b chrome`
2. If you want to run particular Spec
	`node_modules\.bin\cypress.cmd run -s cypress\e2e\TC01_LaunchWebsite.cy.js --headed -b chrome`
3. If you dont mention the browser , it will by default run in electron 
4. If you dont run mention -s and spec file location , all tests will be executed in the run


- The above tests are run on chrome viewport for Desktop (viewport width: 1280, viewport height: 800)
- TC01 and TC03 run on chrome viewport for mobile o	Mobile simulator (viewport width: 375, viewport height: 667)

### Additional Test scenarios
1. Test search functionality.
2. Test login and register functionality
3. Test hyperlinks on the page 
4. I ran into some unforeseen errors while running some of the above tests , More time would have helped me understand the erros 
and usage of correct methods 



