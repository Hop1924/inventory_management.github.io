const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI || 'mongodb+srv://hotstarbot9_db_user:dGgXrMecH8kv6IjR@zs.tr3j6l7.mongodb.net/';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
}

connectDB();

// Serve the frontend HTML at the root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'inventory_management.html'));
});

// API Routes
app.post('/api/find/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const { filter = {}, limit = 1000 } = req.body;
    const db = client.db('inventory_db');
    const documents = await db.collection(collection).find(filter).limit(parseInt(limit)).toArray();
    res.json({ documents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/insertOne/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const { document } = req.body;
    const db = client.db('inventory_db');
    const result = await db.collection(collection).insertOne(document);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/updateOne/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const { filter, update } = req.body;
    const db = client.db('inventory_db');
    const result = await db.collection(collection).updateOne(filter, update);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/deleteOne/:collection', async (req, res) => {
  try {
    const { collection } = req.params;
    const { filter } = req.body;
    const db = client.db('inventory_db');
    const result = await db.collection(collection).deleteOne(filter);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});