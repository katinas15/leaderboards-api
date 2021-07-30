import { Response, Request } from "express";
import Leaderboard, { LeaderboardScore } from "@models/Leaderboard";

export const postScore = async (req: Request, res: Response) => {
  try {
    const game = req.params.game;
    const { name, score } = req.body;
    const newScore = new Leaderboard({ name, score, game });
    console.log(newScore);
    await newScore.save();
    console.log(game);
    res.send(newScore);
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};

export const getScores = async (req: Request, res: Response) => {
  try {
    const game = req.params.game;
    console.log(game);
    const scores: LeaderboardScore[] = await Leaderboard.find({ game });
    console.log(game);
    res.status(200).json(scores);
    return;
  } catch (e) {
    console.error(e);
    res.status(400).send(e);
  }
};
