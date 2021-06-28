# lottoland

## CLI Commands

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build-no-prerender

# test the production build locally
npm run serve

# run tests with jest and enzyme
npm run test
```

For detailed explanation on how things work, checkout the [CLI Readme](https://github.com/developit/preact-cli/blob/master/README.md).

# [Lottoland web dev](https://mnunes01.github.io/lottoland/)
Lottoland web dev 

## The data fetch from the server is untested... if it doenst display games please tweak the fetch on line 120 on index.js


# Live Demo
A working version of this app can be found on [Lottoland web dev]https://mnunes01.github.io/lottoland/)

[https://mnunes01.github.io/lottoland/](https://mnunes01.github.io/lottoland/)

## Instructions
Pull the repo and run **npm install**

- **'npm rund dev'** to run development server
- **'npm run test'** to run JEST tests
- **'npm run build-no-prerender'** to build the project into 'build' folder
- **'npm run gh-pages'** to deploy the build folder to github live pages


The app is configures by a file under src folder
where is possible to define the filter content for the switcher among other options (self descriptive)
configuration file: src/config.js

```javascript
const __DEFAULT_CURRENCY = "EUR";

const CONFS = {
    APP_TITLE: "lottoland games",
    BASE_URL: "https://www.lottoland.com",
    DATA_URL: "https://www.lottoland.com/en_MT/skins/lottoland/js/games/@omni-data/gameconfig.js",
    DEFAULT_CURRENCY: __DEFAULT_CURRENCY,
    DEFAULT_LOCAL: "de-DE",
    GAME_CARD_OPTIONS: {
        CTA_TEXT: "play",
        SUB_TITLE_SUFFIX: "min. stake" 
    },
    SWITCHER_OPTIONS: {
        title: 'sort games',
        filters: [
            {
                text: "Name (A-Z)",
                field: "displayName",
                order: "asc",
                checked: true
            },
            {
                text: "Stake (min to max)",
                field: `currencyData['${__DEFAULT_CURRENCY}']['minimumStake']`,
                order: "asc"
            },
            {
                text: "Stake (max to min)",
                field: `currencyData['${__DEFAULT_CURRENCY}']['minimumStake']`,
                order: "desc"
            }
        ]
    },
    LOADING_MESSAGE: "loading the best games you will ever play!",
    DEBUG: {
        MAX_GAMES_TO_DISPLAY: false
    }  
};
```

## Available commands
Package.json contains several scrips that can be run with npm

### `npm run dev`

Runs the app in the development mode.<br>
Open [http://0.0.0.0:8080/](http://0.0.0.0:8080/) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build-no-prerender`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.


### Project tools
Based on Preact CLI default template
small tweaks and changes to the configuration files where needed

### TODO : Whats missing...

a)
Rendering a long list of games is very heavy on the doom tree, even that lazy load observer for the game card have been implemented it doesnt solved the low performance under long lists, since all the list content is being injected on the dom tree at once.

Since the user only sees what is available on the screen, and in order to solve the high re-render latency on sort operations, a infinite scrool approach should be implemented, or in other words, the Grid component should trace the last element rendered and inject/render more elements on demand when the user scrools down.
This approach will avoid unecessary elements to be rendered on the dom tree, easing up the render process and the browser work.

b)
The webcompoenets are not using shadow dom and no css or html is being encapsulated.
To solve this, and since the project use Sass, the scss loader should be configured to process selected scss files into raw string output, what can be then injected on a style element for the targeted webcomponent, making the scss compiled available to use inside webcomponents.


## Music
* typing at the sound of:
* [the clash - sandinista](https://www.youtube.com/watch?v=BCoAq2299xA)
* [Keep Calm And Feel The Reggae 2021 (6 Hours)](https://www.youtube.com/watch?v=_zFxtK4EMnA&t=14970s)

@Mnunes 2021 hello:[Mnunes01@hotmail.com](mailto:mnunes01@hotmail.com)
