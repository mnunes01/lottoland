import { h} from "preact";
import register from 'preact-custom-element';
import style from './style.scss';

const Loader = ({text=undefined}) => {

    return(
        <div class={style.loader}>				
            {text && <h5>{text}</h5>}
            <progress></progress>
        </div>
        
    );
};

register(Loader, 'progress-load', ['text']);