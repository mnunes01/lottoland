import register from 'preact-custom-element';
import style from './style.scss';

const TextArea =  ({title = '', subtitle = '', caption = ''}) => {

    return(
        <div class={style.details}>
            <span>{caption}</span>
            <h5 class={style.title}>{title}</h5>
            <span>{subtitle}</span>
        </div>
    );
}

register(TextArea, 'text-area');