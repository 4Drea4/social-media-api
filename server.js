require('dotenv').config();
const { MongoClient } = require('mongodb');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Create a single GET route at / that, upon a successful database connection, sends back a JSON response: { message: "Successfully connected to the database!" }. If the connection fails, it should send a 500 status code with a message: { message: "Failed to connect to the database." }.
app.get('/',  async (req,res)=>{
    const client = new MongoClient(process.env.MONGO_URI);
    try{
        await client.connect();
        return res.json({message:  "Successfully connected to the database"});
    }catch (error) {
        console.error("Mongo is not connecting properly.")
        return res.status(500).json({message:"Failed to connect to the database. "});
    }finally{
        await client.close();
    }

    });
    
    app.listen(PORT, ()=> {
        console.log(`Server running on localhost:${PORT}`)
    });