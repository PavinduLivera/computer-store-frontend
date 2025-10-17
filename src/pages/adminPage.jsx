import { Link, Route, Routes } from "react-router-dom";
import { FaThList } from "react-icons/fa";
import { BsFillInboxesFill } from "react-icons/bs";
import { HiMiniUsers } from "react-icons/hi2";
import { MdReviews } from "react-icons/md";

export default function AdminPage() {
    return (
        <div className="w-full h-full flex bg-accent">
            <div className="w-[300px] bg-accent h-full">
                <div className="w-full h-[100px] text-primary flex items-center">
                    <img src="/Logo.png" alt="Logo" className="h-full" />
                    <h1 className="text-2xl">Admin</h1>
                </div>
                <div className="w-full h-[400px] text-white text-2xl flex flex-col">
                    
                    <Link to="/admin" className="w-full flex items-center h-[50px] gap-[10px]"><FaThList />Orders</Link>
                    <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-[10px]"><BsFillInboxesFill />Products</Link>
                    <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-[10px]"><HiMiniUsers />Users</Link>
                    <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-[10px]"><MdReviews />Reviews</Link>

                </div>
            </div>
            <div className="w-[calc(100%-300px)] h-full max-h-full bg-primary border-[10px] border-accent rounded-4xl overflow-y-scroll text-4xl">
                <Routes path="/">
                    <Route path="/" element={<h1>Orders</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/users" element={<h1>Users</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                </Routes>
            </div>
        </div>
    )
}