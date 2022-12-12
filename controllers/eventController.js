const { Event } = require("../models");

async function index(req, res) {
  const events = await Event.findAll();
  if (events) {
    res.status(200).json(events);
  } else {
    res.status(404).json({ message: "event not found" });
  }
}

async function show(req, res) {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    res.status(200).json(event);
  } else {
    res.status(404).json({ message: "event not found." });
  }
}

async function store(req, res) {
  try {
    const [newEvent, created] = await Event.findOrCreate({
      where: {
        name: req.body.name,
      },
      defaults: {
        name: req.body.name,
        date: req.body.date,
        careerId: req.body.careerId,
      },
    });
    if (created) {
      res.status(201).json({ message: "event created" });
    } else {
      res.status(400).json({ message: "A event with that name already exist" });
    }
  } catch (error) {
    res.status(400).json({ message: error });
  }
}

async function edit(req, res) {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    try {
      await subject.update({ ...req.body });
      res.status(200).json({ message: "event updated." });
    } catch (error) {
      res.status(402).json({ message: "error editing" });
    }
  } else {
    res.status(402).json({ message: "event not found." });
  }
}

async function destroy(req, res) {
  const event = await Event.findByPk(req.params.id);
  if (event) {
    await event.destroy();
    res.status(200).json({ message: "event deleted." });
  } else {
    res.status(400).json({ message: "event not found." });
  }
}

module.exports = {
  index,
  show,
  store,
  edit,
  destroy,
};
