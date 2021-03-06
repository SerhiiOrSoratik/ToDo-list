const {taskModel} = require('../models ')
const {commentModel} = require('../models ');

class Controller {
    getTasks() {
        return taskModel.getTasks();
    }

    getTask(req) {
        const id = parseInt(req.params.id);
        return taskModel.getTask(id);
    }

    createTask(req) {
        console.log(req.body)
        return taskModel.addTask(req.body);
    }

    modificateTask(req) {
        const id = parseInt(req.params.id);
        const body = req.body;
        return taskModel.modificateTask(id, body);
    }

    deleteTask(req) {
        const id = parseInt(req.params.id);
        commentModel.deleteCommentsTask(id);
        return taskModel.deleteTask(id);
    }

    replaceTask(req) {
        const id = parseInt(req.params.id);
        const body = req.body;
        return taskModel.replaceTask(id, body);
    }

    getTaskComment(req) {
        const id = parseInt(req.params.id);
        const comments = commentModel.getAllComment();
        return taskModel.getTaskComment(id, comments);
    }

    getOneTaskComment(req) {
        const id = parseInt(req.params.id);
        return 
    }

    addComment(req) {
        const options = req.body;
        options.taskId = req.params.taskId
        return taskModel.createTaskComment(options);
    }

    editComment(req) {
        const options = req.body;
        const id = req.params.id;
        return taskModel.editTaskComment(id, options);
    }

    deleteCommentsTaskFromName(req) {
        const taskId = req.params.taskId;
        const author = req.params.author;
        return taskModel.deleteCommentsTaskFromName(taskId, author);
    }
}

module.exports = new Controller();