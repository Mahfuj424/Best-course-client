/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Rating from 'react-rating';
import { HiStar, HiOutlineStar } from "react-icons/hi";
import Swal from 'sweetalert2';
import { AuthContext } from '../../components/AuthProvider/AuthProvider';

const CourseDetails = () => {


    const courseDetailsData = useLoaderData([])
    console.log(courseDetailsData);


    const navigate = useNavigate();


    const { id } = useParams();
    const courseData = courseDetailsData && courseDetailsData.find(data => data._id == id)

    console.log(courseData);

    const { user } = useContext(AuthContext);
    console.log(user);
    // const userInformation = [user?.email, user.name,]

    const { course_image, course_name, course_rating, course_information, course_syllabus, course_content, enrolled_number, instructor_name, instructor_information, _id } = courseData;


    const handleSelectCourse = (courses) => {
        const { course_image, course_name, course_rating, course_information, course_syllabus, course_content, enrolled_number, instructor_name, instructor_information, _id } = courses;
        const selectCourses = { course_image, course_name, course_rating, course_information, course_syllabus, course_content, enrolled_number, instructor_name, instructor_information, _id, userEmail: user?.email }

        fetch('https://best-course-server.vercel.app/selected', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(selectCourses)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);

                if (data.insertedId) {
                    return Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Admit',
                        icon: 'success',
                        confirmButtonText: 'Successfully Selected'
                    })
                }
            })
        navigate('/dashboard/selectCourses')

    }

    return (
        <div>

            <div className='pt-20 text-white'>
                <div className="container mt-5 lg:flex flex w-[100%] gap-10 mb-5 rounded-xl shadow-xl min-h-screen bg-[#140342]">
                    <div className='w-[50%] border border-r-1'>
                        <div className='p-5'>
                            <img className='rounded-xl' src={course_image} alt="" />
                        </div>
                        <div className='mt-5 pl-5 space-y-3'>
                            <h1 className='text-xl font-bold'>Course Name : {course_name}</h1>
                            <p>Course Information : {course_information}</p>
                            <p>Enrolled Person : {enrolled_number}</p>
                            <div>
                                Course Syllabus :
                                <ul>
                                    <li>{course_syllabus[0]}</li>
                                    <li>{course_syllabus[1]}</li>
                                    <li>{course_syllabus[2]}</li>
                                    <li>{course_syllabus[3]}</li>
                                    <li>{course_syllabus[4]}</li>
                                    <li>{course_syllabus[5]}</li>
                                    <li>{course_syllabus[6]}</li>
                                    <li>{course_syllabus[7]}</li>
                                </ul>
                            </div>

                            <div>
                                <Rating
                                    className='text-yellow-500'
                                    readonly
                                    placeholderRating={course_rating}
                                    emptySymbol={<HiOutlineStar />}
                                    placeholderSymbol={<HiStar />}
                                    fullSymbol={<HiStar />}
                                />
                            </div>
                            <div className='pb-5'>
                                <button onClick={() => handleSelectCourse(courseData)} className='button'>Select Course</button>
                            </div>

                        </div>
                    </div>
                    <div className='w-[50%] border border-l-1 pb-5'>
                        <div className='mt-20 pl-5'>
                            <h1 className='text-center text-3xl'>instructor details</h1>
                            <div className='mt-10 space-y-3'>
                                <h1 className='text-lg font-bold'>Instructor Name : {instructor_name}</h1>
                                <p>Instructor Information : {instructor_information}</p>
                                <p>I always try to make new technology video playlists, if you enjoy watching my videos, let me know</p>
                                <h1 className='mt-5 text-xl uppercase text-center'>please give me your opinion</h1>
                                <div className='flex flex-col space-y-5'>
                                    <input type="text" placeholder="name" className="input input-bordered input-primary w-full max-w-xs" />
                                    <input type="text" placeholder="email" className="input input-bordered input-primary w-full max-w-xs" />
                                    <textarea className='w-80 rounded-lg' placeholder='Comment' name="" id="" cols="3" rows="10"></textarea>
                                </div>
                                <button className='button'>send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;