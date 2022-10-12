import * as mongoose from 'mongoose';

const connectDb = (url: string | undefined) => {
  if (url !== undefined) {
    return mongoose.connect(url);
  }
};

export default connectDb;
