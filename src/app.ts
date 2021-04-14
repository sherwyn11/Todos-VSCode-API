require("./config/passport");
import express from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import fs from "fs";
import passport from "passport";
import router from "./routers/index.route";

const app: express.Application = express();

let accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), {
  flags: "a",
});

app.use(morgan("combined", { stream: accessLogStream }));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(passport.initialize());

passport.serializeUser(function (user: any, done) {
  done(null, user.accessToken);
});

app.use("/api", router);

export default app;