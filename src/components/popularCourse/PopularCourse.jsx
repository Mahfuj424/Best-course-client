import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Pages/Hooks/useAxiosSecure";
import Rating from "react-rating";
import { HiOutlineStar, HiStar, } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const PopularCourse = () => {

     const { user } = useContext(AuthContext)
     const navigate = useNavigate();

     const [axiosSecure] = useAxiosSecure()
     const [courses, setCourses] = useState([])
     // console.log(courses);
     useEffect(() => {
          axiosSecure.get(`https://best-course-server.vercel.app/course`)
               .then(result => {
                    console.log(result.data);
                    setCourses(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])



     const handleCourseDetails = () => {
          if (!user?.email) {
               navigate("/login")
          }

     }

     const [showAll, setShowAll] = useState(false);
     const visibleCourse = showAll ? courses : courses.slice(0, 3);

     return (
          <div className="container">
               <h1 className="text-center text-4xl mb-8">Our Most Popular Courses</h1>
               <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-5 mx-auto">
                    {
                         visibleCourse.map(course => {
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
               <div className="mt-10 text-center">
                    {
                         !showAll ?
                              <button className="button" onClick={() => setShowAll(true)}>See More</button>
                              :
                              <button className="button" onClick={() => setShowAll(false)}>See less</button>

                    }
               </div>
          </div>
     );
};

export default PopularCourse;