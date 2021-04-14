import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { getMongoRepository } from "typeorm";
import User from "../entities/User";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID || "GITHUB_CLIENT_ID",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "GITHUB_CLIENT_SECRET",
      callbackURL: "http://localhost:8000/api/auth/github/callback",
    },
    async function (_: any, __: any, profile: any, cb: any) {
      const userRepository = getMongoRepository(User);
      let user = await userRepository.findOne({ username: profile.username });
      if (!user) {
        user = await User.create({
          username: profile.username,
          email: profile._json.email,
        }).save();
        console.log({ user });
      }
      cb(null, {});
    }
  )
);
