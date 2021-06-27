import register from 'preact-custom-element';
import style from './style.scss';

const Info =  ({action = undefined}) => {

    return(
        <div 
            class={style.info}
            onClick={action}
        >
            <span class={style['icon-info']}/>
        </div>
    );
}

register(Info, 'info-button', ['info', 'action']);