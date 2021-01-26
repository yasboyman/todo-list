import React from 'react';
import TodoItem from "../todoItem";

// Receives data from back-end--  Containers sends via props to todoItem //

const ListContainer = ({ todos, submitEdit, submitEditIsComplete, submitDelete }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '100%', width: '100%'
            }}
        >

            {/*// maps through the data recieved and renders into UI*/}

            {todos.map(todo =>
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    submitEdit={submitEdit}
                    submitEditIsComplete={submitEditIsComplete}
                    submitDelete={submitDelete}
                />
            )}
        </div>
    );
}

export default ListContainer;
