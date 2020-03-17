import React from 'react'
import TodoListItem from './TodoListItem';

function TodoList({list, onDeleteTask, onEditTask, onToggle}) {
    return (
        <ul>
            {list.map(item => (
                <TodoListItem key={item.id} id={item.id} item={item} onDeleteTask={onDeleteTask} onToggle={onToggle} onEditTask={onEditTask} />
            ))}
        </ul>
    )
}

export default TodoList
