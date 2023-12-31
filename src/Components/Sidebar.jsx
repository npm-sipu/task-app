import { FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className='fixed inset-y-0 left-0 w-1/3 bg-white shadow-md flex flex-col z-50'>
      <div className='p-4 flex justify-between bg-gray-800 text-white items-center'>
        <h3 className='text-xl font-bold'>Side Bar</h3>
        <button
          onClick={toggleSidebar}
          className='text-gray-200 hover:text-gray-100 ml-auto'
        >
          <FaTimes className='text-xl' />
        </button>
      </div>
      <div className='p-4 flex-grow'>
        <ul className='menu menu-horizontal px-1'>
          <li onClick={toggleSidebar}>
            <NavLink to='/company' className='text-sm hover:bg-black/50'>
              Companies
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
