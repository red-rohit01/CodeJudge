const Problem = require("../models/problems");

exports.getProblems = async (req, res) => {
  try {
    const problems = await Problem.find({}).select("title difficulty _id");

    res.status(200).json({
      problems,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

exports.getProblemById = async (req, res) => {
  try {
    const { problemId } = req.params;
    const problem = await Problem.findOne({ _id: problemId });
    res.status(200).json({
      problem,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

exports.addProblem = async (req, res) => {
  try {

    const newProblem = await Problem.create(req.body);
    res.status(201).json({
      message: "Problem added successfully",
      problem: newProblem,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

exports.editProblem = async (req, res) => {
  try {
    const updatedProblem = await Problem.findOneAndUpdate(
      {
        _id: req.params.problemId,
      },
      req.body,
      { new: true }
    );
    res.status(200).json({
      message: "Problem updated",
      problem: updatedProblem,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

exports.deleteProblem = async (req, res) => {
  try {
    const { problemId } = req.params;
    await Problem.findOneAndDelete({ _id: problemId });
    res.status(200).json({
      message: "Problem Deleted Successfully",
      sucess: true,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};
