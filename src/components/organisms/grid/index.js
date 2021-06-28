import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import CONFS from '../../../configs';

import style from './style.scss';
import Gamecard from "../../molecules/gamecard"

const Grid = (props) => {
    return (
            <div class={style.grid} role="grid">
                {
                    props.gameList.map( game => {
                            return(
                                <div key={`item_${game.gameName}`} class={style.grid__item} role="cell">
                                    <Gamecard 
                                        key={game.gameName}
                                        imagePath={game.imagePath}
                                        caption={game.caption}
                                        title={game.title}
                                        subtitle={game.subTitle}
                                        ctaText={CONFS.GAME_CARD_OPTIONS.CTA_TEXT}
                                        ctaAction={game.ctaAction}
                                        infoAction={game.infoAction}
                                    />
                                </div>
                            )    
                    })
                }
            </div>   
    );
};

export default Grid;
