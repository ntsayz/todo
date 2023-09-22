const express = require('express');
const todoController = require('../controllers/todo_controller');

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.post('/', todoController.addTodo);

// Add more routes as necessary

module.exports = router;
