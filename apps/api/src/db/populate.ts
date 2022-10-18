import { readFile } from 'fs/promises';
import * as dotenv from 'dotenv';
import connectDb from './connect';
import Job from '../model/Job';

dotenv.config();

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    await Job.deleteMany();
    const jsonData = JSON.parse(
      await readFile(new URL('./mock-data.json', import.meta.url))
    );
    await Job.create(jsonData);
    console.log('Success!');
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
