import logo from '../assets/logoMv.png'
import { Link } from "react-router"

export default function Navbar() {
      const logoGradient = "bg-gradient-to-r from-[#0F245B] via-[#32DBE9] to-[#FA7327]";
       const hoverGradient = "bg-gradient-to-r from-[#0F245B] via-[#32DBE9] to-[#FA7327] hover:bg-gradient-to-l transition-all duration-500";
    return (
        <>
            <div className={`navbar ${logoGradient}` } >
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Navigate</a></li>
                            
                        </ul>
                    </div>
                    <Link to="/" className=" "><img src={logo}height={40} width={110} alt="logo" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li  className={`btn ${logoGradient} ${hoverGradient} text-white`}><Link to="/">Home</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/movielist" className={`btn ${logoGradient} ${hoverGradient} text-white`}>Movie Page</Link>
                </div>
            </div>
        </>
    )
}
