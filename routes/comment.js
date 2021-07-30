const express = require('express');
const router = express.Router();
const comment = require('../controller/comment')

router.get('/', (req, res) => {
    res.json(comment.getAllComment());
});

router.get('/:id', (req, res) => {
    const answer = comment.getComment(req);
    if (answer !== false) {
        res.json(answer);
    }
    else {
        res.status(404);
        res.end('Comment not found');
    }
});

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

router.patch('/:id', (req, res) => {
    const answer = comment.modificateComment(req);
    if (answer !== false) {
        res.json(answer);
    }
    else {
        res.status(404);
        res.end('Comment not found');
    }
});

router.delete('/:id', (req, res) => {
    const answer = comment.deleteComment(req);
    if (answer !== false) {
        res.end(answer);
    }
    else {
        res.status(404);
        res.end('Comment not found');
    }
});



module.exports = router;