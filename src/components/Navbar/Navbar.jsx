
import { Link, NavLink } from 'react-router-dom';
import { RxAvatar } from 'react-icons/rx'
import { BiArrowFromLeft } from 'react-icons/bi'
import { PiGraduationCap } from "react-icons/pi";
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useContext } from 'react';
const Navbar = () => {
     const { user, logOut } = useContext(AuthContext)


     const navItem = <div className='md:space-x-8 space-y-3 text-white md:text-black items-center md:space-y-0 pb-2 mb:pb-0 md:flex'>
          <p className='text-lg text-white hover:text-[#00FF84] transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-[#00FF84] border-[#00FF84]' : ''} to='/'>Home</NavLink></p>
          <p className='text-lg text-white hover:text-[#00FF84] transition-all'><NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-[#00FF84] border-[#00FF84]' : ''} to='/courses'>Courses</NavLink></p>
          <p className='text-lg text-white hover:text-[#00FF84] transition-all'>{user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-[#00FF84] border-[#00FF84]' : ''} to='/dashboard'>Dashboard</NavLink>}</p>
          <p className='text-lg text-white hover:text-[#00FF84] transition-all'>{user && <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-[#00FF84] border-cyan-500' : ''} to='/myClasses'>My Classes</NavLink>}</p>

          <p className='text-lg text-white hover:text-[#00FF84] transition-all '> {
               user ?
                    <NavLink onClick={() => logOut()}><span className='flex items-center gap-1'>
                         <span>LogOut</span> <BiArrowFromLeft /></span></NavLink>
                    :
                    <NavLink className={({ isActive }) => isActive ? 'border-b-2 pb-2 text-white text-[#00FF84] border-[#00FF84]' : ''} to='/login'>Login</NavLink>

          }</p>



     </div>

     return (
          <div className='md:bg-[#140342] font-semibold pt-4 w-full z-10 fixed opacity-80'>
               <div className="navbar container p-0">
                    <div className="navbar-start">
                         <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#00FF84]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu text-white menu-sm dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 md:flex items-center">
                                   {navItem}
                              </ul>
                         </div>
                         <Link to='/' className="text-xl  flex items-center cursor-pointer">
                              <PiGraduationCap className='text-white font-bold border p-2 bg-[#00FF84] text-bold rounded-md w-14 h-14'/>
                               <span className='text-white text-2xl ms-2'>Best Courses</span>
                         </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                         <ul className="menu menu-horizontal items-center px-1">
                              {navItem}
                         </ul>
                    </div>
                    <div className="navbar-end">
                         <div className="avatar">
                              <div className=" w-[50px] rounded-full ">
                                    {user ? <img title={user?.displayName} src={user?.photoURL} /> : <RxAvatar className='text-white cursor-pointer' size={40} />} 
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Navbar;