const express = require('express');
const router = express.Router();
const comment = require('../controller/comment')

router.get('/', (req, res) => {
    res.json(comment.getAllComment());
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
    
})


module.exports = router;