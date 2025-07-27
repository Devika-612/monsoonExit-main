const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
var dotenv = require('dotenv')
dotenv.config()

app.use(express.json());
app.use(cors());
//Write missing code here
require("./connection");
const blog=require("./model");

//Write your POST API here
app.post('/add',(req,res)=>{
  try{
    blog(req.body).save();
    res.send("Blog data added successfully ")
  } catch(error) {
    res.send(error);
  }
});

app.get("/get", async (req, res) => {
  try {
    let data = await blog.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

app.delete('/:id', async(req,res) => {
  try {
    await blog.findByIdAndDelete(req.params.id);
    res.send("Data deleted Successfully")
  } catch (error) {
    res.send(error);
  }
});

app.put('/:id', async(req,res)=>{
  try {
    await blog.findByIdAndUpdate(req.params.id,req.body);
    res.send("Data updated successfully");
  } catch (error) {
    res.send(error);
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
