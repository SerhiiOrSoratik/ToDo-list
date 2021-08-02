const { options } = require('../routes');
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

const modificateTask = (id, options) => {
  const task = tasks.find((task) => task.id === id);
  if (task !== undefined) {
    Object.assign(task, options);
    return task;
  } else {
    return false;
  }
};

const addTask = (options) => {
  const task = createTask(options);
  tasks.push(task);
  return tasks;
};

const deleteTask = (id) => {
  if (tasks.findIndex((task) => task.id === id) !== -1) {
    tasks.splice(id - 1 , 1);
    return true;
  } else {
    return false;
  }
};

const replaceTask = (id, options) => {
  if (tasks.findIndex((task) => task.id === id) !== -1) {
    tasks[id - 1] = {
      id: id,
      task: options.task,
      done: options.done,
    };
    return tasks;
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

// const getOneTaskComment = ()

const createTaskComment = (options) => {
  return (commentModel.addComment(options, tasks));
} 

const editTaskComment = (options) => {
  return (commentModel.modificateComment(options));
}



module.exports = { getTasks, addTask, editTaskComment, createTaskComment, getTaskComment, modificateTask, deleteTask, replaceTask, getTask };
