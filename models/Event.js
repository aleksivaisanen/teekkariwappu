const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EventSchema = new Schema({
  // Name of the event
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
  },
  place: {
    type: String
  },
  enrolLink: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = Event = mongoose.model('event', EventSchema);
