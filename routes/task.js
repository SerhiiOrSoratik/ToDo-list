const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

// curl localhost:3000/tasks
// http :3000/tasks
router.get('/', function (req, res) {
    res.json(controller.getTasks());
  });


//curl localhost:3000/tasks -d '{ "task": "New task" }' -H "Content-Type: application/json"
//http POST :3000/tasks task="new task"
router.post('/', (req, res) => {
    res.json(controller.createTask(req));
});

// //curl -X PATCH localhost:3000/tasks/1 -d '{"done": true}' -H "Content-Type: application/json"
// //http PATCH :3000/tasks/1 done=true
router.patch('/:id', (req, res) => {
    res.json(controller.modificateTask(req, res));
});

router.delete('/:id', (req, res) => {
    res.end(controller.deleteTask(req, res));
});

module.exports = router;

// export default router;