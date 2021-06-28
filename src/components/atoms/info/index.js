import { h} from "preact";
import register from 'preact-custom-element';
import style from './style.scss';

const Info =  ({action = undefined, icon_class = 'icon-info'}) => {

    return(
        <div
            role="button"
            class={style.info}
            onClick={action}
        >
            <i role="img" class={style[icon_class]}/>
        </div>
    );
}

register(Info, 'info-button', ['action', 'icon_class']);