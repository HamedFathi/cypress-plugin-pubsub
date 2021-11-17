/// <reference types="./index" />

// @ts-ignore
if (window && !window.PubSub && typeof Cypress != "undefined") {
    console.error("!");
}

if (window && window.PubSub && typeof Cypress != "undefined") {
    Cypress.Commands.add('subscribeOnce', () => {
        return cy.wrap(window.PubSub.subscribeOnce);
    });
    Cypress.Commands.add('subscribe', () => {
        return cy.wrap(window.PubSub.subscribe);
    });
    Cypress.Commands.add('publishSync', () => {
        return cy.wrap(window.PubSub.publishSync);
    });
    Cypress.Commands.add('publish', () => {
        return cy.wrap(window.PubSub.publish);
    });
    Cypress.Commands.add('unsubscribe', () => {
        return cy.wrap(window.PubSub.unsubscribe);
    });
    Cypress.Commands.add('countSubscriptions', () => {
        return cy.wrap(window.PubSub.countSubscriptions);
    });
    Cypress.Commands.add('clearAllSubscriptions', () => {
        return cy.wrap(window.PubSub.clearAllSubscriptions);
    });
    Cypress.Commands.add('getSubscriptions', () => {
        return cy.wrap(window.PubSub.getSubscriptions);
    })
}
