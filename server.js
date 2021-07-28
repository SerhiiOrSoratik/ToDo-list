const express = require('express');
const app = express();

const inc = (init = 0) => () => ++init;
const genId = inc();

const tasks = [
    {   id: genId(),
        task: 'Show task',
        done: false
    },
    {
        id: genId(),
        task: 'Add task',
        done: false
    }
];

const createTask = data => {
    return {
        id: genId(),
        task: data.task,
        done: false
    }
}

function logRequest(req, next) {
    let {method, url} = req;
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next();
}

app.use(express.json())
app.use((req, res, next) => {
    logRequest(req, next);
})
// curl localhost:3000/tasks
// http :3000/tasks
app.get('/tasks', function (req, res) {
    res.json(tasks);
  });

//curl localhost:3000/tasks -d '{ "task": "New task" }' -H "Content-Type: application/json"
//http POST :3000/tasks task="new task"
app.post('/tasks', (req, res) => {
    const task = createTask(req.body);
    tasks.push(task);
    res.json(tasks);
});

//curl -X PATCH localhost:3000/tasks/1 -d '{"done": true}' -H "Content-Type: application/json"
//http PATCH :3000/tasks/1 done=true
app.patch('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let task = tasks.find(task => task.id === id);
    if (task) {
        Object.assign(task, req.body);
        res.json(task);
    } else {
        res.status(404).json({error: 'Task not found'});
    }
});

app.listen(3000, () => {
    console.log('Server start')
});
