import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github";
import { getMongoRepository } from "typeorm";
import User from "../entities/User";
import jwt from "jsonwebtoken";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "http://localhost:8000/api/auth/github/callback",
    },
    async function (_: any, __: any, profile: any, cb: any) {
      const userRepository = getMongoRepository(User);
      let user = await userRepository.findOne({ username: profile.username });
      if (!user) {
        user = await userRepository.save({
          username: profile.username,
          email: profile._json.email !== undefined ? profile._json.email : "",
        });
      }
      cb(null, {
        accessToken: jwt.sign({ uid: user.id }, process.env.JWT_SECRET!, {
          expiresIn: "7 days",
        }),
      });
    }
  )
);