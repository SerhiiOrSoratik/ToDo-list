const {taskModel} = require('../models ')

class Controller {
    getTasks() {
        return taskModel.getTasks();
    }

    getTask(req) {
        const id = parseInt(req.params.id);
        return taskModel.getTask(id);
    }

    getTaskComment(req) {
        const id = parseInt(req.params.id);
        return taskModel.getTaskComment(id);
    }

    createTask(req) {
        return taskModel.addTask(req.body);
    }

    modificateTask(req) {
        const id = parseInt(req.params.id);
        const body = req.body;
        return taskModel.modificateTask(id, body);
    }

    deleteTask(req) {
        const id = parseInt(req.params.id);
        return taskModel.deleteTask(id);
    }

    replaceTask(req) {
        const id = parseInt(req.params.id);
        const body = req.body;
        return taskModel.replaceTask(id, body);
    }
}

module.exports = new Controller();