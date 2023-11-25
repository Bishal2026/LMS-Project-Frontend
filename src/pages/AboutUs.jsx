import React from 'react'
import HomeLayout from '../Layouts/HomeLayout';
import aboutimage from "../Assets/Images/aboutMainImage.png";
import apjimage from "../Assets/Images/apj.png";
import bill from "../Assets/Images/billGates.png";
import einstein from "../Assets/Images/einstein.png";
import steveJobs from "../Assets/Images/steveJobs.png";
import nelsonMandela from "../Assets/Images/nelsonMandela.png";
function AboutUs() {
  return (
        <HomeLayout>
            <div className='pl-20 pt-20 flex-col text-white'>
                    <div className=' flex items-center gap-5 mx-10' >
                        <section className='w-1/2 space-y-10'>
                            <h1 className=' text-5xl text-yellow-500 font-semibold'>
                                Affordable and quailty education
                            </h1>
                            <p className='text-xl text-gray-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fuga, aspernatur totam fugiat labore modi architecto maxime iusto! Ducimus, in?</p>
                        </section>
                        <div className='w-1/2'>
                            <img
                            id='test1 ' 
                            style={{
                                filter:"drop-shadow(0px 10px 10px rgb(0,0,0))"
                            }

                            } className='drop-shadow-2xl' src={aboutimage} alt="about images" />

                        </div>
 
                    </div>
                    <div className="carousel w-1/2 m-auto my-16 flex justify-center">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"Education is the most powerful tool you can use to change the world."}
                            </p>
                            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a> 
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                    <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={apjimage} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"Failure will never overtake me if my determination to succeed is strong enough."}
                            </p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a> 
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={einstein} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"A person who never made a mistake never tried anything new."}
                            </p>
                            <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a> 
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"We don't get a chance to do that many things, and every one should be really excellent."}
                            </p>
                            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a> 
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="carousel-item relative w-full">
                         <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                            <img src={bill} className="w-40 rounded-full border-2 border-gray-400" />
                            <p className="text-xl text-gray-200">
                                {"ESuccess is a lousy teacher. It seduces smart people into thinking they can’t lose."}
                            </p>
                            <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a> 
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </HomeLayout>
  )
}

export default AboutUs