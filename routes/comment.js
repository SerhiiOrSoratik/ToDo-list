const express = require('express');
const router = express.Router();
const comment = require('../controller/CommentController')

// http :3000/comments/
router.get('/', (req, res) => {
    res.json(comment.getAllComment());
});

//http :3000/comments/2
router.get('/:id', (req, res) => {
    const answer = comment.getComment(req);
    checkAnswer(answer, res);
});

//http POST :3000/comments/ text="aaa" taskId=1 
router.post('/', (req, res) => {
    const answer = comment.createComment(req);
    if (answer !== false) {
        res.json(answer);
    }
    else {
        res.status(404);
        res.end('Task not found');
    }
});

// http PATCH :3000/comments/2 text="AEFAFA"
router.patch('/:id', (req, res) => {
    const answer = comment.modificateComment(req);
    checkAnswer(answer, res);
});

// http DELETE :3000/comments/2
router.delete('/:id', (req, res) => {
    const answer = comment.deleteComment(req);
    if (answer !== false) {
        res.status(200);
        res.end();
    }
    else {
        res.status(400);
        res.end('Task not found');
    }
});

const checkAnswer = (answer, res) => {
    if (answer !== false) {
        res.json(answer);
    }
    else {
        res.status(400);
        res.end('Comment not found');
    }
}



module.exports = router;