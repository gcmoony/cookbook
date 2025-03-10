const mongoose = require('mongoose')

const RecipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageLink: {
    type: String,
    default: ""
  },
  ingredients: {
    type: String,
    default: ""
  },
  prepSteps: {
    type: String,
    default: ""
  },
  cookSteps: {
    type: String,
    default: ""
  },
  prepTime: {
    type: Number,
    default: 0
  },
  cookTime: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: "Recipe Description"
  },
  author: {
    type: String,
    default: "Anonymous"
  },
  publish_date: {
    type: Date,
    default: Date.now
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Recipe = mongoose.model('recipe', RecipeSchema)