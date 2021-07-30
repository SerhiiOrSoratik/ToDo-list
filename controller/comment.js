const {commentModel} = require('../models ')

class CommentController {
    getAllComment() {
        return commentModel.getAllComment();
    }

    createComment(req) {
        return commentModel.addComment(req.body)
    }

}

module.exports = new CommentController();