import * as dotenv from 'dotenv'
import express from 'express';
import connectDB from './db/connect.js';
import cors from 'cors';
import tasksRoute from './routes/tasks.js';
import notFound from './middelware/notFound.js';

dotenv.config();
const app = express();

// middelware
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(notFound);

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
