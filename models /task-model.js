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

const getTasks = () => {
    return tasks;
}

const modificateTask = (req, res) => {
    const id = parseInt(req.params.id);
    let task = tasks.find(task => task.id === id);
    Object.assign(task, req.body);
    return task;
}

const addTask = (body) => {
    const task = createTask(body);
    tasks.push(task);
    return(tasks);
}

const deleteTask = (req, res) => {
    const id = parseInt(req.params.id);
    tasks.splice(id - 1, 1);
    console.log(tasks)
    return('task deleted');
}

const logRequest = (req, next) => {
    let {method, url} = req;
    console.log(`[${new Date().toISOString()}] ${method} ${url}`);
    next();
}

module.exports = {getTasks, logRequest, addTask, modificateTask, deleteTask}