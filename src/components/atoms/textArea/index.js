import { h} from "preact";
import register from 'preact-custom-element';
import style from './style.scss';

const TextArea =  ({title = '', subtitle = '', caption = ''}) => {

    return(
        <div class={style.details}>
            <span role="heading" aria-level="2" >{caption}</span>
            <h5 role="heading" aria-level="1" class={style.title}>{title}</h5>
            <span role="heading" aria-level="2">{subtitle}</span>
        </div>
    );
}

register(TextArea, 'text-area', ['title', 'subtitle', 'caption']);