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


module.exports = {getAllComment}