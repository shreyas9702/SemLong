const express = require('express');
const mongoose = require('mongoose');
/*const bcrypt = require('bcrypt');*/
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json()); // For parsing application/json

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/propertyPortal', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
});

// Define models
const Property = mongoose.model('Property', {
  ownerId: mongoose.Types.ObjectId,
  location: String,
  availableFromDate: Date,
  priceRange: Number,
  propertyType: String
});

const User = mongoose.model('User', {
  email: String,
  password: String
});

// Endpoints
app.get('/api/list-properties', async (req, res) => {
  console.log('HelloWorld');
  res.json(JSON.stringify("Shreyas"));
  // const properties = await Property.find();
  // res.json(properties);
});

// ... Other routes for add, update, delete, login, and signup

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
