const express = require('express')
const app = express()
const port = 3001
const generateUniqueId = require('generate-unique-id')

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const cors = require('cors');
app.use(cors());
app.options('*', cors());
let todos = []

app.get('/', (req, res) => {
    res.send('hello test!!!!!!')
})


app.get('/getTodos', (req, res) => {
    res.json({ todos })
})

app.post('/createTodo', jsonParser, (req, res) => {
    todos = [...todos, {...req.body, id: generateUniqueId()}]
    res.json({ todos })
})

app.put('/editTodo', jsonParser, (req, res) => {
    todos = todos.map(todo => todo.id === req.body.id ? req.body : todo)
    res.json({ todos })
})

app.put('/editComplete', jsonParser, (req, res) => {
    todos = todos.map(todo => todo.id === req.body.id ? {...todo, isComplete: !todo.isComplete} : todo)
    res.json({ todos })
})

app.delete('/deleteTodo/:id', jsonParser, (req, res) => {
    console.log('params', req.params)
    todos = todos.filter(todo => todo.id !== req.params.id)
    res.send('successfully deleted todo')
})

app.listen(port, () => {
    console.log(` Server started at:${port}`)
})