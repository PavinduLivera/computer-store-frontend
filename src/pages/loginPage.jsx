import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    async function login(){
        console.log("Login button clicked");
        console.log("Email:", email);
        console.log("Password:", password);

        try {
            const res = await axios.post("http://localhost:3000/login", {
            email : email,
            password : password
            });

            console.log(res.data);

        } catch (err) {
            console.log("Error during login:");
            console.log(err);
        }

    }

    return (
        <div className="w-full h-screen bg-[url('/login-bg.jpg')] bg-cover bg-no-repeat flex">
            <div className="w-[50%] h-full flex justify-center items-center flex-col p-[50px]">
                <img src="/Print.png" alt="logo" className="w-[200px] mb-[0] object-cover" />
                <h1 className="text-[50px] text-accent text-shadow-2xs font-bold">To be professional</h1>
                <p className="text-[20px] text-white italic">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, ducimus!</p>

            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-2xl flex flex-col justify-center items-center p-[30px]">
                    <h1 className="text-[40px] font-bold mb-[20px] text-accent text-shadow-black">Login</h1>
                    <input 
                        onChange={
                            (e) => {
                                setEmail(e.target.value);
                            }
                        }
                        type="email" 
                        placeholder="Your email" 
                        className="w-full h-[50px] mb-[20px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <input 
                        onChange={
                            (e) => {
                                setPassword(e.target.value);
                            }
                        }
                        type="password" 
                        placeholder="Your password" 
                        className="w-full h-[50px] rounded-lg border border-accent p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-blue-400" />
                
                    <p className="text-white not-italic w-full text-right  mb-5">Forget your password? 
                        <Link to="/register" className="text-accent italic">  Reset it here</Link>
                    </p>


                    <button onClick={login} className="w-full h-[50px] bg-accent text-secondary font-bold text-[20px] rounded-lg border-[2px] border-accent hover:bg-transparent hover:text-accent">Login</button>
                    <p className="text-white not-italic">Don't have an account?
                        <Link to="/register" className="text-accent italic">  Register here</Link>
                    </p>
                </div>
            </div>
            
        </div>
    )
}