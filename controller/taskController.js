const Task = require('../model/taskModel');

exports.createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  try {
    const task = new Task({ title, user: req.user._id });
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error creating task' });
  }
};

exports.getUserTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user._id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
};

exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title, isCompleted } = req.body;

  try {
    const task = await Task.findOneAndUpdate(
      { _id: taskId, user: req.user._id },
      { title, isCompleted },
      { new: true }
    );

    if (!task) return res.status(404).json({ error: 'Task not found' });

    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error updating task' });
  }
};
