import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Rating from 'react-rating';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const SelectCourse = () => {

     const [axiosSecure] = useAxiosSecure();
     const [selectCourse, setSelectCourse] = useState([]);

     const { user } = useContext(AuthContext)

     useEffect(() => {
          axiosSecure.get(`https://best-course-server.vercel.app/select/${user?.email}`)
               .then(result => {
                    console.log(result.data);
                    setSelectCourse(result.data)
               })
               .catch(err => {
                    console.log(err.message);
               })
     }, [])

     const navigate = useNavigate();



     const handleWatchVideo = () => {
          if (!user?.email) {
               navigate('/login')
          }
     }


     return (
          <div>
               <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-3 mx-auto pl-5">
                    {
                         selectCourse.map(course => {
                              return <div key={course._id} className="card w-[360px] bg-base-100 shadow-xl">
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
                                             <Link to={`/dashboard/watchVideo/${course._id}`}>
                                                  <button onClick={handleWatchVideo} className="fill-btn">Watch Now</button>
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

export default SelectCourse;