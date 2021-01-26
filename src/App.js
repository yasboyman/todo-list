import React, { useState, useEffect } from 'react';
import './App.css';
import ListContainer from "./components/listContainer";
import CreateTodo from "./components/CreateTodo";
import axios from "axios";

// Component renders Children to UI, communicates with backend- sends + receives data

const App = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos().then(res => setTodos(res.data.todos))
    }, [])

    const fetchTodos = () => axios.get('http://localhost:3001/getTodos');

    const submitCreate = (todo) => {
        axios.post('http://localhost:3001/createTodo', todo).then(res => setTodos(res.data.todos))
    }


    const submitEdit = (todo) => {
        axios.put(`http://localhost:3001/editTodo`, todo).then(res => setTodos(res.data.todos))
    }

    const submitEditIsComplete = (id) => {
        axios.put(`http://localhost:3001/editComplete`, { id }).then(res => setTodos(res.data.todos))
    }

    // ************   RES NOT USED ? UNUSED VARIABLE, BUG ***********  //
    const submitDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteTodo/${id}`, { id }).then(res => {
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
