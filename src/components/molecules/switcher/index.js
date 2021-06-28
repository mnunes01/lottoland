import { h} from "preact";
import register from 'preact-custom-element';
import { useState, useCallback, useRef, useEffect} from 'preact/hooks';

import style from './style.scss';

const Switcher = ({options, title = "sort", name = 'sort', handleChangeOption}) => {

    const [selectedSort, setSelectedSort] = useState(null)
    const containerRef = useRef(null);

    useEffect(()=>{
       selectedSort !== null && handleChangeOption(selectedSort.field, selectedSort.order)
    }, [selectedSort])

    const expand = () => {
        const container = containerRef.current;
        container.classList.contains(`${style.expanded}`) ? container.classList.remove(`${style.expanded}`) : container.classList.add(`${style.expanded}`)
    }

    return(
        <div
            role="button"
            data-testid="switcher-button" 
            ref={containerRef} 
            class={style.switcher}
            onClick={expand}
        >

            <span class={style.title}>
                <span class={style['icon-arrow']}></span>
                <span>{title}</span>
            </span>


            {
                options.map((el, i)=>{
                    
                    let isChecked = false
                    if (selectedSort === null) {
                        if (el.checked !== undefined && el.checked) {
                            isChecked = true
                        }
                    } else if(selectedSort.field === el.field && selectedSort.order === el.order) {
                        isChecked = true
                    }

                    return(

                        <label key={`option_${i}`} class={style.radio}>
                            <span class={style.radio__input}>
                                <input
                                    id={`option_${i}`}
                                    checked={isChecked}
                                    type="radio"
                                    name 
                                    onClick={() => setSelectedSort({field: el.field, order: el.order})}
                                />
                                <span class={style.radio__control}></span>
                            </span>
                            <label htmlFor={`option_${i}`} class={style.radio__label}>{el.text}</label>
                        </label>

                    )
                })

            }
            
        </div>    
        
    );
};

register(Switcher, 'sort-switcher', ['options', 'title', 'name', 'handleChangeOption']);
