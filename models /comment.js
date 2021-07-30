const {getTasks} = require('./task-model')

const inc = (init = 0) => () => ++init;
const genId = inc();

const comments = [
    {   id: genId(), text: 'First comment', taskId: 1 },
    {   id: genId(), text: 'Second comment', taskId: 1 }
];

const createComment = data => {
    return {
        id: genId(),
        text: data.text,
        taskId: data.taskId
    }
}

// http :3000/comments/
const getAllComment = () => {
    return comments;
}

const addComment = (body) => {
    const taskId = parseInt(body.taskId);
    let tasks = getTasks();
    console.log(tasks);
    console.log(taskId)
    console.log(tasks.findIndex(task => task.id === taskId))
    if (tasks.findIndex(task => task.id === taskId) !== -1) {
        const comment = createComment(body);
        comments.push(comment);
        return comments;
    }
    else {
        return false;
    }
}

module.exports = {getAllComment, addComment}