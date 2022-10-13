import mongoose, { Document } from 'mongoose';
import validator from 'validator';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string | undefined;
  lastName?: string;
  location?: string;
  createJWT?: () => object;
}

const UserSchema = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: [true, 'Please provide name'],
    minLength: 3,
    maxLength: 20,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    validate: {
      validator: validator.isEmail,
      message: 'Please provide valid email',
    },
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
    minLength: 6,
    select: false,
  },
  lastName: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'lastName',
  },
  location: {
    type: String,
    trim: true,
    maxLength: 20,
    default: 'my city',
  },
});

UserSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  const salt = await bcrypt.genSalt(10);
  if (this.password !== undefined) {
    this.password = await bcrypt.hash(this.password, salt);
  }
});

UserSchema.methods['createJWT'] = function () {
  return jwt.sign(
    { userId: this['_id'] },
    process.env['JWT_SECRET'] as string,
    {
      expiresIn: process.env['JWT_LIFETIME'],
    }
  );
};

export default mongoose.model('User', UserSchema);
