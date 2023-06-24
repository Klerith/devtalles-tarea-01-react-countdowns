import { Link, useLocation } from "react-router-dom"
import { FaReact } from 'react-icons/fa';

export const Navbar = () => {

  const { pathname } = useLocation();


  return (
    <nav className="navbar bg-base-100">
      <div className="navbar-start">
        
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to={'/countdown'}>Countdown</Link></li>
            <li><Link to={'/radial'}>Radial</Link></li>
          </ul>
        </div>
        <a href="https://daisyui.com/"
          target="_blank"
           className="btn btn-ghost normal-case text-xl">
            <FaReact />
            daisyUI
          </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
            <li><Link className={(pathname === '/countdown' || pathname === '/') ?'underline':''} to={'/countdown'}>Countdown</Link></li>
            <li><Link className={(pathname === '/radial') ?'underline':''} to={'/radial'}>Radial</Link></li>
        </ul>
      </div>
    </nav>
  )
}
