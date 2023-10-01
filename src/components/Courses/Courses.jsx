import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import Rating from "react-rating";
import { HiOutlineStar, HiStar, } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Courses = () => {


     // const [searchText, setSearchText] = useState('')
     // const [reload, setReload] = useState(false)
     // const [sortBy, setSortBy] = useState('')

     const { user } = useContext(AuthContext)
     const navigate = useNavigate();

     const [axiosSecure] = useAxiosSecure()
     const [courses, setCourses] = useState([])
     // console.log(courses);
     useEffect(() => {
          axiosSecure.get(`course`)
               .then(result => {
                    console.log(result.data);
                    setCourses(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])



     const handleCourseDetails = () => {
          if (user?.email) {
               navigate("/login")
          }

     }


     // useEffect(() => {
     //      let apiUrl = `https://best-course-server.vercel.app/myToy/${user?.email}`;
     //      if (sortBy) {
     //           apiUrl += `?sortBy=${sortBy}`;
     //      }

     //      fetch(apiUrl)
     //           .then(res => res.json())
     //           .then(data => {
     //                const parsedData = data.map(toy => ({
     //                     ...toy,
     //                     price: parseInt(toy.price),
     //                }));

     //                if (sortBy === 'lower') {
     //                     parsedData.sort((a, b) => a.enrolled_number - b.enrolled_number);
     //                } else if (sortBy === 'higher') {
     //                     parsedData.sort((a, b) => b.enrolled_number - a.enrolled_number);
     //                }

     //                setCourses(parsedData)
     //           })
     // }, [user, reload, sortBy])


     // const handleSortByChange = e => {
     //      setSortBy(e.target.value)
     // }


     // const handleSearch = () => {
     //      fetch(`https://best-course-server.vercel.app/searchText?search=${searchText}`)
     //          .then(res => res.json())
     //          .then(data => setCourses(data))
     //  };



     return (
          <div className="container py-24">
               <h1 className="text-center text-4xl mb-8">All Courses</h1>
               <div>
                    <div className="form-control w-1/2 mx-auto mb-5">
                         <input type="text" placeholder="search" className="input input-bordered border-[#00FF84]" />
                         <input onClick={"handleSearch"} className='fill-btn mx-auto mt-3 btn-success w-[20%]' type="submit" value="Search" />
                    </div>
                    <div className='flex justify-end mb-12'>
                         <select value={"sortBy"} onChange={"handleSortByChange"}
                              className='border-2 p-2 border-success'
                         >
                              <option value="">Sort By</option>
                              <option value="lower">Lower Price</option>
                              <option value="higher">Higher Price</option>
                         </select>
                    </div>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5 mx-auto">
                    {
                         courses.map(course => {
                              return <div key={course._id} className="card w-96 bg-base-100 shadow-xl">
                                   <figure><img src={course.course_image} alt="Shoes" /></figure>
                                   <div className="card-body">
                                        <h2 className="text-xl font-bold">{course.course_name}</h2>
                                        <p className="text-lg">Instructor: {course.instructor_name}</p>
                                        <p className="text-lg">Total Enrolled: {course.enrolled_number}</p>
                                        <Rating
                                             className='text-yellow-500'
                                             readonly
                                             placeholderRating={course.course_rating}
                                             emptySymbol={<HiOutlineStar />}
                                             placeholderSymbol={<HiStar />}
                                             fullSymbol={<HiStar />}
                                        />
                                        <div className="card-actions justify-end">
                                             <Link to={`/courseDetails/${course._id}`}>
                                                  <button onClick={handleCourseDetails} className="fill-btn">Details</button>
                                             </Link>
                                        </div>
                                   </div>
                              </div>
                         })
                    }

               </div>
          </div>
     );
};

export default Courses;