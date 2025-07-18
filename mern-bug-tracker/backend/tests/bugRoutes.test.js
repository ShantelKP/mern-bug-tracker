const request = require('supertest');
const express = require('express');
const mongoose = require('mongoose');
const { Bug } = require('../index');

const app = express();
app.use(express.json());

app.post('/api/bugs', async (req, res) => {
  try {
    const bug = new Bug(req.body);
    await bug.save();
    res.status(201).json(bug);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

beforeAll(async () => {
  await mongoose.connect('mongodb://localhost:27017/bugtracker_test', { useNewUrlParser: true, useUnifiedTopology: true });
});
afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.disconnect();
});

describe('POST /api/bugs', () => {
  it('should create a new bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug', description: 'Bug description' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
  });
});
