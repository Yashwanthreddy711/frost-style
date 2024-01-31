const mongoose=require('mongoose')

const mongourl='mongodb+srv://yashwanthreddy:yashwanth123@cluster0.ldti7yy.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(mongourl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;

db.on('connected',()=>{
    console.log("Database connected");
})
db.on('error',(err)=>{
    console.log("Error occured",err);
})
db.on('disconnected',()=>{
    console.log("Mongodb disconnecetd");
})

module.exports=db;