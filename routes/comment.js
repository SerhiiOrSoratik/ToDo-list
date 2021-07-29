const express = require('express');
const router = express.Router();
const comment = require('../controller/comment')

router.get('/', (req, res) => {
    res.json(comment.getAllComment());
});

router.post('/', (req, res) => {
    res.json(comment.createComment(req));
})
module.exports = router;