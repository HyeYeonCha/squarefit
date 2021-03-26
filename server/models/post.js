const mongoose = require("mongoose");

const { Schema } = mongoose;
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
  },
});

postSchema.method("dateFormatting", (now) => {
  const currentTimeZoneOffsetInHours = -now.getTimezoneOffset() / 60;
  const currentTimeZone = new Date(now + currentTimeZoneOffsetInHours);
  const year = currentTimeZone.getFullYear();
  const month = `0${currentTimeZone.getMonth() + 1}`.slice(-2);
  const date = `0${currentTimeZone.getDate()}`.slice(-2);
  const hours = `0${currentTimeZone.getHours()}`.slice(-2);
  const minutes = `0${currentTimeZone.getMinutes()}`.slice(-2);
  const seconds = `0${currentTimeZone.getSeconds()}`.slice(-2);

  return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
});

module.exports = mongoose.model("Post", postSchema);
