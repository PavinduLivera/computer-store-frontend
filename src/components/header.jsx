import { Link } from "react-router-dom";

export default function Header () {
    return (
        <header className="w-full h-[100px] bg-accent flex">
        <img src="./Logo.png" alt="" className="h-full" />
        {/* <h1>Header</h1> */}
        <div className="w-full h-full flex justify-center items-center gap-[30px]">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
        </header>
    )
}