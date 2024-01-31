const express =require('express');
const app=express();
const bodyParser=require('body-parser');

const db=require('./db');
const User = require('./models/User');

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send('Hello world');
})
app.post('/register',async(req,res)=>{
      const data=req.body;
      try{
            const userData=new User(data);
            const response=await userData.save();
            console.log("Data saved");
            res.status(200).json(response);

      }
      catch(err){
            console.log("Error",err);
            res.status(500).json({error:"Internal Server Error"});   
      }
})
app.get('/users',async(req,res)=>{
    
    try{
          const data=await User.find();
          console.log("Data saved");
          res.status(200).json(data);

    }
    catch(err){
          console.log("Error",err);
          res.status(500).json({error:"Internal Server Error"});   
    }
})

const userRoutes=require('./routes/userRoute')
app.use('/',userRoutes);

app.listen(3001,console.log('http://localhost:3001'));
