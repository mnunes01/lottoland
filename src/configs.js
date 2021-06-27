
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

export default CONFS;