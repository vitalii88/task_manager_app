import TaskSchema from '../models/task.js';
import asyncWrapper  from '../middelware/asyncWrapper.js';
import { createCustomError } from '../errors/customErrors.js';

export const getAllTasks = asyncWrapper(async (req, resp) => {
  const tasks = await TaskSchema.find({});
  resp.status(200).json({ tasks });
});

export const getTask = asyncWrapper( async (req, resp, next) => {
  const { id: taskId } = req.params;
  const task = await TaskSchema.findOne({ _id: taskId });

  if(!task) {
    return next(createCustomError(`Not find task fom id: ${taskId}`, 404));
  }
  resp.status(200).json({ task });
});

export const createTask = asyncWrapper( async (req, resp) => {
  const task = await TaskSchema.create(req.body);
  resp.status(201).json({ task });
});

export const updateTask = asyncWrapper( async (req, resp, next) => {
  const { id: taskId } = req.params;
  const data = req.body;

  // third argument - is it option.
  const task = await TaskSchema.findOneAndUpdate({ _id: taskId }, data, {
    new: true,
    runValidators: true,
  });

  if(!task) {
    return next(createCustomError(`Not find task fom id: ${taskId}`, 404));
  }

  resp.status(200).json({ task })
});

export const deleteTask = asyncWrapper( async (req, resp, next) => {
  const { id: taskId } = req.params;
  const task = await TaskSchema.findOneAndDelete({ _id: taskId });

  if(!task) {
    return next(createCustomError(`Not find task fom id: ${taskId}`, 404));
  }

  resp.status(200).json({ task });
});
