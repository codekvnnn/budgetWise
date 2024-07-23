const express = require('express');
const router = express.Router();

// Mock transactions data
const transactions = [];

// Add transaction endpoint
router.post('/', (req, res) => {
  const { username, transaction } = req.body;
  transactions.push({ username, ...transaction });
  res.status(201).send('Transaction added');
});

// Get transactions endpoint
router.get('/', (req, res) => {
  const { username } = req.query;
  const userTransactions = transactions.filter(t => t.username === username);
  res.json({ transactions: userTransactions });
});

module.exports = router;
