const mongoose = require("mongoose");


var mongoURL = 'mongodb+srv://rachana:raCHana@cluster0.ic7luwr.mongodb.net/foodbeaw'

mongoose.connect(mongoURL,{useUnifiedTopology:true,useNewUrlParser:true})

var db = mongoose.connection

db.on('connected',() => {
    console.log("Connected Successfully!!!");
});

db.on('error',() => {
    console.log("Connection Failed!!");
});

module.exports = mongoose