[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/cypress-plugin-pubsub.svg)](https://badge.fury.io/js/cypress-plugin-pubsub)
[![Downloads](https://img.shields.io/npm/dm/cypress-plugin-pubsub.svg)](https://www.npmjs.com/package/cypress-plugin-pubsub)

![cy](https://user-images.githubusercontent.com/8418700/141257576-f3532625-c479-4f56-a414-98b1e37eff7c.png)

# Cypress Plugin PubSubJS 

This plugin use the [PubSubJS](https://github.com/mroderick/PubSubJS) library for pub/sub operations and adds it to `window` object.

## Installation

Add the plugin into you repository based on below command:

```
npm i cypress-plugin-pubsub

yarn add cypress-plugin-pubsub
```

## Usage


#### Inside your project

import `cypress-plugin-pubsub` in your `main` file. This helps you to access `window.PubSub`

```js
import 'cypress-plugin-pubsub';
```

If you are using `Typescript` you should add the following line of code to top of your `main` file too.

```js
/// <reference types="cypress-plugin-pubsub" />
```

Now you are able to use pub/sub functionalities as following:

```js
window.PubSub.publish('notification-update', 1);

window.PubSub.subscribe(
    'notification-update',
    (message: string, data: number) => {
        console.log('notification received.');
        console.log(data);
        notificationCount.value += data;
    },
);
```

#### Inside Cypress

import `cypress-plugin-pubsub` in your `support/commands.js` Cypress file. 

```js
import 'cypress-plugin-pubsub';
```

Now you have new Cypress commands to pub/sub. like:

```js
cy.publish('notification-update', 12);
```
 
You are able to access to all the `PubSubJS` functionalities via `window.PubSub` and `cy` objects.
