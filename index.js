const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const opn = require('opn');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection string
const mongoURI = 'mongodb://localhost:27017/DressStore';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Serve static files from the 'public' folder
app.use(express.static('public'));

// Routes
app.use('/api/users', userRoutes);
app.use('/auth', authRoutes);

// Welcome route
app.get('/', (req, res) => {
  res.send('Welcome to our group project! We are Team Web Builders.');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  opn('http://localhost:5000');
});
