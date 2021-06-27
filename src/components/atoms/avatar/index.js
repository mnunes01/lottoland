import register from 'preact-custom-element';
import style from './style.scss';

const Avatar =  ({path = ''}) => {

    return(
        <div class={style.avatar}>
            <div
                class={style.imgCont}
            >
                <img 
                    src={path}
                />
            </div>
            
        </div>
    );
}

register(Avatar, 'image-avatar', ['info']);