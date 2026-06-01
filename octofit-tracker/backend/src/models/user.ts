import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, trim: true },
    name: { type: String, required: true, trim: true },
    teamId: { type: Schema.Types.ObjectId, ref: 'Team', default: null }
  },
  { timestamps: true }
);

export const UserModel = model('User', userSchema);