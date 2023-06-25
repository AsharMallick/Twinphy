const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { Strategy: FacebookStrategy } = require("passport-facebook");
const passport = require("passport");
const User = require("../models/User");

exports.connectPassport = () => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({
          googleId: profile.id,
        });
        if (!user) {
          const newUser = await User.create({
            name: profile.displayName,
            googleId: profile.id,
            avatar: {
              url: profile.photos[0].value,
            },
            email: profile.emails[0].value,
          });
          return done(null, newUser);
        } else {
          return done(null, user);
        }
      }
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
  });
  passport.use(
    new FacebookStrategy(
      {
        clientID: "652490606741844" || process.env.FACEBOOK_CLIENT_ID,
        clientSecret:
          "f5c08ce6073842bcb55c794983aa2718" ||
          process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL: "http://localhost:4000/api/v1/facebook/callback",
      },
      async function (accessToken, refreshToken, profile, done) {
        console.log("AAYA");
        const user = await User.findOne({
          facebookId: profile.id,
        });
        console.log(profile);
        if (!user) {
          const newUser = await User.create({
            name: profile.displayName,
            facebookId: profile.id,
            avatar: {
              url: profile.photos[0].value,
            },
            email: profile.emails[0].value,
          });
          return done(null, newUser);
        } else {
          return done(null, user);
        }
      }
    )
  );
};
