import axios from "axios"
import { useEffect, useState } from "react"
interface typer {
    name : string;
    theqoute : string;
}

function Quotes() {


    const [data , setData] = useState<typer[]>([])
    const [addData , setAddData] = useState({name : "" , text :""})
    const handleSubmit = async (e :React.FormEvent<HTMLFormElement>) => {
e.preventDefault();
try {
const response = await fetch("https://quote-app-dr9q.onrender.com/qoute/addqoute", {
method: "POST",
headers: {
"Content-Type": "application/json",
},
body: JSON.stringify(addData),
});
const result = await response.json();
console.log("Response:", result);
} catch (error) {
console.error("Error:", error);
}
};

 const fetchData = async () => {
  try {
    const response = await axios.get("https://quote-app-dr9q.onrender.com/qoute/getquotes");
    setData(response.data.data.qoutelist)
    
;
  } catch (err) {
    console.error("Error when fetching", err);
  }
};
 

    useEffect(()=>{
    fetchData()
})
  return (
   <>
        <div className="flex flex-col justify-center p-20">
            <h1 className="text-orange-400  text-8xl text-center">Welcome to the Quotera</h1>
        <h3 className="text-2xl text-center p-8">this is Quotera where you can find and create Quotes Whether you want to save motivational lines, personal thoughts, or messages from others, the app makes it easy to find, add, and view quotes all in one place. go down so you can create your own</h3>
        <ul className="text-orange-white">
            {data.map((quote , index)=>(
                <li key={index} className="p-6 bg-yellow-900 m-6 rounded-3xl ">
                      <p className="text-2xl">
                        {quote.theqoute}
                    </p>
                    <p className="text-orange-300">
                        ~ {quote.name}
                    </p>
                  
                </li>
            ))}
        </ul>
<div>
    <h1 className="text-center p-8">Create your Quote </h1>
        <form onSubmit={handleSubmit} className="bg-yellow-900 p-12 flex flex-col justify-center rounded-2xl">
<input 
className="mb-6 p-6 rounded-full bg-yellow-700"
type="text"
placeholder="Name"
value={addData.name}
onChange={(e) => setAddData({ ...addData, name: e.target.value })}
/>
<input
className="mb-6 p-6 rounded-full bg-yellow-700"
type="text"
placeholder="quote"
value={addData.text}
onChange={(e) => setAddData({ ...addData, text: e.target.value })}
/>
<button type="submit" className="mb-6 w-24  rounded-full bg-yellow-700 hover:bg-orange-900">Submit</button>
</form>
</div>
        </div>
          <div className='font-bold bg-yellow-900 text-center w-full h-15 mt-12  '>
     <h3 className=''>© 2025 <span className='  font-bold'>Hana Aden</span> . All rights reserved. {" "}</h3>
     <p>Email: hanaadenabdi@gmail.com | github: hanaaden</p>
    </div>
    </>
  )
}

export default Quotes