import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from "./components/listContainer";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";

const App = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = () => {};

    const editTodo = () => {};

    const deleteTodo = () => {};

    const completeTodo = () => {};

    const incompleteTodo = () => {};


    const fetchTodos = () => axios.get('http://localhost:3000/getTodos')

    useEffect(() => {
        fetchTodos().then(res => setTodos(res.data.todos))
    }, [])

    const submitCreate = (todo) => {
        axios.post('http://localhost:3000/createTodo', todo).then(res => {
            fetchTodos().then(res => setTodos(res.data.todos))
        })
    }

    const submitEdit = (todo) => {
        axios.put(`http://localhost:3000/editTodo`, todo).then(res => {
            fetchTodos().then(res => setTodos(res.data.todos))
        })
    }

    const submitEditIsComplete = (id) => {
        axios.put(`http://localhost:3000/editComplete`, { id }).then(res => {
            fetchTodos().then(res => setTodos(res.data.todos))
        })
    }

    const submitDelete = (id) => {
        axios.delete(`http://localhost:3000/deleteTodo/${id}`, { id }).then(res => {
            fetchTodos().then(res => setTodos(res.data.todos))
        })
    }

    return (
        <div className="App">
            <CreateTodo submitCreate={submitCreate} />
            <ListContainer todos={todos} submitEdit={submitEdit} submitEditIsComplete={submitEditIsComplete} submitDelete={submitDelete} />
        </div>
    );
}

export default App;
