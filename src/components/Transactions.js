import React, { useState, useEffect } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setTransactions(data.transactions);
    };
    fetchTransactions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/transactions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ transaction }),
    });
    // Update local state
    setTransactions([...transactions, transaction]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Description" onChange={(e) => setTransaction({ ...transaction, description: e.target.value })} />
        <input type="number" placeholder="Amount" onChange={(e) => setTransaction({ ...transaction, amount: e.target.value })} />
        <button type="submit">Add Transaction</button>
      </form>
      <ul>
        {transactions.map((t, index) => (
          <li key={index}>{t.description}: {t.amount}</li>
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
