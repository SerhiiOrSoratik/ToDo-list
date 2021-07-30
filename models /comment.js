const inc = (init = 0) => () => ++init;
const genId = inc();

const comments = [
    {   id: genId(), text: 'First comment', taskId: 1 },
    {   id: genId(), text: 'Second comment', taskId: 2 },
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

const getComment = (id) => {
    let comment = comments.find(comment => comment.id === id);
    if (comment !== undefined) {
        return comment;
    }
    else {
        return false;
    }
}

// http POST :3000/comments/ text="new comment" taskId=2
const addComment = (body, tasks) => {
    const taskId = parseInt(body.taskId);
    if (tasks.findIndex(task => task.id === taskId) !== -1) {
        const comment = createComment(body);
        comments.push(comment);
        return comments;
    }
    else {
        return false;
    }
}

// http PATCH :3000/comments/1 text="updated comment" 
const modificateComment = (id, body) => {
    let comment = comments.find(comment => comment.id === id);
    if (comment !== undefined) {
    Object.assign(comment, body);
    return comment;
    }
    else {
        return false;
    }
}

// http DELETE :3000/comments/1
const deleteComment = (id) => {
    if (comments.findIndex(comment => comment.id === id) !== -1) {
        comments.splice(id - 1, 1);
        return 'comment delete';
    }
    else {
        return false;
    }
}

const deleteCommentsTask = (taskId) => {
    let len = comments.length;
    for(let i = 0; i < len - 1; i++) {
        if (comments[i].taskId === taskId) {
            comments.splice(i, 1);
            continue;
        }
    }
       
}

module.exports = {getAllComment, addComment, deleteCommentsTask, modificateComment, deleteComment, getComment}