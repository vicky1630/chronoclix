const express = require("express")
const app = express()




app.get("/", (req,res)=> {
    res.send("Ready to Rock!!")
})



app.listen(3000,()=>{
    console.log("Hello Seattle, I am listening...chroniclix");
})