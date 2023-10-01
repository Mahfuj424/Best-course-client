import { NavLink, Outlet } from "react-router-dom";
import { FaWallet, FaHome, FaBook, } from 'react-icons/fa';
import { RxAvatar } from "react-icons/rx";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../components/AuthProvider/AuthProvider";
import useAxiosSecure from "./Hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
     const { user } = useContext(AuthContext);
     const [axiosSecure] = useAxiosSecure()

     const [roles, setRoles] = useState([]);

     useEffect(() => {
          axiosSecure.get(`users/${user?.email}`)
               .then(result => {
                    console.log(result.data);
                    setRoles(result.data.role)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])

     const isAdmin = roles === 'Admin'
     const isInstructor = roles === 'instructor'
     const isStudent = roles === undefined || null



     return (
          <div className="drawer lg:drawer-open ">
               <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
               <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <Outlet></Outlet>

               </div>
               <div className="drawer-side bg-[#140342]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-white">


                         {isAdmin &&
                              <>
                                   <Helmet>
                                        <title>
                                             Best Course | ADMIN DASHBOARD
                                        </title>
                                   </Helmet>
                                   <h1 className="text-3xl font-semibold text-center mb-5">Admin</h1>

                                   <li><NavLink to="/dashboard/manageClasses"><FaBook></FaBook>Manage Classes</NavLink></li>
                                   <li><NavLink to="/dashboard/manageUser"><RxAvatar />Manage User</NavLink></li>
                              </>
                         }

                         {isInstructor &&
                              <>
                                   <Helmet>
                                        <title>
                                             Best Course | INSTRUCTOR DASHBOARD
                                        </title>
                                   </Helmet>
                                   <h1 className="text-3xl font-semibold text-center mb-5">Instructor</h1>

                                   <li><NavLink to="/dashboard/addClass"><FaBook></FaBook>Add A Class</NavLink></li>
                                   <li><NavLink to="/dashboard/addQuiz"><FaBook></FaBook>Add Quiz</NavLink></li>
                                   <li><NavLink to="/dashboard/myClasses"><FaBook></FaBook>My Classes</NavLink></li>
                              </>
                         }


                         {isStudent &&
                              <>
                                   <Helmet>
                                        <title>
                                             Best Course | STUDENT DASHBOARD
                                        </title>
                                   </Helmet>
                                   <h1 className="text-3xl font-semibold text-center mb-5">Student</h1>

                                   <li><NavLink to="/dashboard/selectCourses"><FaBook></FaBook>My Selected Classes</NavLink></li>
                                   
                              </>
                         }



                         <hr className="my-8" />
                         <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                         <li><NavLink to="/courses"><FaBook></FaBook>Courses</NavLink></li>
                    </ul>

               </div>
          </div>
     );
};

export default Dashboard;