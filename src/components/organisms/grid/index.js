import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import CONFS from '../../../configs';

import style from './style.scss';
import Gamecard from "../../molecules/gamecard"


function useFetch(query, page, gameList) {
    
    const [list, setList] = useState([])
    const [hasMore, setHasMore] = useState(false) 
  
    const sendQuery = useCallback(() => {
        setList((prev) => [...prev, ...gameList[page]])
        setLoading(false);
    }, [query, page])
  
    useEffect(() => {
      sendQuery(query)
    }, [query, sendQuery, page])
  
    return { list };
}


const Grid = (props) => {
    
    const [page, setPage] = useState(0);
    const { list } = useFetch(query, page, chunk(props.gameList, 15));
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);  
    
    return (
            <div class={style.grid}>
                {
                    props.gameList.map( game => {
                            return(
                                <div class={style.grid__item}>
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
