export const getAllTasks = (req, resp) => {
  resp.send('All tasks items');
};

export const getTask = (req, resp) => {
  resp.send('Get task');
};

export const createTask = (req, resp) => {
  resp.send('Create task');
};

export const updateTask = (req, resp) => {
  resp.send('Update task');
};

export const deleteTask = (req, resp) => {
  resp.send('Delete task');
};
