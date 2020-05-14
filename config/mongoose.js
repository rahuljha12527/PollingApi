const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/PollingApi');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"error"));

db.once('open',function(){
    console.log("Successfully connected to db");
});

module.exports=db;


