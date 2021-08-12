"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pubsub_js_1 = __importDefault(require("pubsub-js"));
// @ts-ignore
if (window && !window.PubSub) {
    window.PubSub = pubsub_js_1.default;
}
if (typeof Cypress != "undefined") {
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
