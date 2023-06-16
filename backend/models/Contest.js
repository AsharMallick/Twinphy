const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    noOfRounds: {
      type: Number,
      default: 1,
    },
    isEnded: {
      type: Boolean,
      default: false,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    winner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    rounds: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Round",
      },
    ],
  },
  { timestamps: true }
);

const Contest = mongoose.model("Contest", schema);
module.exports = Contest;
