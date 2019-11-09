const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Event = require('../../models/Event');

// @route   GET api/events
// @desc    Get All Events
// @access  Public
router.get('/', (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then(event => res.json(event))
    .catch(err => res.status(404).json({success: false}));
});

// @route   POST api/events
// @desc    Create An Event
// @access  Private
router.post('/', auth, (req, res) => {
  const newEvent = new Event({
    name: req.body.name,
    date: req.body.date,
    place: req.body.place,
    enrolLink: req.body.enrolLink,
    description: req.body.description
  });

  if (req.body.name == "") {
    res.status(400).json({ msg: "Tapahtuman nimi ei saa olla tyhjä!" })
  } else {
    newEvent.save().then(event => res.json(event));
  }
});

// @route   DELETE api/events/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Event.findById(req.params.id)
    .then(event => event.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
