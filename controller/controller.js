const {getTasks, modificateTask, addTask, deleteTask, replaceTask} = require('../models ')

class Controller {
    getTasks() {
        return getTasks();
    }

    createTask(req) {
        return addTask(req.body);
    }

    modificateTask(req, res) {
        return modificateTask(req, res);
    }

    deleteTask(req, res) {
        return deleteTask(req, res);
    }

    replaceTask(req, res) {
        return replaceTask(req, res);
    }
}

module.exports = new Controller();