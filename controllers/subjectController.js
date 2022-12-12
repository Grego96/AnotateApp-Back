const { Subject } = require("../models");

async function index(req, res) {
  const subjects = await Subject.findAll();
  if (subjects) {
    res.status(200).json(subjects);
  } else {
    res.status(404).json({ message: "subject not found" });
  }
}

async function show(req, res) {
  const subject = await Subject.findByPk(req.params.id);
  if (subject) {
    res.status(200).json(career);
  } else {
    res.status(404).json({ message: "subject not found." });
  }
}

async function store(req, res) {
  try {
    const [newSubject, created] = await Subject.findOrCreate({
      where: {
        name: req.body.name,
      },
      defaults: {
        name: req.body.name,
        days: req.body.days,
        // schedule: req.body.schedule,
        type: req.body.type,
        careerId: req.body.careerId,
      },
    });
    if (created) {
      res.status(201).json({ message: "subject created" });
    } else {
      res
        .status(400)
        .json({ message: "A subject with that name already exist" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function edit(req, res) {
  const subject = await Subject.findByPk(req.params.id);
  if (subject) {
    try {
      await subject.update({ ...req.body });
      res.status(200).json({ message: "subject updated." });
    } catch (error) {
      //   res.send(error);
      res.status(402).json({ message: "error editing" });
    }
  } else {
    res.status(402).json({ message: "subject not found." });
  }
}

async function destroy(req, res) {
  const subject = await Subject.findByPk(req.params.id);
  if (subject) {
    await subject.destroy();
    res.status(200).json({ message: "subject deleted." });
  } else {
    res.status(400).json({ message: "subject not found." });
  }
}

module.exports = {
  index,
  show,
  store,
  edit,
  destroy,
};
