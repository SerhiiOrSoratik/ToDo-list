const express = require('express');
const app = express();


const url = require('url');

const tasks = [
    {task: 'Show task'},
    {task: 'Add task'}
];


app.use(express.json())

// curl localhost:3000/tasks
app.get('/tasks', function (req, res) {
    res.json(tasks);
  });

//curl localhost:3000/tasks -d '{ "task": "New task" }' -H "Content-Type: application/json"
app.post('/tasks', (req, res) => {
    console.log('aaaa')
    const task = req.body;
    tasks.push(task);
    res.json(tasks);
})

app.patch('/tasks/:id', (req, res) => {

})



app.listen(3000, () => {
    console.log('Server start')
});
