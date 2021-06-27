import register from 'preact-custom-element';
import style from './style.scss';

const Loader = ({text}) => {

    return(
        <div class={style.loader}>				
            <h5>{text}</h5>
            <progress></progress>
        </div>
        
    );
};

register(Loader, 'progress-load', ['text']);