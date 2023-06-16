const Contest = require("../models/Contest");
const Round = require("../models/Round");
const Post = require("../models/Post");
const User = require("../models/User");

exports.getAllContest = async (req, res) => {
  try {
    const contests = await Contest.find({});
    const contestArr = [];
    contests.forEach((item) => {
      const date = new Date(item.endTime).getTime();
      if (date < Date.now()) {
        item.isEnded = true;
        item
          .save()
          .then((res) => {})
          .catch((error) => {
            console.log(error);
          });
        contestArr.push(item);
      } else {
        item.isEnded = false;
        item
          .save()
          .then((res) => {})
          .catch((error) => {
            console.log(error);
          });
      }
    });
    res.status(200).json({
      success: true,
      contests,
      endedContests: contestArr,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.createContest = async (req, res) => {
  try {
    const { name, endTime, noOfRounds } = req.body;
    const formattedEndTime = new Date(endTime.toString()).toLocaleDateString();
    const contest = await Contest.create({
      name,
      endTime: formattedEndTime,
      noOfRounds,
    });

    res.status(200).json({
      success: true,
      message: "Contest created successfully",
      contest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createRound = async (req, res) => {
  try {
    let { name, endDate, minLikes, endTime } = req.body;
    const contest = await Contest.findById(req.params.id);
    if (!name) {
      name = `Round ${contest.rounds.length}`;
    }
    const time = new Date(`${endDate} ${endTime}`);
    let newTime = time.toLocaleDateString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    let newEndTime = newTime.split(" ")[1];
    let newEndDate = newTime.split(" ")[0].split(",")[0];
    if (contest.rounds.length < 1) {
      minLikes = 0;
    }

    const round = await Round.create({
      name,
      endDate: newEndDate,
      endTime: newEndTime,
      minLikes,
      contest: contest._id,
    });
    contest.rounds.push(round._id);
    await contest.save();
    const roundEndTime = new Date(
      `${round.endDate} ${round.endTime}`
    ).getTime();
    if (roundEndTime < Date.now()) {
      round.isEnded = true;
      await round.save();
    }
    res.status(200).json({
      success: true,
      message: `Round created for contest ${contest.name}`,
      round,
      contest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getRoundsOfContest = async (req, res) => {
  try {
    const rounds = await Round.find({ contest: req.params.id });
    res.status(200).json({
      success: true,
      rounds,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.participateInContest = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id);
    let exists = false;
    contest.participants.forEach((item) => {
      if (item.toString() === req.user._id.toString()) {
        exists = true;
      }
    });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already participated",
      });
    }

    if (!contest.isEnded) {
      contest.participants.push(req.user._id);
      await contest.save();
    } else {
      return res.status(401).json({
        success: false,
        message: "Contest has ended",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Successfully paricipated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
exports.addPostOnRound = async (req, res) => {
  try {
    const round = await Round.findById(req.body.roundId).populate("posts");
    const contest = await Contest.findById(req.params.id).populate("posts");
    if (!contest) {
      return res.status(200).json({
        success: false,
        messsage: "Contest not found",
      });
    }
    if (!round) {
      return res.status(200).json({
        success: false,
        messsage: "Round not found",
      });
    }
    // const myCloud = await cloudinary.v2.uploader.upload(req.body.image, {
    //   folder: "posts",
    // });
    // const newPostData = {
    //   caption: req.body.caption,
    //   image: {
    //     public_id: myCloud.public_id,
    //     url: myCloud.secure_url,
    //   },
    //   owner: req.user._id,
    // };

    const post = await Post.create({
      caption: "req.body.caption",
      image: {
        public_id: "myCloud.public_id",
        url: "myCloud.secure_url",
      },
      owner: req.user._id,
    });
    // const post = await Post.create(newPostData);
    const user = await User.findById(req.user._id);

    user.posts.unshift(post._id);
    await user.save();
    if (contest.isEnded) {
      //Checking that contest is not over
      return res.status(400).json({
        success: false,
        message: "Contest has been ended",
      });
    }

    let isParticipated = false;
    contest.participants.forEach((item) => {
      if (item.toString() === req.user._id.toString()) {
        isParticipated = true;
      }
    });
    console.log({ isParticipated });

    let alreadyPosted = false;
    round.posts.forEach(async (item) => {
      if (item.owner.toString() === req.user._id.toString()) {
        alreadyPosted = true;
      }
    });

    let isEligible = false;
    if (contest.posts.length === 0) {
      isEligible = true;
    } else {
      for (let i = contest.posts.length - 1; i >= 0; i--) {
        const element = contest.posts[i];
        if (element.owner.toString() === req.user._id.toString()) {
          if (element.likes.length >= round.minLikes) {
            isEligible = true;
          }
        }
      }
    }
    if (isParticipated) {
      if (!alreadyPosted) {
        if (!round.isEnded) {
          //Checking whether the round is not over
          if (!isEligible) {
            //Checking eligibility for posting
            return res.status(400).json({
              success: false,
              message: "You are not eligible to post in this round",
            });
          } else {
            //eligible
            contest.posts.push(post._id);
            round.posts.push(post._id);
            await round.save();
            await contest.save();

            return res.status(201).json({
              success: true,
              message: "Post added on round",
            });
          }
        } else {
          return res.status(400).json({
            success: false,
            message: "Round has ended",
          });
        }
      } else {
        return res.status(400).json({
          success: false,
          message: "Already posted on round",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "Please participate first",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getContest = async (req, res) => {
  try {
    const contest = await Contest.findById(req.params.id).populate(
      "rounds rounds.posts"
    );
    const date = new Date(contest.endTime).getTime();
    if (date < Date.now()) {
      contest.isEnded = true;
      contest
        .save()
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    } else {
      contest.isEnded = false;
      contest
        .save()
        .then((res) => {})
        .catch((error) => {
          console.log(error);
        });
    }
    if (!contest) {
      return res.status(404).json({
        success: false,
        message: "Success not found",
      });
    }
    res.status(200).json({
      success: true,
      contest,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
