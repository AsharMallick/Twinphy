const express = require("express");
const { getAllContest, createContest, createRound, getRoundsOfContest, participateInContest, getContest, addPostOnRound } = require("../controllers/contest");
const { authorizeAdmin, isAuthenticated } = require("../middlewares/auth");
const router = express.Router();


router.get('/getallcontests', isAuthenticated, authorizeAdmin, getAllContest);

router.post('/createcontest', isAuthenticated, authorizeAdmin, createContest);
router.post('/createround/:id', isAuthenticated, authorizeAdmin, createRound);
router.get('/getrounds/:id', isAuthenticated, authorizeAdmin, getRoundsOfContest);
router.post('/contest/participate/:id', isAuthenticated, participateInContest);
router.post('/postonround/:id', isAuthenticated, addPostOnRound);
router.get('/contest/:id', isAuthenticated, getContest);

module.exports = router;