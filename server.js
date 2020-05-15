const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const app = express();

//Middleware 
app.use(body_parser.json());

const Item = require('./route/api/item');
//DB Congfig
const db = require('./config/keys').mongoURL;
//Connection Db
mongoose.connect(db,{
                useCreateIndex:true,
                useUnifiedTopology:true,
                useNewUrlParser:true})
                .then(()=>console.log('MongoDB Connected...'))
                .catch((err)=>console.log(err));

app.use('/api/item',Item);

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));