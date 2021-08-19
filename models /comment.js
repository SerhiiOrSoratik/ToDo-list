const inc = (init = 0) => () => ++init;
const genId = inc();

let comments = [
    {   id: genId(), author: 'Sergo', text: 'First comment', taskId: 1 },
    {   id: genId(), author: 'Sergo', text: 'Second comment', taskId: 1 },
    {   id: genId(), author: 'Soratik', text: 'Second comment', taskId : 2},
    {   id: genId(), author: 'Sergo', text: 'Third comment', taskId: 3 },
];

const createComment = data => {
    return {
        id: genId(),
        author: data.author,
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

// http POST :3000/comments/ author="Soratik" text="new comment" taskId=2
const addComment = (options, tasks) => {
    const taskId = parseInt(options.taskId);
    if (tasks.findIndex(task => task.id === taskId) !== -1) {
        const comment = createComment(options);
        comments.push(comment);
        return comment;
    }
    else {
        return false;
    }
}

// http PATCH :3000/comments/1 text="updated comment" author="Sergo"
const modificateComment = (id, options) => {
    let comment = comments.find(comment => comment.id === +id);
    if (comment !== undefined) {
    Object.assign(comment, options);
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
        return true;
    }
    else {
        return false;
    }
}

const deleteCommentFromName = (author) => {
    comments = comments.filter(comment => comment.author !== author );
    return true;
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

const deleteCommentsTaskFromName = (taskId, author) => {
    comments = comments.filter(comment => {
        return comment.author !== author || comment.taskId !== +taskId
    });
}

module.exports = {getAllComment, deleteCommentsTaskFromName, deleteCommentFromName, addComment, deleteCommentsTask, modificateComment, deleteComment, getComment}