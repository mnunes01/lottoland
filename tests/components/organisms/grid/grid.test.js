import { h} from "preact";
import { render, fireEvent, screen} from '@testing-library/preact';

import Grid from "../../../../src/components/organisms/grid";

describe('Grid', () => {

const mocked_gameList = [
    {
        "gameName": "ElDoradoInfinityReels",
        "imagePath": "https://www.lottoland.com/cms/6038d5bdf3c415002aef6262/icon-320by250_ElDoradoInfinityReels.jpg",
        "caption": "Yggdrasil",
        "title": "El Dorado Infinity Reels",
        "subTitle": "0,10 € min. stake",
        "displayName": "El Dorado Infinity Reels",
        "currencyData": {
            "EUR": {
                "minimumStake": 0.1
            },
            "GBP": {
                "minimumStake": 0.1
            },
            "SEK": {
                "minimumStake": 1
            },
            "PLN": {
                "minimumStake": 0.1
            },
            "BRL": {
                "minimumStake": 0.1
            },
            "JPY": {
                "minimumStake": 0
            },
            "NZD": {
                "minimumStake": 0.1
            },
            "INR": {
                "minimumStake": 0.1
            },
            "HUF": {
                "minimumStake": 0.1
            }
        }
    },
    {
        "gameName": "GreekGods",
        "imagePath": "https://www.lottoland.com/cms/5de91d2a91253e002efe72f7/icon-320and250_GreekGods.jpg",
        "caption": "Pragmatic",
        "title": "Greek Gods",
        "subTitle": "0,25 € min. stake",
        "displayName": "Greek Gods",
        "currencyData": {
            "EUR": {
                "minimumStake": 0.25
            },
            "GBP": {
                "minimumStake": 0.25
            },
            "SEK": {
                "minimumStake": 2.5
            },
            "PLN": {},
            "BRL": {},
            "JPY": {},
            "NZD": {
                "minimumStake": 0.25
            },
            "INR": {},
            "HUF": {}
        }
    },
    {
        "gameName": "LuckyWizard",
        "imagePath": "https://www.lottoland.com/cms/5bab9d950eb3580fac83392e/Icon_320and250_LuckyWizard.jpg",
        "caption": "RedTiger",
        "title": "Lucky Wizard",
        "subTitle": "0,10 € min. stake",
        "displayName": "Lucky Wizard",
        "currencyData": {
            "CHF": {
                "noDesk": true,
                "noMob": true
            },
            "EUR": {
                "minimumStake": 0.1
            },
            "GBP": {
                "minimumStake": 0.1
            },
            "SEK": {
                "minimumStake": 1
            },
            "PLN": {},
            "JPY": {},
            "INR": {},
            "NZD": {
                "minimumStake": 0.1
            },
            "CAD": {},
            "HUF": {}
        }
    }
];


    test('render empty grid with no cells', async () => {
        const { queryByRole, queryAllByRole } = await render(<Grid gameList={[]}/>)
        expect(queryByRole('grid')).toBeTruthy()
        expect(queryAllByRole('cell')).toHaveLength(0)
    });

    test('render grid with 3 gamecards', async () => {
        const { queryAllByRole } = await render(<Grid gameList={mocked_gameList}/>)
        expect(queryAllByRole('cell')).toHaveLength(3)
    });
});

