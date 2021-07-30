require("dotenv").config();
import { MongoClient } from "mongodb";
const uri = process.env.MONGO_MAIN;
if (uri) {
  const client = new MongoClient(uri);
  client.connect((err) => {
    const collection = client.db("main").collection("leaderboard");
    // perform actions on the collection object
    console.log(`*    DB: connected`);
    client.close();
  });
}
