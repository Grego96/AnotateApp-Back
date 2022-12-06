const { Career } = require("../models");

async function index(req, res) {
  const careers = await Career.findAll();
  if (careers) {
    res.status(200).json(careers);
  } else {
    res.status(404).json({ message: "courses not found" });
  }
}

async function show(req, res) {
  const career = await Career.findByPk(req.params.id);
  if (career) {
    res.status(200).json(career);
  } else {
    res.status(404).json({ message: "Course not found." });
  }
}

async function store(req, res) {
  try {
    const [newCareer, created] = await Career.findOrCreate({
      where: {
        name: req.body.name,
      },
      defaults: {
        name: req.body.name,
        institution: req.body.institution,
      },
    });
    if (created) {
      res.status(201).json({ message: "Career created" });
    } else {
      res
        .status(400)
        .json({ message: "A career with that name already exist" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function edit(req, res) {
  const career = await Career.findByPk(req.params.id);
  if (career) {
    try {
      await career.update({ ...req.body });
      res.status(200).json({ message: "Career updated." });
    } catch (error) {
      //   res.send(error);
      res.status(402).json({ message: "error editing" });
    }
  } else {
    res.status(402).json({ message: "Career not found." });
  }
}

async function destroy(req, res) {
  const career = await Career.findByPk(req.params.id);
  if (career) {
    await career.destroy();
    res.status(200).json({ message: "Career deleted." });
  } else {
    res.status(400).json({ message: "Career not found." });
  }
}

module.exports = {
  index,
  show,
  store,
  edit,
  destroy,
};
