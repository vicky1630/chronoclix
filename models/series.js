const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    default: '',
  },
  body: {
    type: String,
    default: '',
  },
}, { timestamps: true });

const seriesSchema = new mongoose.Schema({
  name: {
    type: String,
    default: '',
  },
  creator: {
    type: String,
    default: '',
  },
  description:
  {
    type: String,
    default: '',
  },
  genre:  {
    type: String,
    default: '',
  },
  stories: [storySchema]
}, { timestamps: true });

const Story = mongoose.model('Story', storySchema);
const Series = mongoose.model('Series', seriesSchema);

module.exports = { Series, Story };