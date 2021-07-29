const express = require('express');
const router = express.Router();
const task = require('./task')
const comment = require('./comment')

router.use("/tasks", task);
router.use("/comments", comment)
module.exports = router;