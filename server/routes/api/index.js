const express = require("express");
const Job = require("../../schema/JobsSchema");
const router = express.Router();
const Jobs = require("./../../model/job");

// Home page
router.get("/search", async (req, res, next) => {
  const data = await Jobs.findFiveJobs();
  res.send({ data: data });
});

module.exports = router;
