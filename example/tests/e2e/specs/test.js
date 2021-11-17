// https://docs.cypress.io/api/introduction/api.html

import PubSub from "pubsub-js";

describe('test_name', function() {

  it('click the button', function() {
   
     cy.visit('http://localhost:8080/');
  
     cy.get('[data-cy=publisherbutton]').click();

     cy.get('[data-cy=notficationcounter]').contains('1');
  
  })
 
  it('publish the event', function() {
   
    cy.visit('http://localhost:8080/');
 
    PubSub.publish('notification-update', 1);

    cy.get('[data-cy=notficationcounter]').contains('1');
 
 })

 })
 