import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'must provide name'],
      trim: true,
      maxlength: [20, 'Name can not be more then 20 characters'],
    },
    complited: {
      type: Boolean,
      default: false,
    }
  }
);

export default mongoose.model('Task', TaskSchema);
