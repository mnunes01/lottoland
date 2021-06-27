import { h} from "preact";
import register from 'preact-custom-element';
import { useState, useEffect } from 'preact/hooks';

import "../../atoms/avatar"
import "../../atoms/textArea"
import "../../atoms/cta";
import "../../atoms/info"

import style from './style.scss';

const Gamecard = ({key, imagePath = '', caption = '', title = '', subtitle = '', ctaText = '', ctaAction = undefined, infoAction = undefined}) => {

    const [cardRef, setCardRef] = useState()
    const [showCard, setShowCardRef] = useState(false)

    useEffect(()=>{
        return () => {
            setCardRef(null)
        }
    }, [])

    useEffect(() => {
        let observer
        let didCancel = false

        if(cardRef && !showCard) {
            if(IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if(!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
                                    setShowCardRef(true)
                                    observer.unobserve(cardRef)
                            }
                        })
                    },
                    {
                        //left the threshold at 0.75 on porpouse so the lazy loading skeleton is observable
                        //only for dev / demo intention
                        threshold: 0.75,

                    }
                )
                observer.observe(cardRef)
            } else {
                // unsupported browser fallback
                setShowCardRef(true)
            }
        }

        return () => { //cleanup on dismount
            didCancel = true
            if (observer && observer.unobserve) {
                observer.unobserve(cardRef)
            }
        }
    }, [cardRef])

    return(
        <div
            ref={setCardRef}
            key={key}
            class={style.card}
        >
            
            {showCard ?
                <div class={style.card__content}>
                    <image-avatar 
                        path={imagePath}
                    >
                    <info-button
                            action={infoAction}    
                        />   
                    </image-avatar>
                    <text-area 
                        caption={caption}
                        title={title}
                        subtitle={subtitle}
                    />
                    <cta-button
                        text={ctaText}
                        action={ctaAction}
                    />
                </div>:
                <div class={style.skeleton}></div>
            }
        </div>
        
    );
    
};

export default Gamecard;

//registering the gamecard as a webcomponent was creating render delays and low performance on the app
//and since i am not using the on the shadow to encapsulate any dom or style i just opted to use a preact normal component instead 
//register(Gamecard, 'game-card', ['key', 'ctaText', 'imagePath', 'caption', 'title', 'subtitle']);
