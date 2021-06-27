//import "preact/debug";
import { useEffect, useReducer } from 'preact/hooks';
import { orderBy, forEach } from "lodash";

import style from './main.scss';
import CONFS from './configs';
import static_gameList from './data/test-data'; 

import "./components/molecules/switcher"
import "./components/molecules/loader"
import "./components/atoms/title"

import Grid from './components/organisms/grid';


//formater to display currency according to user local and default / chosen currency
//i was going to use formatparts to extract the currency symbol and formar the string acording the Figma template € value min. Stake
//but it was a little bit of a overkill for demo propouses and theres better ways to implement localization on web apps.
const formatter = new Intl.NumberFormat(CONFS.DEFAULT_LOCAL, {
	style: 'currency',
	currency: CONFS.DEFAULT_CURRENCY
});

//reducer responsible for our games dataset propagation and manipulation
// all components / webcomponents are agnostic to data manipualtion and mutations
// in order to improve render times, and have a single source of true data.
function reducer(state, action) {
	switch (action.type) {
		case 'loadData':

			const tmpGameList = []
			forEach(action.payload, (game) => {
				//sanitize our gameList to avoid data operations on upcoming renders and have less memory consumption
				//the gameList data is very extensive and the less properties we store the better (someone once said 48k would be more than enough to run any program... :-) )

				//needed properties
				//game name - gameList.name for uniqueKey usage
				//imagePath - base url from confs + gameList.image
				//caption - gameList.provider or empty
				//title - gameList.displayName
				//subtitle - gameList.currency[default currreecny from confs].minimumStake or empty + 'min. stake' static text
				//ctaAction -  base url from confs + gameList.playURL or undefined
				//infoAction - base url from confs + gameList.detailUrl or undefined

				//for sort propouses the following fields are left unmutabled - see SWITCHER_OPTIONS on config.js
				//displayName
				//currencyData


				tmpGameList.push(
					{
						gameName: game.name,
						imagePath: `${CONFS.BASE_URL}${game.image}`,
						caption: game.provider && game.provider[0] ? game.provider[0] : '',
						title: game.displayName,
						subTitle: (game.currencyData.hasOwnProperty(CONFS.DEFAULT_CURRENCY) && game.currencyData[CONFS.DEFAULT_CURRENCY].hasOwnProperty('minimumStake')) ?
							`${formatter.format(game.currencyData[CONFS.DEFAULT_CURRENCY].minimumStake)} ${CONFS.GAME_CARD_OPTIONS.SUB_TITLE_SUFFIX}`
							: '',
						displayName: game.displayName,
						currencyData: game.currencyData,
						ctaAction: game.hasOwnProperty('playURL') ? () => window.open(`${CONFS.BASE_URL}${game.playURL}`) : undefined,
						infoAction: game.hasOwnProperty('detailURL') ? () => window.open(`${CONFS.BASE_URL}${game.detailURL}`) : undefined
					}
				)
				
				//dev debuggin options
				if (CONFS.DEBUG.MAX_GAMES_TO_DISPLAY) 
						if (tmpGameList.length === CONFS.DEBUG.MAX_GAMES_TO_DISPLAY)
							return false
			})

			const intialSort = CONFS.SWITCHER_OPTIONS.filters.find(
				opt => opt.hasOwnProperty('checked') && opt.checked 
			);
			
			return {
				...state,
				gameList: intialSort ? orderBy(tmpGameList, intialSort.field, intialSort.order) : tmpGameList,
				isLoaded: true
			}
	  	case 'sort':
			return {
				...state,
				gameList: orderBy(state.gameList, action.payload.field, action.payload.order),
				isLoaded: true
			}
		case 'loadContent':
			return {
				...state,
				isLoaded: false
			}
	  default:
		throw new Error();
	}
}

const App = () => {

	//very simple app state,
	//gameList and loading state
	const [state, dispatch] = useReducer(reducer, {
		gameList: [],
		isLoaded: false
	});

	//try to load the gameList from the server using the URL specified on the config.js file
	//in case it fails, (and it will since i wasnt able to connect to a VPN to acess the server data)
	//loads static game list from the test-data imported module
    useEffect(() => {
			dispatch({type: 'loadContent'})

            fetch(CONFS.DATA_URL)
			.then(res => res.json())
			.then(data => {
				//i wasnt able to connect to a vpn so i dont know what is the data format returned from the server, 
				// this will probably fail!!
				// as a fallback i am adding the static_gameList in casa data.items is undefined
				dispatch({type: 'loadData', payload: (data && data.items) || static_gameList})
            })
            .catch(() => {
				// in case fecth request fail, load static game list from local file
				dispatch({type: 'loadData', payload: static_gameList})
            })
    }, []);

	return (
		<div class="main" role="grid">

			<div class="title" role="row">
				<div role="cell">
					<page-title text={CONFS.APP_TITLE}/>
				</div>
				
			</div>

			<div class="filter" role="row">
				<div role="cell">
					<sort-switcher
						options={CONFS.SWITCHER_OPTIONS.filters}
						title={CONFS.SWITCHER_OPTIONS.title}
						handleChangeOption={(field, order) => dispatch({type: 'sort', payload: {field, order}})}
					/>
				</div>
			</div>

			<div role="row">
				<div role="cell">
					<hr class="separator"></hr>
				</div>	
			</div>
			
			{state.isLoaded ?
				<div role="row">
					<div role="cell">
						<Grid
							gameList={state.gameList}
						/>
					</div>
				</div>:
				<div role="row">
					<div role="cell">
						<progress-load
							text={CONFS.LOADING_MESSAGE}
						/>
					</div>
				</div>
			}
		</div>
	)
}

export default App;
