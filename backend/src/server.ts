
import dotenv from "dotenv"
dotenv.config()
import { Request , Response } from "express";
import express from "express"
import cors from "cors"; 


import {pool , connectToDatabase} from "./database/db" 
import qoute from "./routes/qoute"

console.log("DB url loaded" , process.env.DATABASE_URL ? "yes" : "no")

const app = express()
const port = 3131

connectToDatabase()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }));
app.get('/' , (req : Request, res : Response)=>{
    res.send('Home page')
})

app.use("/qoute" , qoute)

app.listen(port ,   ()=>[
    console.log(`app is listening at port ${port}`)
])