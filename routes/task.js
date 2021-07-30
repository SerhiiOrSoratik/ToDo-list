const express = require('express');
const router = express.Router();
const controller = require('../controller/controller')

// curl localhost:3000/tasks
// http :3000/tasks
router.get('/', function (req, res) {
    res.json(controller.getTasks());
  });

router.get('/:id', (req, res) => {
    const answer = controller.getTask(req);
    checkAnswer(answer, res);;
});


//curl localhost:3000/tasks -d '{ "task": "New task" }' -H "Content-Type: application/json"
//http POST :3000/tasks task="new task"
router.post('/', (req, res) => {
    res.json(controller.createTask(req));
});

//curl -X PATCH localhost:3000/tasks/1 -d '{"done": true}' -H "Content-Type: application/json"
//http PATCH :3000/tasks/1 done=true
router.patch('/:id', (req, res) => {
    const answer = controller.modificateTask(req,res);
    checkAnswer(answer, res);
});

//http DELETE :3000/tasks/1 
router.delete('/:id', (req, res) => {
    const answer = controller.deleteTask(req, res);
    checkAnswer(answer, res);
});

//http PUT :3000/tasks/1 task="newnewnew" done=true
router.put('/:id', (req, res) => {
    const answer = controller.replaceTask(req, res);
    checkAnswer(answer, res);
});

//http :3000/tasks/1/comments
router.get('/:id/comments', (req, res) => {
    const answer = controller.getTaskComment(req);
    checkAnswer(answer, res);
})

const checkAnswer = (answer, res) => {
    if (answer !== false) {
        res.json(answer);
    }
    else {
        res.status(400);
        res.end('Task not found');
    }
}

module.exports = router;
