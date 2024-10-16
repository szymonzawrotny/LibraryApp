import express from 'express';

const app = express();

const port = 5000;

app.listen(port,()=>{
    console.log(`serwer nasłuchuje na porcie ${port}`)
})

app.get("/api",(req,res)=>{
    res.json({
        tab:["jeden","dwa","trzy"],
        text: "siema co tam"
    })
})