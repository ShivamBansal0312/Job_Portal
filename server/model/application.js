const Application = require("../schema/ApplicationSchema");

const apply = async (selectedJob, appliedBy) => {
  const data = new Application({
    jobId: selectedJob,
    userId: appliedBy,
  });

  return await data.save();
};

const accept = async (id) => {
  return await Application.updateOne({ id: id }, { $set: { accepted: true } });
};

const reject = async (id) => {
  return await Application.updateOne({ id: id }, { $set: { rejected: true } });
};

const suggest = async (id, suggestion) => {
  return await Application.updateOne(
    { id: id },
    { $set: { suggestion: suggestion } }
  );
};

const findApplicationByUser = (userId) => {
  return Application.find({ userId: userId });
};

module.exports = {
  apply,
  accept,
  reject,
  findApplicationByUser,
  suggest,
};
