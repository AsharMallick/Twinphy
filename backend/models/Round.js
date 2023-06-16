const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    name: String,
    endTime: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    isEnded:{
        type:Boolean,
        default:false
    },

    posts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
    minLikes: {
      type: Number,
      required: true,
    },
    contest: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Contest",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Round", schema);
