const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const port=3019

const app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

mongoose.connect('mongodb://127.0.0.1:27017/portfolio');
const db = mongoose.connection;
db.once('open',()=>{
    console.log('mongodb connected');
});

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Users = mongoose.model('data', userSchema);

app.post('/post',async (req,res)=>{
    const {name, email, message} = req.body;
    const newUser = new Users({name, email, message});
    await newUser.save();
    console.log(newUser)
    res.sendFile(path.join(__dirname,'index.html'));
})
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})