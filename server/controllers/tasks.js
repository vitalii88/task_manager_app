import TaskSchema from '../models/task.js';

export const getAllTasks = (req, resp) => {
  resp.send('All tasks items');
};

export const getTask = (req, resp) => {
  resp.json({id: req.params.id });
};

export const createTask = async (req, resp) => {
  // resp.json(req.body);
  const task = await TaskSchema.create(req.body);
  resp.status(200).json({task});
};

export const updateTask = (req, resp) => {
  resp.send('Update task');
};

export const deleteTask = (req, resp) => {
  resp.send('Delete task');
};
