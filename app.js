const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const multer = require('multer');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: [
    'http://localhost:5173',
    'https://sendsierraleone.com',
    'http://konocouncil.kakebo.sendsierraleone.com/',
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 600,
};

app.use(cors(corsOptions));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Root route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the KONO Backend API' });
});

// Import routes
const routes = require('./src/routes');
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Multer-specific errors
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File size exceeds the 5MB limit.',
      });
    } else {
      return res.status(400).json({
        error: `Multer error: ${err.message}`,
      });
    }
  } else if (
    err.message === 'Invalid file type, only JPEG, PNG and PDF is allowed!'
  ) {
    // Custom error from your Multer configuration
    return res.status(400).json({
      error: err.message,
    });
  } else {
    // For all other errors
    res.status(500).json({
      error: 'Something went wrong on the server.',
    });
  }
});

module.exports = app;
