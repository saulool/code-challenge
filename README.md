# code-challenge

## What's this application?
It's described as a voting facilitator tool for lunch.

## How this application works?
This application lacks a database so, everything here is mocked in server-side and there's no login.

Some rules:
1. You can't vote in a restaurant if it's after noon
2. You can only vote once a day
3. By the noon there is a cron job that will select the restaurant with more votes and remove it from the list of votable restaurants
4. By the end of the day (23:59) there is a cron job that will clear the votes for all restaurants that can be choosed
5. By the end of the week (Sunday - 23:59) there is a cron job that will restore all restaurants

## Technologies used
**Client-side**
- AngularJS 1
- Babel
- ES6
- Webpack
- Twitter Bootstrap
- Karma, Jasmine & Istanbul
- LESS

**Server-side**
- Node.js
- Express
- Babel
- ES6
- Moment.js
- Karma, Jasmine & Istanbul

## How do I run it?
Having Node.js and NPM installed, just type `npm run start:env` and then go to `http://localhost:3000/client/compiled/#!/`

## How do I test it?
You can run `npm run test:client` and `npm run test:server` for running unit testing with a code coverage report as output located in the root folder.

## What more (or better) could have been done?
1. Have more coverage in the server side
2. E2E testing
3. Integration testing
4. A login feature
5. Making stubs for tests
