import { Router , Request , Response } from "express";

import { Pool } from "pg";
import { pool } from "../database/db";
const router = Router()

router.get('/getquotes' , async (req : Request , res :Response)=>{

    const result = await pool.query(`SELECT * FROM qoutes`)
    const qoutelist = result.rows
    // for (let i = 0 ; i<qoutelist.length ; i++){
    //     qoutelist[i]
    // }
    res.status(200).send({
        status : "success",   
        data : {qoutelist}
    })

})

router.post('/addqoute' , async (req :Request , res :Response)=>{
  const {name , text} = req.body
  if(!name || !text){
    res.status(400).send({
        status : "bad request"
    })
  }

  await pool.query(`INSERT INTO qoutes (name,theqoute) VALUES ($1,$2)` , [name,text])
  res.status(200).send({
    status : 'quote created successfully'
  })
})

export default router