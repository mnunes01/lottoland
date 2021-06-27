import { h } from 'preact';
import style from './style.scss';
import CONFS from '../../configs'; 

import Grid from '../../components/organisms/grid';

const Home = () => (
	<div class={style.home}>
		<h4>{CONFS.APP_TITLE}</h4>
		<Grid />
	</div>
);

export default Home;
