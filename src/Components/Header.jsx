import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const userData = JSON.parse(sessionStorage.getItem("registerData"));
  useEffect(() => {
    if (userData && userData.firstName) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [userData]);

  return (
    <div className='navbar bg-base-100 shadow-lg'>
      <div className='flex-none md:hidden sm:hidden'>
        <button onClick={toggleSidebar} className='btn btn-square btn-ghost'>
          <FaBars className='text-2xl' />
        </button>
        {isOpen && <Sidebar toggleSidebar={toggleSidebar} />}
      </div>
      <div className='flex-1'>
        <NavLink to='/' className='btn btn-ghost normal-case text-xl'>
          Task App
        </NavLink>
      </div>
      <div className='flex-none hidden md:block sm:block'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to='/company' className='text-md'>
              Companies
            </NavLink>
          </li>
          <li>
            <NavLink to='/people' className='text-md'>
              People
            </NavLink>
          </li>
          {isLoggedIn ? (
            <li>
              <NavLink to='/profile' className='text-md'>
                {userData.email}
              </NavLink>
            </li>
          ) : (
            <>
              <li>
                <NavLink to='/login' className='text-md'>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to='/register' className='text-md'>
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
