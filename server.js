require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Enable CORS for all requests
app.use(cors());
app.options('*', cors()); // Enable pre-flight across-the-board

app.use(express.json()); // Middleware to parse JSON

// Use routes
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
