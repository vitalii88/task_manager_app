import mongoose from 'mongoose';

const connectDB = (url) => {
  return mongoose.connect(url)
    .then(() => console.log('Connect to DB is success'))
    .catch((error) => console.log(error));
};

export default connectDB;
