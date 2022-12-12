const mongoose  = require("mongoose");

const custlist = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    age:{
        type:Number,
        require:true,
    },
    slot:{
        type:String,
        require:true,
    },
    year: Number,
    month: String
});

const Custlist = new mongoose.model("Mycustlist",custlist);

module.exports = Custlist;