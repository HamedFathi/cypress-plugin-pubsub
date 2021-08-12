# samplepubsubcypress

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your end-to-end tests
```
yarn test:e2e
```

## Problem description
### Web application
The web application consists of two componentens, the [Publisher](https://github.com/shahabganji/Sample-Pubsub-Cypress/blob/a0856ee0a4bfeccc078154e2b4c54543afa4f3b9/samplepubsubcypress/src/components/Publisher.vue) and the [Subscriber](https://github.com/shahabganji/Sample-Pubsub-Cypress/blob/a0856ee0a4bfeccc078154e2b4c54543afa4f3b9/samplepubsubcypress/src/components/Subscriber.vue). The Publisher component publishes one event to the Subscriber component, which adds the event's data to a counter.

### Cypress test [click the button](https://github.com/shahabganji/Sample-Pubsub-Cypress/blob/a0856ee0a4bfeccc078154e2b4c54543afa4f3b9/samplepubsubcypress/tests/e2e/specs/test.js#L7)
This test clicks on the button of the Publisher component and assumes, that the event is received at the Subscriber component. That's exactly how it happens.

### Cypress test [publish the event](https://github.com/shahabganji/Sample-Pubsub-Cypress/blob/a0856ee0a4bfeccc078154e2b4c54543afa4f3b9/samplepubsubcypress/tests/e2e/specs/test.js#L17)
This test publishes the event directly and assumes the increment of the counter. Unfortunately, this does not happen, although, there is no error message at all after the publishing event happened. 


