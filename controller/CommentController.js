const {commentModel} = require('../models ')
const {taskModel} = require('../models ');

class CommentController {
    getComment(req) {
        const id = parseInt(req.params.id);
        return commentModel.getComment(id)
    }

    getAllComment() {
        return commentModel.getAllComment();
    }

    createComment(req) {
        const tasks = taskModel.getTasks();
        const body = req.body
        return commentModel.addComment(body, tasks)
    }

    modificateComment(req) {
        const id = parseInt(req.params.id);
        const body = req.body
        return commentModel.modificateComment(id, body);
    }

    deleteComment(req) {
        const id = parseInt(req.params.id);
        return commentModel.deleteComment(id);
    }

}

module.exports = new CommentController();