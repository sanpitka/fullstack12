const express = require('express')
const statistics = express.Router()
const { getAsync } = require('../redis')

statistics.get('/', async (req, res) => {
  const addedTodos = parseInt(await getAsync('added_todos')) || 0
  res.send({ added_todos: addedTodos })
});

module.exports = statistics