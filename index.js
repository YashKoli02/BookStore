import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"
import path from "path";


const app=express();
app.use(cors());
app.use(express.json());
dotenv.config();
const port=process.env.PORT||4000;
const URL=process.env.MongoURL;

try{
 mongoose.connect(URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    family: 4
 });
 console.log("Connected to db");
}catch(error){
      console.log("Error: ",error);
}
// defining routes

app.use("/book",bookRoute)
app.use("/user",userRoute)

if(process.env.NODE_ENV==="production"){
  const dirPath=path.resolve();
  app.use(express.static("Frontend/dist"));
  app.get("*",(req,res)=>{
      res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"));
  })
}

app.listen(port,()=>{
 console.log(`Example app listening on port ${port}`);
});