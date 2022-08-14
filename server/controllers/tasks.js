import TaskSchema from '../models/task.js';

export const getAllTasks = async (req, resp) => {
  try {
    const tasks = await TaskSchema.find({});
    return resp.status(200).json({ tasks });
  } catch (error) {
    resp.status(500).json({ msg: error })
  }
};

export const getTask = async (req, resp) => {
  try {
    const { id: taskId } = req.params;
    const task = await TaskSchema.findOne({ _id: taskId });

    if(!task) {
      return resp.status(404).json({msg: `Not find task fom id: ${taskId}`});
    }
    resp.status(200).json({ task })
  } catch (error) {
    resp.status(500).json({ msg: error });
  }
};

export const createTask = async (req, resp) => {
  try {
    const task = await TaskSchema.create(req.body);
    resp.status(201).json({ task });
  } catch (error) {
    resp.status(500).json({ msg: error });
  }


};

export const updateTask = async (req, resp) => {
  try {
    const { id: taskId } = req.params;
    const data = req.body;

    // third argument - is it option.
    const task = await TaskSchema.findOneAndUpdate({ _id: taskId }, data, {
      new: true,
      runValidators: true,
    });

    if(!task) {
      return resp.status(404).json({msg: `Not find task fom id: ${ taskId }`});
    }

    resp.status(200).json({ task })
  } catch (error) {
    resp.status(500).json({ msg: error });
  }
};

export const deleteTask = async (req, resp) => {
  try {
    const { id: taskId } = req.params;
    const task = await TaskSchema.findOneAndDelete({ _id: taskId });

    if(!task) {
      return resp.status(404).json({msg: `Not find task fom id: ${ taskId }`});
    }

    resp.status(200).json({ task });
    // resp.status(200).json({  task: null, status: 'success' });
  } catch (error) {
    resp.status(500).json({ msg: error });
  }
};
