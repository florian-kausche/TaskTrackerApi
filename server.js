const express = require('express');
const connectDb = require('./config/database');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

if (!process.env.MONGODB_URI) {
  console.error('MongoDB URI is not defined in environment variables');
  process.exit(1);
}

app.use(express.json());

connectDb();

app.use('/api/users', userRoutes);

connectDb().catch(err => {
  console.error('Failed to connect to MongoDB:', err.message);
  process.exit(1);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
