import { Schema, model } from "mongoose";

export interface LeaderboardScore {
  name: string;
  score: number;
  game: string;
}

const schema = new Schema<LeaderboardScore>({
  name: { type: String, required: true },
  score: { type: Number, required: true },
  game: { type: String, required: true },
});

const Leaderboard = model<LeaderboardScore>("Leaderboard", schema);

export default Leaderboard;
