const {taskModel} = require('../models ')

class Controller {
    getTasks() {
        return taskModel.getTasks();
    }

    getTask(req) {
        return taskModel.getTask(req);
    }

    createTask(req) {
        return taskModel.addTask(req.body);
    }

    modificateTask(req, res) {
        return taskModel.modificateTask(req, res);
    }

    deleteTask(req, res) {
        return taskModel.deleteTask(req, res);
    }

    replaceTask(req, res) {
        return taskModel.replaceTask(req, res);
    }
}

module.exports = new Controller();