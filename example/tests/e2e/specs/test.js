// https://docs.cypress.io/api/introduction/api.html

describe('test_name', function () {

   it('click the button', function () {

      cy.visit('/');

      cy.get('[data-cy=publisherbutton]').click();

      cy.get('[data-cy=notficationcounter]').contains('1');

   })

   it('publish the event', function () {

      cy.visit('/');

      // Works too
      // cy.visit('/').its('PubSub').then(p => p.publish('notification-update', 1));

      cy.publish('notification-update', 1);

      cy.get('[data-cy=notficationcounter]').contains('1');

   })

})
