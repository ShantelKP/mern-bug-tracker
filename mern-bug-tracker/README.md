# MERN Bug Tracker

A full-stack bug tracking application built with MongoDB, Express, React, and Node.js. Users can report, update, and track issues in a project. Includes integrated testing and debugging best practices for reliability.

---

## Features
- Report new bugs via a form
- View a list of all reported bugs
- Update bug statuses (open, in-progress, resolved)
- Delete bugs
- Error handling on both backend and frontend
- Unit and integration tests for reliability

---

## Installation

### Prerequisites
- Node.js & npm
- MongoDB (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```powershell
   cd mern-bug-tracker/backend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Configure environment variables in `.env` (default provided):
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/bugtracker
   ```
4. Start MongoDB locally (if not running).
5. Run the backend server:
   ```powershell
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend folder:
   ```powershell
   cd mern-bug-tracker/frontend
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Start the React app:
   ```powershell
   npm start
   ```

---

## Running Tests

### Backend
- Run all tests:
  ```powershell
  npm test
  ```
- Tests include:
  - Unit tests for model validation
  - Integration tests for API routes (using Supertest)

### Frontend
- Run all tests:
  ```powershell
  npm test
  ```
- Tests include:
  - Unit tests for form and list components
  - Integration tests for UI and API interactions

---

## Debugging Techniques

- **Backend:**
  - Use `console.log` for value tracking
  - VS Code debugger (`.vscode/launch.json` included)
  - Node.js inspector: `node --inspect index.js`
- **Frontend:**
  - Use Chrome DevTools for inspecting network requests and component state
  - Error boundaries implemented for React components

---

## Testing Approach & Coverage

- **Backend:**
  - Unit tests validate model logic and error handling
  - Integration tests cover all API endpoints (create, update, delete bugs)
  - Database calls are mocked for isolated testing
- **Frontend:**
  - Unit tests for component rendering and form validation
  - Integration tests for user interactions and API calls
  - UI tested under different states (empty list, error message)

---

## Project Structure
```
mern-bug-tracker/
  backend/
    index.js
    .env
    package.json
    tests/
    .vscode/
  frontend/
    src/
      components/
      __tests__/
    package.json
```

---

## License
MIT
