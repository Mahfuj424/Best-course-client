import { Swiper, SwiperSlide } from "swiper/react";
// import {  Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import './styles.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Review = () => {
     return (
          <section className="bg-[rgb(109,57,253)] py-12 pb-14">
               <h1 className="text-4xl font-bold text-center text-[#00FF84] py-10">What People Say</h1>
               <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    // modules={[Pagination]}
                    className="mySwiper py-20"
               >
                    <SwiperSlide className="rounded-xl">
                         <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Great Work</h2>
                              <p className="my-5 text-sm">
                                   “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test1-2.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Ronald Richards</p>
                                        <p className="text-sm text-gray-500">President of Sales</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Perfect Job</h2>
                              <p className="my-5 text-sm">
                              “It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test2.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Annette Black</p>
                                        <p className="text-sm text-gray-500">Web Designer</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Service Good</h2>
                              <p className="my-5 text-sm">
                              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test3.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Robert Fox</p>
                                        <p className="text-sm text-gray-500">Marketing</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Work Hard</h2>
                              <p className="my-5 text-sm">
                              “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test4.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Brooklyn Simmons</p>
                                        <p className="text-sm text-gray-500">Web Designer</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Great Work</h2>
                              <p className="my-5 text-sm">
                              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test5.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Ronald Richards</p>
                                        <p className="text-sm text-gray-500">President of Sales</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Work Hard</h2>
                              <p className="my-5 text-sm">
                              “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test6.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Brooklyn Simmons</p>
                                        <p className="text-sm text-gray-500">Web Designer</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Great Work</h2>
                              <p className="my-5 text-sm">
                                   “I think Educrat is the best theme I ever seen this year. Amazing design, easy to customize and a design quality superlative account on its cloud platform for the optimized performance”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test2.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Ronald Richards</p>
                                        <p className="text-sm text-gray-500">President of Sales</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="h-72 bg-white p-5">
                              <h2 className="text-[rgb(109,57,253)]">Service Good</h2>
                              <p className="my-5 text-sm">
                              “Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae”
                              </p>
                              <hr />
                              <div className="flex mt-8 gap-5">
                                   <div className="w-16 h-16">
                                        <img src="https://demoapus1.com/educrat/learnpress/wp-content/uploads/2022/07/test3.png" alt="" />
                                   </div>
                                   <div>
                                        <p>Robert Fox</p>
                                        <p className="text-sm text-gray-500">Marketing</p>
                                   </div>
                              </div>
                         </div>
                    </SwiperSlide>
               </Swiper>
          </section>
     );
};

export default Review;