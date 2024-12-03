// server.js
const express = require('express');
const connectDb = require('./config/database');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
(async () => {
  try {
    await connectDb();
    console.log('Connected to MongoDB successfully.');

    // Routes for both users and posts
    app.use('/api', userRoutes); // Now, '/api/users' and '/api/posts' will work

    // Start server
    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    process.exit(1);
  }
})();
