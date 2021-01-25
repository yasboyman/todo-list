const express = require('express')
const app = express()
const port = 3000
const generateUniqueId = require('generate-unique-id')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const cors = require('cors');
app.use(cors());
app.options('*', cors());
let todos = [
    {
        id: 1,
        name: 'task 1',
        description: 'Finish coding challenge',
        isComplete: false,
        completeBy: 1611594267769,
    },
]

app.get('/getTodos', (req, res) => {
    res.json({ todos })
})

app.post('/createTodo', jsonParser, (req, res) => {
    todos = [...todos, {...req.body, id: generateUniqueId()}]
    res.send('successfully created todo')
})

app.put('/editTodo', jsonParser, (req, res) => {
    todos = todos.map(todo => todo.id === req.body.id ? req.body : todo)
    res.send('successfully updated todo')
})

app.put('/editComplete', jsonParser, (req, res) => {
    todos = todos.map(todo => todo.id === req.body.id ? {...todo, isComplete: !todo.isComplete} : todo)
    res.send('successfully updated todo')
})

app.delete('/deleteTodo/:id', jsonParser, (req, res) => {
    console.log('params', req.params)
    todos = todos.filter(todo => todo.id !== req.params.id)
    res.send('successfully deleted todo')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})