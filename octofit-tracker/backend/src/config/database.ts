import mongoose from 'mongoose';

const defaultMongoUrl = 'mongodb://127.0.0.1:27017/octofit_db';

export async function connectDatabase() {
  const mongoUrl = process.env.MONGODB_URI ?? defaultMongoUrl;
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(mongoUrl, {
    dbName: 'octofit_db'
  });

  return mongoose.connection;
}