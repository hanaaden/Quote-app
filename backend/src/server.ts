
import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"; 


import {pool , connectToDatabase} from "./database/db" 
import qoute from "./routes/qoute"

console.log("DB url loaded" , process.env.DATABASE_URL ? "yes" : "no")

const app = express()
const port = 3131

connectToDatabase()

app.use(express.json())
app.use(cors({ origin: "https://quote-app-pearl-one.vercel.app/" }));
app.get('/' , (req , res)=>{
    res.send('Home page')
})

app.use("/qoute" , qoute)

app.listen(port ,   ()=>[
    console.log(`app is listening at port ${port}`)
])