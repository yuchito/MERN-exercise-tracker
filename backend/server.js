const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreatedIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB db connection established successfully');
});

app.listen(port, () => {
    console.log('Server running on port: ${port}')
})