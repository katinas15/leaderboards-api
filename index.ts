import "module-alias/register";
import express from "express";
const app = express();
app.use(express.json());

const args = process.argv;
const port = args[3];

app.set("port", port);
app.use(require("@routes"));
app.listen(app.get("port"));

console.log("****************************");
console.log("*    Starting Server");
console.log(`*    Port: ${port}`);

module.exports = app;
