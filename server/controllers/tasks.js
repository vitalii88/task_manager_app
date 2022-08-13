export const getAllTasks = (req, resp) => {
  resp.send('All tasks items');
};

export const getTask = (req, resp) => {
  resp.json({id: req.params.id });
};

export const createTask = (req, resp) => {
  resp.json(req.body);
};

export const updateTask = (req, resp) => {
  resp.send('Update task');
};

export const deleteTask = (req, resp) => {
  resp.send('Delete task');
};
