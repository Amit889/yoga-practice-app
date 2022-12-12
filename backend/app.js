const express = require('express');
require("./database/connection");
const Custlist = require("./model/customer");
const app = express();
const port = process.env.PORT||4000;

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(express.json());
app.get("/",async(req,res)=>{
    try {
        const data = await Custlist.find();
        res.json(data);
    } catch (error) {
        res.send(error);
    }
});

app.post("/",async(req,res)=>{
    
    try {
        
        const name = req.body.name;
        const age = req.body.age;
        const slot = req.body.slot;
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth();
        
        const data = await Custlist.find({"year":year,"month":month,"slot":slot});
       // console.log(data);
        const size = Object.keys(data).length;
        if(size!==0){
            res.send("slot not avilable!");
        }else{
            const temp = new Custlist({
                "name": name,
                "age": age,
                "slot":slot,
                "year": year,
                "month": month
            });
            const result = await temp.save();
           // console.log(result);
             res.send(result);
        }
            
            
    } catch (error) {
        res.send(error);
    }
})

app.listen(port,()=>{
    console.log("Listoning port no 4000!");
})