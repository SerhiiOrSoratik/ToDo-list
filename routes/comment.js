const express = require('express');
const router = express.Router();
const comment = require('../controller/comment')

router.get('/', (req, res) => {
    res.json(comment.getAllComment());
})
module.exports = router;