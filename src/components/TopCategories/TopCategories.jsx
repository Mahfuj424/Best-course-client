import { PiVideo } from "react-icons/pi";


const TopCategories = () => {
     return (
          <div className="container">
               <h1 className="text-center text-4xl mb-8">Top Categories</h1>
               <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:ms-0 ms-16 ps-3 md:ps-0">
                    <div className="w-60 h-72 text-center shadow-xl hover:bg-[#140342] hover:text-white bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
                         <PiVideo className="w-16 h-16 border border-2 bg-white text-black border-black rounded-full p-3" />
                         <p className="mt-5 text-lg ">Graphics <br /> Designer</p>
                         <p>7 Course</p>
                    </div>
                    <div className="w-60 h-72 text-center shadow-xl hover:bg-[#140342] hover:text-white bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
                         <PiVideo className="w-16 h-16 bg-white text-black border border-2 border-black rounded-full p-3" />
                         <p className="mt-5 text-lg ">Web  <br /> Development</p>
                         <p>5 Course</p>
                    </div>
                    <div className="w-60 h-72 text-center shadow-xl hover:bg-[#140342] hover:text-white bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
                         <PiVideo className="w-16 h-16 bg-white text-black border border-2 border-black rounded-full p-3" />
                         <p className="mt-5 text-lg ">UX/UI <br /> Designer</p>
                         <p>8 Course</p>
                    </div>
                    <div className="w-60 h-72 text-center shadow-xl hover:bg-[#140342] hover:text-white bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
                         <PiVideo className="w-16 h-16 bg-white text-black border border-2 border-black rounded-full p-3" />
                         <p className="mt-5 text-lg ">Android App <br /> Developer</p>
                         <p>4 Course</p>
                    </div>
                    <div className="w-60 h-72 text-center shadow-xl hover:bg-[#140342] hover:text-white bg-gray-200 p-8 rounded-lg flex flex-col items-center justify-center">
                         <PiVideo className="w-16 h-16 bg-white text-black border border-2 border-black rounded-full p-3" />
                         <p className="mt-5 text-lg ">Digital<br /> Marketing</p>
                         <p>10 Course</p>
                    </div>
               </div>
          </div>
     );
};

export default TopCategories;