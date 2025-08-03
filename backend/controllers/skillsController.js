const Skill = require("../models/Skill");

exports.postSkill = async (req, res) => {
  const { title, description, category, videoUrl } = req.body;
  try {
    const skill = await Skill.create({ title, description, category, videoUrl, user: req.user._id });
    res.status(201).json(skill);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllSkills = async (req, res) => {
  const skills = await Skill.find().populate("user", "name");
  res.json(skills);
};
