const express = require('express')
const router = express.Router()


const Recipe = require('../models/Recipe')

// @route GET api/recipes/test
// @desc Test recipes route
// @access Public
router.get('/test', (req, res) => {
  res.send('recipe route testing')
})

// @route GET api/recipes
// @desc Gets a list of all recipes
// @access Public
router.get('/', (req, res) => {
  Recipe.find()
    .then(recipes => res.json(recipes))
    .catch(e => {
      res.status(404).json({
        norecipesfound: "No recipes found"
      })
    })
})

// @route GET api/recipes/:id
// @desc Get single recipe by id
// @access Public
router.get('/:id', (req, res) => {
  Recipe.findById(req.params.id)
    .then(recipe => res.json(recipe))
    .catch(e => {
      res.status(404).json({
        norecipefound: 'No recipe found'
      })
    })
})

// @route POST api/recipes
// @desc Add/save recipe
// @access Public
router.post('/', (req, res) => {
  Recipe.create(req.body)
    .then(recipe => res.json({
      msg: 'Recipe added successfully'
    }))
    .catch(e => res.status(400).json({
      error: 'Unable to add this recipe'
    }))
})


// @route PUT api/recipes/:id
// @desc Update recipe by id
// @access Public
router.put('/:id', (req, res) => {
  Recipe.findByIdAndUpdate(req.params.id, req.body)
    .then(recipe => res.json({
      msg: 'Updated successfully'
    }))
    .catch(e => res.status(400).json({
      error: 'Unable to update this recipe'
    }))
})


// @route DELETE api/recipes/:id
// @desc Delete recipe by id
// @access Public
router.delete('/:id', (req, res) => {
  Recipe.findByIdAndDelete(req.params.id)
    .then(recipe => res.json({
      msg: "Recipe entry deleted successfully"
    }))
    .catch(e => res.status(404).json({
      error: 'No such recipe'
    }))
})

module.exports = router