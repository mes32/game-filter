require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

// Configure middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('build'));

// Assign routes
const gamesRouter = require('./routes/games.router');

app.use('/api/games', gamesRouter);

// Start the server
app.listen(port, function () {
    console.log('Listening on port: ', port);
});