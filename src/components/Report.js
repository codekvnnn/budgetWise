import React, { useState, useEffect } from 'react';

const Report = () => {
  const [report, setReport] = useState({});

  useEffect(() => {
    const fetchReport = async () => {
      const response = await fetch('/api/report');
      const data = await response.json();
      setReport(data.report);
    };
    fetchReport();
  }, []);

  return (
    <div>
      <h2>Financial Report</h2>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </div>
  );
};

export default Report;
