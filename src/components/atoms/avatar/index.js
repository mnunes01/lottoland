import { h} from "preact";
import register from 'preact-custom-element';
import style from './style.scss';

const Avatar =  ({path = '', alt = ''}) => {

    return(
        <div class={style.avatar}>
            <div
                class={style.imgCont}
            >
                {path !== '' &&
                    <img
                        alt={alt}
                        src={path}
                    />
                }
            </div>
        </div>
    );
}

register(Avatar, 'image-avatar');