const {getAllComment, addComment} = require('../models ')

class CommentController {
    getAllComment() {
        return getAllComment();
    }

    createComment(req) {
        return addComment(req.body)
    }

}

module.exports = new CommentController();