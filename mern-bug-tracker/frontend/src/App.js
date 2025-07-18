import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  const [bugs, setBugs] = useState([]);
  const [error, setError] = useState(null);

  const fetchBugs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bugs');
      setBugs(res.data);
    } catch (err) {
      setError('Failed to fetch bugs');
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const addBug = async (bug) => {
    try {
      const res = await axios.post('http://localhost:5000/api/bugs', bug);
      setBugs([...bugs, res.data]);
    } catch (err) {
      setError('Failed to add bug');
    }
  };

  const updateBug = async (id, updates) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/bugs/${id}`, updates);
      setBugs(bugs.map(b => b._id === id ? res.data : b));
    } catch (err) {
      setError('Failed to update bug');
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${id}`);
      setBugs(bugs.filter(b => b._id !== id));
    } catch (err) {
      setError('Failed to delete bug');
    }
  };

  return (
    <ErrorBoundary>
      <div className="container">
        <h1>Bug Tracker</h1>
        {error && <div className="error">{error}</div>}
        <BugForm onSubmit={addBug} />
        <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
