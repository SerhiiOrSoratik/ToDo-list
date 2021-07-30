const {commentModel} = require('../models ')

class CommentController {
    getComment(req) {
        return commentModel.getComment(req)
    }

    getAllComment() {
        return commentModel.getAllComment();
    }

    createComment(req) {
        return commentModel.addComment(req.body)
    }

    modificateComment(req) {
        return commentModel.modificateComment(req);
    }

    deleteComment(req) {
        return commentModel.deleteComment(req);
    }

}

module.exports = new CommentController();