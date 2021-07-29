const {getAllComment} = require('../models ')

class CommentController {
    getAllComment() {
        return getAllComment();
    }

}

module.exports = new CommentController();