// This code sets up an Express server for a social media application, connecting to a MongoDB 
// database and defining routes for user-related operations.
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', require('./routes/api/userRoutes'));
// You’ll add /api/thoughts here later

mongoose.connect('mongodb://localhost:27017/socialNetworkDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

