import express from 'express';
import cors from 'cors';
import tasksRoute from './routes/tasks.js';

const app = express();

// middelware
app.use(cors());
app.use(express.json());

// routes
app.use('/api/v1/tasks', tasksRoute);

app.listen(5000, (req, resp) => {
  console.log('Server start on port 5000');
})
