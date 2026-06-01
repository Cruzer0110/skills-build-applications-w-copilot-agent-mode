import { Schema, model } from 'mongoose';

const workoutSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true, trim: true },
    difficulty: { type: String, default: 'moderate', trim: true }
  },
  { timestamps: true }
);

export const WorkoutModel = model('Workout', workoutSchema);