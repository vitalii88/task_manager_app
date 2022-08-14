import * as dotenv from 'dotenv'
import express from 'express';
import connectDB from './db/connect.js';
import cors from 'cors';
import tasksRoute from './routes/tasks.js';
import notFound from './middelware/notFound.js';
import errorHandler from './middelware/errorHandler.js';

dotenv.config();
const app = express();

// middelware
app.use(cors());
app.use(express.json());
app.use(express.static('./public'));

// routes
app.use('/api/v1/tasks', tasksRoute);

// this middlewares need stay after all other routes
app.use(notFound);
app.use(errorHandler);

connectDB(process.env.MONGO_DB_URL)
  .then(() => {
    app.listen(process.env.PORT, (req, resp) => {
      console.log(`Server start on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
