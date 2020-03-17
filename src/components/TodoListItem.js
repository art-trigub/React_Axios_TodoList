import React from 'react'

function TodoListItem({item, onDeleteTask, onEditTask, onToggle}) {

    function onEdit(e) {
        e.stopPropagation();
        onEditTask(item)
        console.log(item)
    }

    function onDelete(e) {
        e.stopPropagation();
        onDeleteTask(item)
    }

    function onToggleElement() {
        onToggle(item)
    }

    let styleTask = {
        backgroundColor: "red"
    }

    if(item.isDone) styleTask = {backgroundColor: "green"}

    return (
        <li onClick={onToggleElement} style={styleTask}>
            {item.title}
            <span onClick={onEdit}>  edit</span>
            <span onClick={onDelete}>  X</span>
        </li>
    )
}

export default TodoListItem
