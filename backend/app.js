const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const passport = require("passport");
const session = require("express-session");

require("dotenv").config({ path: "backend/config/config.env" });
const { connectPassport } = require("./utils/Provider");

// Using Middlewares
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

connectPassport();
// Importing Routes

const post = require("./routes/post");
const user = require("./routes/user");
const contest = require("./routes/contest");
const User = require("./models/User");

// Using Routes
app.use("/api/v1", post);
app.use("/api/v1", user);
app.use("/api/v1", contest);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
});

module.exports = app;
