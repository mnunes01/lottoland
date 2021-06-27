import { h } from 'preact';
import style from './style.scss';
import "../../atoms/title"



const PageHeader = (props) => {
    
    return (
        <div class={style.pageHeader}>
            <page-title text={props.pagetitle}/>
        </div>
    );
};

export default PageHeader;
