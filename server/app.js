import * as dotenv from 'dotenv'
import express from 'express';
import connectDB from './db/connect.js';
import cors from 'cors';
import tasksRoute from './routes/tasks.js';

// const connectString = 'mongodb+srv://vitalii_b88:s53cCgvJ@cluster0.pnvv4.mongodb.net/task_manager?retryWrites=true&w=majority'
dotenv.config();
const app = express();

// middelware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasksRoute);

connectDB(process.env.MONGO_DB_URL)
  .then(() => {
    app.listen(process.env.PORT, (req, resp) => {
      console.log(`Server start on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
