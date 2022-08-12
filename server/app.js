import express from 'express';

const app = express();

app.listen(5000, (req, resp) => {
  console.log('Server start on port 5000');
})
