const mongoose = require("mongoose");

const themeSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  topFive: { type: Boolean, required: true },
  newTheme: { type: Boolean, required: true },
  tag: { type: [String], required: true },
  name: { type: String, required: true },
  mainImg: { type: String, required: true },
  imgs: [{ url: { type: String, required: true } }],
});

const Theme = mongoose.model('Theme', themeSchema);

module.exports = Theme;