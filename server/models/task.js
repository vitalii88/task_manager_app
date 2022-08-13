import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    complited: {
      type: String,
    }
  }
);

export default mongoose.model('Task', TaskSchema);
