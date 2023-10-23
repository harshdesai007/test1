const mongoose = require('mongoose');
require("dotenv").config()

const  dbconfig =async()=>{

    await mongoose.connect(process.env.DB_URL)
    console.log("Connected to database");

}

module.exports=dbconfig;