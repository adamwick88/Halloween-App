const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },

  difficulty: {
    type: String,
    allowedValues: ['Beginner', 'Easy', 'Normal', 'Hard', 'Expert'],
    required: true,
  },

  age:{
    type:String,
    allowedValues: ['Infant', 'Child', 'Teen', 'Adult'],
    required: true,
  },

  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//MongoDB Collection named here - will give lowercase plural of name 
module.exports = mongoose.model("Post", PostSchema);
