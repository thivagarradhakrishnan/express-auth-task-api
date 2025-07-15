const express = require('express');
const router = express.Router();
const { createTask, getUserTasks, updateTask } = require('../controller/taskController');
const protect = require('../middleware/authMiddleware');

router.post('/', protect, createTask);
router.get('/', protect, getUserTasks);
router.put('/:taskId', protect, updateTask);

module.exports = router;
