import mongoose, { Document } from 'mongoose';
import { IUser } from './User';

export interface IJob extends Document {
  company: string;
  position: string;
  status: string;
  jobType: string;
  jobLocation: string;
  createdBy: IUser;
}

const JobSchema = new mongoose.Schema<IJob>(
  {
    company: {
      type: String,
      required: [true, 'Please provide company'],
      maxLength: 20,
    },
    position: {
      type: String,
      required: [true, 'Please provide position'],
      maxLength: 20,
    },
    status: {
      type: String,
      enum: ['interview', 'declined', 'pending'],
      default: 'pending',
    },
    jobType: {
      type: String,
      enum: ['full-time', 'part-time', 'remote', 'internship'],
      default: 'full-time',
    },
    jobLocation: {
      type: String,
      default: 'my city',
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Please provide user'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobSchema);
