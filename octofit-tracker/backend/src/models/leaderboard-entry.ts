import { Schema, model } from 'mongoose';

const leaderboardEntrySchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, required: true, default: 0 }
  },
  { timestamps: true }
);

export const LeaderboardEntryModel = model('LeaderboardEntry', leaderboardEntrySchema);