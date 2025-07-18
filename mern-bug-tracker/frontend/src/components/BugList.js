import React from 'react';

function BugList({ bugs, onUpdate, onDelete }) {
  if (!bugs.length) return <div>No bugs reported.</div>;

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id}>
          <strong>{bug.title}</strong> - {bug.description} <br />
          Status: <select value={bug.status} onChange={e => onUpdate(bug._id, { status: e.target.value })}>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="resolved">Resolved</option>
          </select>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BugList;
