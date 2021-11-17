"use strict";
/// <reference types="./index" />
// @ts-ignore
if (window && !window.PubSub && typeof Cypress != "undefined") {
    console.error("!");
}
if (window && window.PubSub && typeof Cypress != "undefined") {
    Cypress.Commands.add('subscribeOnce', function () {
        return cy.wrap(window.PubSub.subscribeOnce);
    });
    Cypress.Commands.add('subscribe', function () {
        return cy.wrap(window.PubSub.subscribe);
    });
    Cypress.Commands.add('publishSync', function () {
        return cy.wrap(window.PubSub.publishSync);
    });
    Cypress.Commands.add('publish', function () {
        return cy.wrap(window.PubSub.publish);
    });
    Cypress.Commands.add('unsubscribe', function () {
        return cy.wrap(window.PubSub.unsubscribe);
    });
    Cypress.Commands.add('countSubscriptions', function () {
        return cy.wrap(window.PubSub.countSubscriptions);
    });
    Cypress.Commands.add('clearAllSubscriptions', function () {
        return cy.wrap(window.PubSub.clearAllSubscriptions);
    });
    Cypress.Commands.add('getSubscriptions', function () {
        return cy.wrap(window.PubSub.getSubscriptions);
    });
}
