import {CustomAPIError} from '../errors/customErrors.js';

const errorHandler = (error, req, resp, next) => {
  if(error instanceof  CustomAPIError) {
    return resp.status(error.statusCode).json({ msg: error.message });
  }
  return resp.status(500).json({ msg: 'Something wrong, please try again' });
};

export default errorHandler;
