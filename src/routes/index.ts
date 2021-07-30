import express from "express";
import fs from "fs";
import { removeExtensionFromFile } from "@middleware/utils";
const router = express.Router();
const routesPath = `${__dirname}/`;

fs.readdirSync(routesPath).filter((file: string) => {
  const routeFile = removeExtensionFromFile(file);
  return routeFile !== "index"
    ? router.use(`/${routeFile}`, require(`./${routeFile}`))
    : "";
});

router.use("*", (req, res) => {
  res.status(404).json({
    errors: {
      msg: "NOT_FOUND",
    },
  });
});

module.exports = router;
