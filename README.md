[![Build Status](https://travis-ci.com/nytti/nytti.github.io.svg?branch=master)](https://travis-ci.com/nytti/nytti.github.io) [![dependencies Status](https://david-dm.org/nytti/nytti.github.io/status.svg)](https://david-dm.org/nytti/nytti.github.io) [![devDependencies Status](https://david-dm.org/nytti/nytti.github.io/dev-status.svg)](https://david-dm.org/nytti/nytti.github.io?type=dev) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/9af05bd9e55b4d36bd34122c90e41122)](https://www.codacy.com/app/cavinsmith/nytti.github.io?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nytti/nytti.github.io&amp;utm_campaign=Badge_Grade)
# New York Times

  * We will use [New York Times API](http://api.nytimes.com/svc/search/v2/articlesearch.json?q=amsterdam&api-key=500a1fae747a4f67b6a52a44c853936d) to create a single page application that presents the latest 10 news about a topic.
  * Goal is to get the latest 10 news from the API, along with a small summary and a link for each one.
  * The final result should be a list with the 10 news items, each one comprising an image and a title and a search input.
  * By default it will load the news related to any topic you decide.
  * Clicking on an item shows its summary, along with an external link to the original article.
  * The search input should change the news topic. You can adjust the UI how you see fit for the best result, but sticking to a single page application is mandatory.

## Technologies

  * [React](https://reactjs.org/) - Latest version of SPA framework by Facebook
  * [Redux](https://redux.js.org/) - State manager from Dan Abramov
  * [Material UI](https://material-ui.com/) - React implementation of Google Material UI
  * [Babel](https://babeljs.io/) - ES7+ JavaScript compiler
  * [Webpack](https://webpack.js.org/) - to rule them all, bring them all and bundle them
  * [Axios](https://github.com/axios/axios) and [axios-retry](https://github.com/softonic/axios-retry) for API requests and error handling

## Decisions

### Framework

  * I've selected [React](https://reactjs.org/) as extremely powerful and community-backed framework for creating SPA
  * I am using global state manager [Redux](https://redux.js.org/) for routing and API data received from NYT

### UI

[Material UI](https://material-ui.com/) provides great interface components for [React](https://reactjs.org/) , is very mature and mobile-friendly. It looks better than [Semantic UI](https://semantic-ui.com/) and I have one year excellent experience of using and customising it's components, JS-style system

### Development and builds

I am using [Webpack](https://webpack.js.org/) for development and building bundle. Webpack is most popular and maintained bundler on market ready for both frontend and backend development and building

Complex of Webpack, [webpack-dev-server](https://webpack.js.org/configuration/dev-server/) and [react-hot-loader](https://github.com/gaearon/react-hot-loader) provides me on-the-fly recompilation and partial refresh for React components when possible

### Code quality
  * I'm using linting ([Eslint](https://eslint.org/) [babel-eslint](https://github.com/babel/babel-eslint)) based on [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) ruleset because code should be linted and linter rules should be based on known presets. Linting is used for mistake highlighting, better code structuring and avoiding JS/React antipatterns

  * I'm using [Babel](https://babeljs.io/), [babel-node](https://babeljs.io/docs/en/babel-node) with React presets to compile `jsx` to `js` and have access to all ES6+ features that I need

  * In React components I'm creating pure components where applicable

  * In React components I'm using [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html) for type checking of component props

  * I'm using [Webpack Visualizer](https://www.npmjs.com/package/webpack-visualizer-plugin) to create graph summary of dependencies used in bundle and have ability to find heaviest or unused. Report is located in `build/stats.html` and shows that 25% of latest compilation of bundle is Material UI, 10% is React.

### Modules

  * I'm using [Axios](https://github.com/axios/axios) for http requests. Axios is most popular async frontend/backend http client - same syntax and handlers for all parts of project.

  * [axios-retry](https://github.com/softonic/axios-retry)  is wrapper for Axios that provides failsafe. NYT API is so delicate and faints each time I'm sending two requests in a row with error 429, so retry behavior is must-have workaround here

  * [react-hot-loader](https://github.com/gaearon/react-hot-loader) is one of two best projects by Dan Abramov - updates running React project without reloading component state and Redux state

### Unit / Integration tests

  * [Enzyme](https://airbnb.io/projects/enzyme/) JS tester for React from Airbnb has great abilities to test React components in different ways.

  * [Jest](https://jestjs.io/) is well known test-runner from Facebook. Actually I was using Mocha/Chai before, but Jest gives me more flexibility with global and functional mocks useful for React.

Tests are located in component folders as `ComponentName.test.js` and providing different kinds of tests:

  * Matching snapshot for shallow render of component - simple tests to keep rendering results 1:1 as cached during previous snapshot caching. If component will have any difference in rendering - test will fail. It is useful when programmer updates logic that should not affect how component is rendered.

  * Mocking Redux state for rendering component wrappers to make integration testing

  * Jest and enzyme also provides ability to emulate events, check component state at any time, count and match callbacks as well as doing classic unit testing

  * Run tests: `yarn test`

  * Project added to [Travis CI](https://travis-ci.com/) with both unit (Jest + Enzyme) and e2e (Cypress) tests

### End-to-end tests

  * [Cypress](https://www.cypress.io/) - this Chrome-based testing framework is extremely powerful and simple

  Tests are located in `cypress/integration/App.spec.js`. I made tests for opening article from list, typing search term, default & empty search results. They cover most of project functionality.

  * Run test cli: `yarn test-e2e`

  * Open test suite: `yarn test-e2e-open`

  * Run tests for built app: `yarn travis`

## Project architecturez

```bash
/__development/ - webpack configuration for development
/__production/ - webpack configuration for production	 build
/config/
  config.js - NYT API configuration
  config.js.dist - template of NYT API configuration
/cypress/ - e2e test specifications
/build/ - folder with built project
/src/ - project source code
  /__snapshots__/ - test snapshots
  /actions/ - actions for redux
  /atoms/ - simple components (stateless, not depending on other atoms or components)
  /components/ - project components
  /constants/ - constants (now only for redux)
  /pages/ - router and page wrappers
  /reducers/ - entities reducers
  /selectors/ - store selectors
  /utils/ - utils for api, sorting, redux helpers
  App.js - project entry point
  App.test.js - snapshot test of project
  template.ejs - webpack template for index.html

/test/ - test configurations and mocks
README.md	- this file
.eslintrc - linter configuration
.eslintignore	 - linter configuration
.babelrc - babel configuration
cypress.json - e2e test configuration
index.html - index file to load built bundle only for nytti.github.io
.editorconfig	- IDE configuration
```

## Installation

1) Clone repo
2) Install dependencies: `yarn`
3) Config file: `cp ./config/config.js.dist ./config/config.js`
4) Test `yarn test`
5) Run

  * development version: `yarn start` - will run dev server at <http://localhost:5001>

  * Build:
    `yarn build`
    `cd ./build`
    `python -m SimpleHTTPServer 5001` - will run simple server at <http://localhost:5001>

### License

[MIT licensed](./LICENSE).
