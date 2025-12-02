import {Pool} from "pg"

const connectionString = process.env.DATABASE_URL

const pool =  new Pool({
  connectionString : connectionString,
});


const connectToDatabase = async ()=>{
    try{
        const client = await pool.connect()
        console.log("DB is connected")
        client.release()
    }catch(err){
        console.error("error databse is not connecting" , err)
    }
}

export {pool ,connectToDatabase};       