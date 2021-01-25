import React from 'react';
import TodoItem from "../todoItem";

const ListContainer = ({ todos, submitEdit }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100%', width: '100%'}}>
            {todos.map(todo => <TodoItem key={todo.id} todo={todo} submitEdit={submitEdit} />)}
        </div>
    );
}

export default ListContainer;
