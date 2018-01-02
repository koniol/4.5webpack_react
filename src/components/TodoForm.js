import React from 'react';
import style from '../App.css';
function TodoForm(props) {
    return (
        <form onSubmit={event => props.send(event)}>
            <input
                type="text"
                onChange={event => props.change(event)}
                value={props.value}
                placeholder={"Add item to list"}
            />
        </form>
    )
}

export default TodoForm;