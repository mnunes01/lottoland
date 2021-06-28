import { h} from "preact";
import register from 'preact-custom-element';
import style from './style.scss';

const Cta =  ({text = '', action = undefined}) => {

    return(
        <div class={style.cta}>
            <button
                onClick={action}
            >
                {text}
            </button>
        </div>
    );
}

register(Cta, 'cta-button', ['action']);