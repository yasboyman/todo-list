import React, { useState } from 'react';
import './App.css';
import ListContainer from "./components/listContainer";

const App = () => {
    const mockTodos = [
        {
            id: 1,
            name: 'task 1',
            description: 'Finish coding challenge',
            isComplete: false,
            completeBy: 1611594267769,
        },
        {
            id: 2,
            name: 'task 2',
            description: 'Some other task',
            isComplete: false,
            completeBy: 1611594267769,
        },
        {
            id: 3,
            name: 'task 3',
            description: 'last task',
            isComplete: true,
            completeBy: null,
        }
    ]
    const [todos, setTodos] = useState(mockTodos);

    const addTodo = () => {};

    const editTodo = () => {};

    const deleteTodo = () => {};

    const completeTodo = () => {};

    const incompleteTodo = () => {};

    return (
        <div className="App">
            <ListContainer todos={todos} />
        </div>
    );
}

export default App;
