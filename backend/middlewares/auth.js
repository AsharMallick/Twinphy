const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.isAuthenticated = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return res.status(401).json({
        message: "Please login first",
      });
    }

    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded._id);

    next();
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.authorizeAdmin = async (req, res, next) => {
    try{
        const user = await User.findById(req.user._id);
        if(user.role.toLowerCase()!=="admin"){
            return res.status(401).json({
                success:false,
                message:`${user.role} is not allowed`
            });
        }
        next();
    }catch(error){
        res.status(500).json({
            message:error.message
        })
    }
};
