/// <reference types="cypress" />
/// <reference types="pubsub-js" />

declare module Cypress {
    interface Chainable<Subject = any> {
        subscribe(message: string | Symbol, func: Function): Chainable<Subject>;
        subscribeOnce(message: string | Symbol, func: Function): Chainable<Subject>;
        countSubscriptions(token: any): Chainable<Subject>;
        clearAllSubscriptions(token?: any): Chainable<Subject>;
        getSubscriptions(token: any): Chainable<Subject>;
        publish(message: string | Symbol, data?: any): Chainable<Subject>;
        publishSync(message: string | Symbol, data?: any): Chainable<Subject>;
        unsubscribe(tokenOrFunction: any): Chainable<Subject>;
    }
}
/*
declare module global {
    interface Window {
        PubSub: PubSubJS.Base;
    }
}
*/