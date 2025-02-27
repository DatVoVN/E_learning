'use server';
import mongoose from 'mongoose';
let isConnect: boolean = false;
export const connectToDatabase = async () => {
  if (!process.env.MONGODB_URL) {
    throw new Error('MongoDB is not set');
  }
  if (isConnect) {
    console.log('MonggoDB is already connected');
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'elearning',
    });
    isConnect = true;
    console.log('Using connected');
  } catch (error) {
    console.log(error);
  }
};
