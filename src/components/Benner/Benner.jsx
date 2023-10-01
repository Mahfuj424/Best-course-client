import { PiGraduationCap, PiVideo } from "react-icons/pi";
import { FaBookReader } from "react-icons/fa";
import { Link } from "react-router-dom";

const Benner = () => {
     return (
          <div className="md:max-h-screen max-h-full pb-10 pt-20 bg-[#140342]">
               <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-28 ps-5 ">
                    <div>
                         <div className="text-6xl font-bold mt-20 text-white">
                              <h1>Learn New Skills</h1>
                              <h1 className="my-5">Online With Top</h1>
                              <h1 className="text-[#00FF84] underline">Educators</h1>
                         </div>
                         <p className="text-white text-lg mt-12">Build Skills With Courses, Certificates, And Degrees Online From <br /> World-Class Universities And Companies.</p>
                         <div className="mt-10 space-x-8">
                              <button className="fill-btn">Join For Free</button>
                              <Link to='/courses'>
                                   <button className="button">Find Course</button>
                              </Link>
                         </div>
                         <div className="text-white space-y-3 mt-10 text-center">
                              <p className="flex items-center space-x-2">
                                   <PiGraduationCap /> <p>Over 12 million Students</p>
                              </p>
                              <p className="flex items-center space-x-2">
                                   <PiVideo /> <p>More Then 20 Courses</p>
                              </p>
                              <p className="flex items-center space-x-2">
                                   <FaBookReader /> <p>Learn anything Online</p>
                              </p>
                         </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:mt-0 mt-10">
                         <div>
                              <img className="w-64" src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/about.png" alt="" />
                         </div>
                         <div className="grid grid-cols-1 gap-10">
                              <div>
                                   <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-1.png" alt="" />
                              </div>
                              <div>
                                   <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/home1-2.png" alt="" />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Benner;