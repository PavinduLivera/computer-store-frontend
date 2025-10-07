import { useState } from "react";

export default function Test() {

    const [count , setCount] = useState(0)
    const [status , setStatus] = useState("⭐️")

    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-[400px] h-[300px] shadow-2xl flex items-center justify-center">

                <button className="w-[100px] h-[50px] bg-red-600 text-white"
                onClick={ ()=>{
                    setCount (count - 1)
                    //console.log("decrement")
                    //count = count - 1
                    //console.log(count)
                } }>
                    Decrement
                </button>

                <h1 className="w-[100px] h-[50px] text-[30px] text-center">{count}</h1>

                <button className="w-[100px] h-[50px] bg-blue-600 text-white"
                onClick={ ()=>{
                    setCount (count + 1)
                    //console.log("increment")
                    //count = count + 1
                    //console.log(count)
                } }>
                    Increment
                </button>

            </div>

            <div className="w-[400px] h-[300px] shadow-2xl flex flex-col items-center justify-center">

                <span className="h-[30px] text-2xl font-bold">
                    {status}
                </span>
                <div className="w-full h-[50px] gap-10 mt-10 flex justify-center">
                    <button className="w-[100px] text-white h-full bg-red-600"
                    onClick={
                        ()=> {
                            setStatus("⭐️")
                        }
                    }>Off</button>
                    <button className="w-[100px] text-white h-full bg-green-600"
                    onClick={
                        ()=> {
                            setStatus("🌟")
                        }
                    }>On</button>
                </div>

            </div>
        </div>
    )
}