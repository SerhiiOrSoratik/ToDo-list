const commentModel = require('./comment')

const inc =
  (init = 0) =>
  () =>
    ++init;
const genId = inc();

const tasks = [
  { id: genId(), task: "Show task", done: false },
  { id: genId(), task: "Add task", done: false },
];

const createTask = (data) => {
  return {
    id: genId(),
    task: data.task,
    done: false,
  };
};

const getTasks = () => {
  return tasks;
};

const getTask = (id) => {
  const task = tasks.find((task) => task.id === id);
  if (task !== undefined) {
    return task;
  } else {
    return false;
  }
};

const getTaskComment = (id, comments) => {
    const taskComments = [];
    comments.forEach(comment => {
        if (comment.taskId === id) {
            taskComments.push(comment);
        }
    })
    return taskComments;
}

const modificateTask = (id, body) => {
  const task = tasks.find((task) => task.id === id);
  if (task !== undefined) {
    Object.assign(task, body);
    return task;
  } else {
    return false;
  }
};

const addTask = (body) => {
  const task = createTask(body);
  tasks.push(task);
  return tasks;
};

const deleteTask = (id) => {
  if (tasks.findIndex((task) => task.id === id) !== -1) {
    tasks.splice(id - 1, 1);
    return "task deleted";
  } else {
    return false;
  }
};

const replaceTask = (id, body) => {
  if (tasks.findIndex((task) => task.id === id) !== -1) {
    tasks[id] = {
      id: id,
      task: body.task,
      done: body.done,
    };
    return tasks;
  } else {
    return false;
  }
};

module.exports = { getTasks, addTask, getTaskComment, modificateTask, deleteTask, replaceTask, getTask };
