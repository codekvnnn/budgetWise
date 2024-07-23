const express = require('express');
const router = express.Router();

// Mock budget data
let budget = {};

// Set budget endpoint
router.post('/', (req, res) => {
  const { username, amount } = req.body;
  budget[username] = amount;
  res.status(201).send('Budget set');
});

// Get budget endpoint
router.get('/', (req, res) => {
  const { username } = req.query;
  res.json({ budget: budget[username] || 0 });
});

module.exports = router;
