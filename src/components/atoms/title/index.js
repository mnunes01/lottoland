import register from 'preact-custom-element';
import style from './style.scss';

const Title =  ({text = ''}) => {

    return(
        <div class={style.title}>
            <h4>{text}</h4>
        </div>
    );
}

register(Title, 'page-title', ['text']);