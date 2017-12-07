import React from 'react';
import style from '../App.css';
function Title(props) {
    return (
        <div>
            <h2 className={style.TaskHeader}>{props.title}</h2>
            <i className={"fa fa-thumb-tack fa-header-task"} ></i>
        </div>
    )
}

export default Title;