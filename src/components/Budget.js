import React, { useState, useEffect } from 'react';

const Budget = () => {
  const [budget, setBudget] = useState(0);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const fetchBudget = async () => {
      const response = await fetch('/api/budget');
      const data = await response.json();
      setBudget(data.budget);
    };
    fetchBudget();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/budget', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    setBudget(amount);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" placeholder="Budget" onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Set Budget</button>
      </form>
      <p>Current Budget: {budget}</p>
    </div>
  );
};

export default Budget;
