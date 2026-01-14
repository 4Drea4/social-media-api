require('dotenv').config();
const { MongoClient } = require('mongodb');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


//Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
