import express from "express";
import { postScore, getScores } from "@controllers/leaderboard";

const router = express.Router();

router.post("/:game", postScore);

router.get("/:game", getScores);

module.exports = router;
