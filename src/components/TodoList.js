import React from 'react';
import style from '../App.css';

const TodoList = (props) => {
    var elements = props.list.map( (element) => {
            return <li onClick={() => props.remove(element.id)} key={element.id}><i className={"fa fa-check-square-o"} ></i> {element.text} </li>;
        }
    );

    return (
        <ul className={style.Task}>{elements}</ul>
    );
}
export default TodoList;