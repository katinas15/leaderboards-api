import "module-alias/register";
import express from "express";
import "./src/db/mongo";
const app = express();
app.use(express.json());

const args = process.argv;
const port = process.env.PORT || args[3];

app.use(express.json());
app.set("port", port);
app.use(require("@routes"));
app.listen(app.get("port"));

console.log("****************************");
console.log("*    Starting Server");
console.log(`*    Port: ${port}`);

module.exports = app;
